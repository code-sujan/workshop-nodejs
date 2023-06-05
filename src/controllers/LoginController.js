const User = require("@/models/UserModel");
const bcrypt = require('bcrypt');

module.exports = {
    login : async (req, res) => {
        res.render('login/index');
    },
    loginPost: async(req, res) => {
        try{
        const {username, password} = req.body;
        const user = await User.findOne({where: {'username' : username}});
        if(!user) throw Error("Invalid Username");
        const isMatched = await bcrypt.compare(password, user.password);
        if(!isMatched) throw Error("Invalid password");
        req.session.user = {id : user.id};
        res.redirect('/');
        }
        catch(e){
            res.status(401).send(e.message);
        }
    },
    logout : async(req, res) => {
        await req.session.destroy();
        res.redirect('/login');
    }
}