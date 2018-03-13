var express = require('express');
var router = express.Router();
var dataSchema = require('./collectionSchema');
let gitController = require('./gitController.js');


console.log("Inside GitLabRoutes")
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('HURRAY with a resource');
// });

// router.post('/data', function(req, res) {
//     //   dataSchema.find({username:req.body.username}, function (err, data) {
//     //     if (err)
//     //         res.send(err);
//     //     else {
//     //         //console.log(books);
//     //         res.json(data);
//     //     }
//     // });
   
//     gitController.storeData()
//     res.send("In post")
//     console.log("In Post()");
// });
router.post('/storeData',gitController.storeData);
router.get('/getInfo',gitController.getInfo);

// router.post('/',gitController.storeData);
module.exports = router;

// console.log("After Router.post()");

 // console.log("Hey",req.body);
  
  // let data = new dataSchema({
  //   weeks: req.body.weeks,
  //   total: req.body.total,
  //   username: req.body.username
    
  // })

    
  // let data = new dataSchema({
  //   dates: req.body.dates,
  //   commitInfo:[{
  //     committedDate: String,
  //     authorName : String,
  //     commitMessage : String
  //   }]
    
  // })

     

  // data.sa(req.body, function (err, data) {
  //       if (err)
  //           res.send(err);
  //       else {
  //           //console.log(book);
  //           res.json(data);
  //       }
  //   });



  // console.log("************",req.body)
  // res.send(req.body);
//});

  

