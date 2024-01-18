const jwt = require('jsonwebtoken');
const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('bearer')) {
        res.send('Auth failed')
    }
    const token = authHeader.split('')[1];
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.user = { userId: payload.userId };
        next();
    }
    catch (err) {
        res.send('Auth failed')
    }
}

module.exports=userAuth