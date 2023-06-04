const jwt = require('jsonwebtoken');
const { json } = require('sequelize');
const User = require('@/models/UserModel');
const bcrypt = require('bcrypt');
module.exports = {
    login : async (req, res) => {
        const {username, password} = req.body;
        const user = await User.findOne({where: {username : username}});
        if(!user) res.status(401).send("Username not valid");
        const isMatched = await bcrypt.compare(password, user.password);
        if(isMatched){
            var secret = process.env.JwtSecret;
            var refreshSecret = process.env.JwtRefreshSecret;
            var payload = {id : user.id, email : user.email};
            var accessToken = jwt.sign(payload, secret, {expiresIn: '1h'});
            var refreshToken = jwt.sign(payload, refreshSecret, {expiresIn: '1d'});
            res.json({accessToken, refreshToken});
        }
        else {
            res.status(401).send("Invalid password");
        }
    },

    verifyRefresh : (req, res) => {
        const {refreshToken} = req.body;
        var refreshSecret = process.env.JwtRefreshSecret;
        const decoded = jwt.verify(refreshToken, refreshSecret);
        if(!decoded.id) res.status(401).send("Invalid refresh token");
        var accessToken = jwt.sign(decoded, refreshSecret, {expiresIn: '1h'});
        res.json({accessToken});
    }
    
}