const Faculty = require('@/models/Faculty');
const Student = require('@/models/Student');
module.exports = {
    index : async (req, res) => {
        const list = await Faculty.findAll({include:Student});
        res.json(list);
    },
    new : async(req, res) => {
        const model = Faculty.build({name : 'BCA'});
        await model.save();
        res.send(model);
    }
}