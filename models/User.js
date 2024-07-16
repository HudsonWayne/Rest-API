const mongoose = require('mongoose');
const Schema = mongoose.Schema;
////creat schema
module.exports = User = mongoose.model('User',new Schema({

   userName: {
       type : String ,
       required:true,
       unique: 'Two users cannot share the same username ({VALUE})'
   },
   date: {
       type:Date,
       default:Date.now
   },
   password: {
       type:String,
       required:true
   },
   role:{
       type: String,
       enum: ['developer','Quality assurance','IT','RH']
   },
   activation:{
       type:Boolean,
   },
   email: {
       type: String,
       required: true
     }

}));