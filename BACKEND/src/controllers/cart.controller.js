const user = require('../models/user.model')
const ApiError = require('../utils/ApiError')
const ApiResponse = require('../utils/ApiResponse')
const asyncHandler = require('../utils/asyncHandler')

const addToCart = asyncHandler(async (req,res)=>{
    const {itemId, quantity} = req.body

    if(!itemId) return res.status(400).json(
        new ApiError(400,`Item _id is required`)
    )

    const findItem = await user.findOne({'cart.item':itemId})
    
    if(findItem){
        await user.updateOne({'cart.item':itemId},{
            $inc:{'cart.$.quantity':1}
        })
    }

    const newCartItem = {
        item:itemId,
        quantity:quantity
    }

    await req.user.cart.push(newCartItem)
    await req.user.save()

    res.status(200).json(
        new ApiResponse(200,`newCartItem`,`Item added to cart`)
    )
})

const getCart = asyncHandler(async (req,res)=>{
    const cartData = await user.aggregate([
        {
            $match: { _id:req.user?._id }
        },
        {
            $project: { cart:1, _id:0 }
        },
        {
            $unwind: { path: '$cart'}
        },
        {
            $lookup: {
                from: 'items',
                localField: 'cart.item',
                foreignField: '_id',
                as:'itemDetails'
            }
        },
        {
            $addFields: {
                quantity: { $add:'$cart.quantity'}
            }
        },
        {
            $unwind: { path: '$itemDetails'}
        },
        {
            $project: {
                cart:0,
                'itemDetails.createdAt':0,
                'itemDetails.updatedAt':0,
                'itemDetails.__v':0,
            }
        }
    ])

    return res.status(200).json(
        new ApiResponse(200,cartData,`cart fetched successfully`
    ))
})

const removeFromCart = asyncHandler(async (req,res)=>{
    const { itemId } = req.params
    
    await user.updateOne({_id:req.user?._id},{
        $pull:{cart: {item:itemId} }
    })
    
    res.status(200).json(
        new ApiResponse(200,null,`item removed from cart`  
    ))
})

module.exports = {
    addToCart,
    getCart,
    removeFromCart
}