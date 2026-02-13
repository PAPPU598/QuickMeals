class ApiError extends Error{
    constructor(
        statusCode,
        message = `Error happened in ApiError`,
        errors = [],
        stack = ""
    ){
        super(message)
        // this.statusCode = statusCode
        this.data = null
        this.success = false
        this.errors = errors
        this.message = message
    }
}

module.exports = ApiError