const jwt = require('jsonwebtoken');

exports.cookieJwtAuth = (req, res, next) => {
    const token = req.cookies.token
    try{
        const user = jwt.verify(token, process.env.MY_SECRET);
        req.user = user
        console.log("Nice")
        next();
    } catch (err) {
        res.clearCookie("token");
        console.log("cookie")
        return err
    }
}