const jwt = require('jsonwebtoken');
const { UserDao } = require('../infra');

const api = {}

api.login = async (req, res) => {
    const { userName, password } = req.body;
    console.log('####################################');
   
    const user = await new UserDao(req.db).findByNameAndPassword(userName, password);
    console.log(user);
    if(user) {
        console.log(`User ${userName} authenticated`);
        console.log('Authentication Token added to response');
        const token = jwt.sign(user, req.app.get('secret'), {
            expiresIn: 86400 // seconds, 24h
        });
        res.set('x-access-token', token);
        return res.json(user);
    } else {
        console.log(`Authentication failed for user ${userName}`);
        console.log('No token generated');
        res.status(401).json({ message: `Authentication failed for user ${userName}`});  
    }
};

api.register = async (req, res) => {
    const user = req.body;
    const userId = await new UserDao(req.db).add(user);
    res.status(204).end();
};

api.checkUserNameTaken = async (req, res) => {
    const { userName } = req.params;
    const user = await new UserDao(req.db).findByName(userName);
    res.json(!!user);
};

module.exports = api;