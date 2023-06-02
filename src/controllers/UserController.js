const User = require("@/models/UserModel")

module.exports = {
    index: async (req, res) => {
        const list = await User.findAll();
        res.render('user/index', {list});
    },
    new : async(req, res) => {
        res.render('user/new');
    },
    newPost: async(req, res) => {
        const {name, email, address} = req.body;
        const user = User.build({name, email, address});
        await user.save();
        res.redirect('/user');
    }
}