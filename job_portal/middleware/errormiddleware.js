
const errormiddlewares = (err, req, res, next) => {
    console.log(err);
    return res.status(500).send({
        success: false,
        message: "something went wrong",
        err
        
    })
}

module.exports={errormiddlewares}