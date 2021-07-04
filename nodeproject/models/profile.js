const mongoose=require('mongoose');


var profileSchema=mongoose.Schema({
  id:{type:String},
  designation:{
      type:String,
      required:true
    },
    companyName:{
      type:String,
      required:true,
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
    }
});


mongoose.model('profile',profileSchema);
