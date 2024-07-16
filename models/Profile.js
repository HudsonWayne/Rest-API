const mongoose = require('mongoose');
const Joi = require('joi');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  image: {
    data: Buffer,
     contentType: String 
  },
    Last_name: {
    type: String,
    required: true
  },
    First_name: {
    type: String,
    required: true
  },
  Prof_mail: {
    type: String,
    required: true
  },
  Birth_date: {
    type: String,
    required: true
  },
  Id_card: {
    type: String,
    required: true
  },
  Bank_dtl: {
    type: String,
    required: true
  },
  Bank: {
    type: String,
    max: 50
  },
  Agency: {
    type: String,
    max: 50
  },
  Civil_stt: { 
    type: [String],
     required: true,
     enum: ['Single', 'Maried']
    },
  Child_nb: {
    type: Number
  },
  Resto_tickt: {
    type: Number
  }
});


function validateUser(profile) {
    const schema = {
      Last_name: Joi.string()
        .min(3)
        .max(50)
        .required(),
      First_name: Joi.string()
        .min(3)
        .max(70)
        .required(),
      Prof_mail: Joi.string()
        .min(10)
        .max(50)
        .required()
        .email(),
      Birth_date: Joi.string()
        .length(8)
        .required(),
      Bank_dtl: Joi.string()
        .min(24)
        .max(50),
    };
   
    return Joi.validate(profile, schema);
   }


module.exports = Profile = mongoose.model('profile', ProfileSchema);
