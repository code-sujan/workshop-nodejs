const User = require("@/models/UserModel");
const UserService = require('@/services/UserService');


module.exports = {
    index: async (req, res) => {
        const list = await User.findAll({
            attributes : ['id', 'name', 'username', 'email', 'address', 'createdAt', 'updatedAt'],
            order : [['id']]
        });
        res.render('user/index', {list});
    },
    new : async(req, res) => {
        res.render('user/new');
    },   
    newPost: async(req, res) => {
        const data = req.body;
        UserService.createUser(data);
        res.redirect('/user');
    },
    edit : async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        res.render('user/edit', {user});
    },
    editPost : async(req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        const {name, email, address, username} = req.body;
        user.name = name;
        user.email = email;
        user.address = address;
        user.username = username;
        user.update();
        await user.save();
        res.redirect('/user');
    },
    delete : async (req, res) => {
        const id = req.params.id;
        const user = await User.findByPk(id);
        await user.destroy();
        res.redirect('/user');
    },
}