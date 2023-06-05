const User = require('@/models/UserModel');
module.exports = {
    index : async (req, res) => {
        const list = [
            {name : "one", address :"addr one"},
            {name : "two", address :"addr two"},
            {name : "three", address :"addr three"},
        ];
        res.render('home/index', {data : "user", list});
    }
}