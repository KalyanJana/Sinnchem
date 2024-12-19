class ErrorHandler extends error{
    constructor(message, statusCode){
        supper(message)
        this.statusCode = statusCode
    }
}

export default ErrorHandler