const User= require("../models/User");

//פונקציה למציאת המשתמש בעל הסיסמה הספציפית 
async function login(username, password){
    const user= await User.findOne({_id:username, password, Mail});
    return user != null
}

//פןנקציית הרשמה 
async function register (username, password){

    const user= new User({
        _id: username, 
        password,
        Mail
    });

    await user.save()
}

module.exports= { login, register}