import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    user_id:String,
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre("save",async function(next){

    if(!this.isModified("password")){
        return next();
    }
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt);
    next();
})

const User = mongoose.model("usersofbharat",userSchema);

export default User;
