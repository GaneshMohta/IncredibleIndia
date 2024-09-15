import User from '../model/userSchema.js'
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid email or password"})
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Invalid email or password"})
        }
        const token = jwt.sign({user_id : user.id},"a1s2d3f4",{
            expiresIn : "24h",
        });
        return res.status(200).json(token);
    }
    catch(e){
        console.log(e);
        res.status(500)
    }
}

export const createUser = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const users = await User.findOne({email});
        if(users){
            res.status(400).json("already exists");
        }
        else{
            try{
            const users = new User({
                id:uuid(),
                email,
                password
            })
            await users.save();
            res.status(201).json("uses account created");
        }
        catch(e){
            console.log(e);
            res.status(500).json("internal server");
        }
        }
    }
    catch (e){

    }
}
