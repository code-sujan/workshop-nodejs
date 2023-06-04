const User = require("@/models/UserModel");
const bcrypt = require('bcrypt');

module.exports = {
    login : async (req, res) => {
        const {username, password} = req.body;
        const user = await User.findOne({where: {username : username}})
        const isMatched = await bcrypt.compare(password, user.password);
        if(isMatched){
            req.session.user = {id : user.id};
            res.redirect('/');
        }
        else {
            res.status(401).send("Invalid password");
        }
    },
    logout : async(req, res) => {
        await req.session.destroy();
        res.send("Success");
    },

    loginTest :   async (req, res) => {
        res.send("Successful");
    }
}