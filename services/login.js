const User = require("../models/users");


async function login(username, password){
    const user= await User.findOne({_id:username, password, Mail});
    return user != null
}


async function register (username, password){

    const user= new User({
        _id: username, 
        password,
        Mail
    });

    await user.save()
}

module.exports = 
{
    login,
    register
}