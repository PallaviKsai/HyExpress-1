var fs = require('fs');
var path = require('path');
var gitlab = require('./collectionSchema.js')


let gitCtrl = {

storeData: function(req, res){

  console.log("In Store")
  // let today = new Date().toLocaleDateString();
  let today = '2018-3-13'
       console.log(",,,,,,,,,",req.body)

      let td = Date.parse(today);

      console.log(today,",,,,,,,,,,,,,,,,,,",td);

      let dataArr = JSON.parse(req.body.somekey);
      console.log("dataArr",dataArr,typeof dataArr);

      let gitInfo = new gitlab({

        dates :td,

        commitInfo : dataArr

      })
      console.log(",,,,,,,,,,,",gitInfo);

      gitlab.find({dates:td},function(err,gitData) {

         if(err) {

           console.log(err);

         } else {

           if(gitData.length == 0){

             console.log("inside 111111111111");

             gitInfo.save(function(err, savedObj) {

                 if(err) {

                     console.log(err);
                     res.send(err);

                 }

                 else {

                     console.log("done");
                     res.send("success");

                  }

             })

           }else{

               console.log("inside 222222222222222");

               gitlab.findOneAndUpdate({

                  dates:td

                }, {

                  $set: {

                    'commitInfo': dataArr

                  }

                }).then(function(docs1) {
                  console.log("docs1",docs1)

                  // res.send("success");

                }, function(err1) {

                  console.log('1. ',err1);

                  // res.send(err1);

              });

           }

         }

      })

},

getInfo : function(req, res){

  let today = new Date().toLocaleDateString();
  // let today = '2018-3-12'
  let today1 = Date.parse(today);
  console.log("Today1",today1)

  let last7Days = new Date(new Date().setUTCDate(new Date().getDate()-7)).toLocaleDateString();

  let last7Days1 = Date.parse(last7Days);

  let last14Days = new Date(new Date().setUTCDate(new Date().getDate()-14)).toLocaleDateString();

  let last14Days1 = Date.parse(last14Days);

  let arr = [];


  gitlab.find({dates: {$eq : today1}},function(err,gitData) {

      if(err) {

        console.log(err);

      } else {

        arr.push({today : gitData})

        gitlab.find({dates: {$gt : last7Days1}},function(err,gitwkdata) {

              if(err) {

                console.log(err);

              } else {

                arr.push({last7Days :gitwkdata })

                gitlab.find({dates: {$gt : last14Days1}},function(err,gittwkData) {

                    if(err) {

                      console.log(err);

                    } else {

                      arr.push({last14days:gittwkData})

                      console.log(",,,,,,,,,,,,,,,,",arr);

                      res.send(arr);

                    }

                })

 

              }

          })

 

      }

  })

}

}

  module.exports = gitCtrl;
