const sequelize = require('@root/sequelize-config');
module.exports = {
    index : async (req, res) => {
        await sequelize.authenticate();
        const list = [
            {name : "one", address :"addr one"},
            {name : "two", address :"addr two"},
            {name : "three", address :"addr three"},
        ];
        res.render('index', {data : "user", list});
    }
}