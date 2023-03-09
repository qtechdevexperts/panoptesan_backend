export default (req, res, next) => {
    res.success = (status_code, msg, data = null) => {
        res.status(status_code).json({
            status: true, 
            code: status_code,
            message: msg, 
            data: data
        });
    }

    res.error = (exception) => {
        res.status(exception.code).json({
            status: false, 
            code: exception.code, 
            message: exception.message, 
            data: null, 
            error: exception.innerError 
        });
    }
    
    next();
};