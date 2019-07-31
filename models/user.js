const mongoogse=require("mongoose")
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken")
const keys=require("../config/key")
const { Schema }=mongoogse

const user = new Schema({
    name:{type:String,trim:true,uppercase:true,required:true},
    password:{type:String,trim:true,min:000000,max:999999,required:true},
    email:{type:String,unique:true,trim:true,required:true,
        validate:{
            validator:(email)=>{
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
                
            }
        }
    },
    tokens:[{token:{type:String,require:true}}]
});
user.methods.toJSON=function(){
    const user = this;
    const userObject=user.toObject();
    delete userObject.password;
    return userObject;
}
user.statics.loginWithCredential=function(email,password){
const user=this
return new Promise((resolve,reject)=>{
    user.findOne({email:email}).then(user=>{
        bcrypt.compare(password,user.password,function(err,result){
            if(err){
             return reject(err)
            }
            if(result){
                return resolve(user)
            }
            if(!result){
            return reject(err)
            }
        })
    }).catch(errr=>{
        return reject(errr)
    })
})
 

}
//Promise
user.methods.generateToken = function(){
    const user=this;
    const token =  jwt.sign({_id:user._id.toString()},keys.SECRET,{expiresIn:"1 hours"})
    console.log(token)
    user.tokens.push({token})
    return user.save().then(user=>{
        return Promise.resolve(token)
    }).catch(err=>{
        return Promise.reject(err)
    })
}
//async await
user.pre("save",async function(){
    const user=this
    if(user.isModified("password")){
        user.password=await bcrypt.hash(user.password,8)
    }
})
mongoogse.model("USER",user)
