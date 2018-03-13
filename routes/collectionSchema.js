// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;



// var data = new Schema({
//      weeks: [{
//          additions: Number,
//          deletions:Number,
//          commits:Number
//      }],
//      total: Number,
//      username:String
// })


// var data = mongoose.model('data',data,'data')
// module.exports = data;


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const schema = new mongoose.Schema({

    dates: String,
    commitInfo:[{
      committedDate: String,
      authorName : String,
      commitMessage : String
    }]
});
let gitlab = mongoose.model('gitlab', schema);
module.exports = gitlab;