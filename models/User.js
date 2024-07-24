const mongoose= require ("mongoose");

const User= new mongoose.Schema(
    {
     _id:String, 
    password:
    {
        type: String, 
        required: true, //אומר שזה שדה חובה 
    },
    Mail:
    {
        type: String, 
        required: true, //אומר שזה שדה חובה 
    }
    
    });

    module.exports= mongoose.model("User, User");