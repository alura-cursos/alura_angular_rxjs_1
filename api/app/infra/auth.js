const jwt = require('jsonwebtoken')
    , { promisify } = require('util');

const verify = promisify(jwt.verify);

module.exports = async (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (token) {
        try {
            const decoded = await verify(token, req.app.get('secret'));
            console.log(`Valid token received: ${token}`);
            req.user = decoded;
            next();
        } catch (err) {
            console.log(err);
            console.log(`Invalid token: ${token}`);
            return res.sendStatus(401);
        }
    } else {
        console.log('Toke is missing!');
        return res.sendStatus(401);
    }
}