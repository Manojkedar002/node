const jwt = require('jsonwebtoken');

module.exports = async (req, res,next) => {
    try {
        //get token
        const token = req.headers['authorization'].split(" ")[1]
        console.log(req.headers['authorization']);
        jwt.verify(token, process.env.JWT_SECRETEKEY, (err, decode) => {
            if (err) {
                return res.status(401).send({
                    success: false,
                    meassage: "un-authorise user"
                });
            }
            else {
                console.log(decode)
                req.body.id = decode.id;
                next();
            }
        });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            success: false,
            meassage:"Error in Auth Api"
        })
    }
}