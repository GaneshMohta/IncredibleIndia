import jwt from 'jsonwebtoken';

const auth = (req,res,next)=>{
    if(!req.header("Authorization")){
        return res.status(401).json({error:"No token"});
    }
    const token = req.header("Authorization").split(" ")[1];

    if(!token){
        return res.status(401).json({message:"Token not generated, authorization denied"});
    }

    try{
        const decode = jwt.verify(token,"a1s2d3f4");
        req.user = decode ;
        next();
    }catch (err){
        res.status(401).json({error:"Token is not valid"})
    }

};

export default auth;
