const Faculty = require('@/models/Faculty');
module.exports = {
    index : async (req, res) => {
        const list = await Faculty.findAll();
        res.json(list);
    },
    new : async(req, res) => {
        const model = Faculty.build({name : 'BCA'});
        await model.save();
        res.send(model);
    }
}