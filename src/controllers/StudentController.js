const Student = require('@/models/Student');
const User = require('@/models/UserModel');
const Faculty = require('@/models/faculty');
const UserService = require('@/services/UserService');
module.exports = {
    index : async (req, res) => {
        const list = await Student.findAll({include:[User, Faculty]});
        res.send(list);
    },
    new : async(req, res) => {
        const info = req.body;
        const userInfo = {
            name : info.name,
            email : info.email,
            username : info.email,
            password : 'Admin@123',
            address : info.address
        };
        const user = await UserService.createUser(userInfo);
        const student = Student.build({name: info.name, address : info.address, userId: user.id, facultyId:info.facultyId});
        await student.save();
        res.send(student);
    }
}