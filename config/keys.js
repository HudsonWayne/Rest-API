// module.exports = {
//     URI: 'mongodb+srv://hudsonnbenhuraa:Hudsonnbenhuraa2003.@ac-yaednp1.asu28qy.mongodb.net/test?retryWrites=true&w=majority'
//   };


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://hudsonnbenhuraa:Hudsonnbenhuraa2003.@ac-yaednp1.asu28qy.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});