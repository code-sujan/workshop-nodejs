const Student = require('@/models/Student');
const User = require('@/models/UserModel');
module.exports = {
    index : async (req, res) => {
        const list = await Student.findAll({include:User});
        res.send(list);
    },
    new : async (req, res) => {
        const student = Student.build({name:'First', address:'test', 'userId':1});
        await student.save();
        res.send(student);
    }
}