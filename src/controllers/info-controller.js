const  statusCode  = require('http-status-codes');
const info = (req,res)=>{
    return res.status(statusCode.StatusCodes.OK).json({
        success:true,
        message:'Api is live',
        error:{},
        data:{}
    });
}

module.exports = {
    info
}