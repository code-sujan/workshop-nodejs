const User = require('@/models/UserModel');
module.exports = {
    index : async (req, res) => {
        const list = await User.findAll();
        res.send(list);
        // const list = [
        //     {name : "one", address :"addr one"},
        //     {name : "two", address :"addr two"},
        //     {name : "three", address :"addr three"},
        // ];
        // res.render('index', {data : "user", list});
    },
    new: async(req, res) => {
        const user = User.build({name : 'test', email:'test@gmail.com', address: 'addr'});
        user.save();
        res.send("Success");
    }
}