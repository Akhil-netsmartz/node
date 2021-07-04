const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt= require('jsonwebtoken');

var userSchema=mongoose.Schema({
    name:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true,
   },
    password:{
      type:String,
      require:true,
    },
    saltString:String,

    designation:{
      type:String
    },
    companyName:{
      type:String
   },
   website:{
      type:String
    },
    city:{
      type:String
    },
    skills:{
      type:String
    },
    bio:{
      type:String
    },
    gitUsername:{
      type:String
    },
    jobTitle:{
      type:String
    },
    jobDesc:{
      type:String
    },
    experience:{
      type:String
    },
    location:{
      type:String
    }

});

userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
       bcrypt.hash(this.password,salt,(err,hash)=>{
           this.password=hash;
           this.saltString=salt;
           next();
       })
    })
})

userSchema.methods.verifypassword=function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateJWT  =  function(){
  return jwt.sign({
      _id:this._id
  },"ABC1111",{
      expiresIn:"3600m"
  })
}

mongoose.model('user',userSchema);
