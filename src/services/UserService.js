const bcrypt = require('bcrypt');
const User = require('@/models/UserModel');
module.exports = {
    createUser : async (dto) => {
        const {name, email, address, username, password} = dto;
        const user = User.build({name, email, address, username});
        const hashPassword = await bcrypt.hash(password, 5);
        user.password = hashPassword;
        await user.save();
        return user;
    }
}