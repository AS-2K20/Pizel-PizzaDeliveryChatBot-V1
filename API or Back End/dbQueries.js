const express = require('express');

function createRouter(Db){
  const router = express.Router();
  router.get('/showPizzaDetails/',function(req,res,next){
    Db.query(
      "SELECT * FROM pizza_details",
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).json({status:'error'});
        }
        else{
          res.status(200).json(results);
          //console.log(results);
        }
      }
    );
  });

  router.get('/userDetails/',function(req,res,next){
    Db.query(
      "SELECT * FROM user_details",
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).join({status:'error'});
        }
        else{
          res.status(200).json(results);
          //console.log(results);
        }
      }
    )
  });

  router.post('/insertUserDetails',(req,res,next)=>{
    //console.log("I am insidee dbQueries");
    //console.log(req.body.userId,req.body.userPassword,req.body.userName,req.body.userEmail,req.body.userContact,req.body.userAddress);
    Db.query(
      "INSERT INTO user_details(userId,userPassword,userName,userEmail,userContact,userAddress) VALUES(?,?,?,?,?,?)",
      [req.body.userId,req.body.userPassword,req.body.userName,req.body.userEmail,req.body.userContact,req.body.userAddress],
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).join({status:'error'});
        }
        else{
          res.status(200).json(results);
          console.log(results);
        }
      }
    )
  });

  router.post('/insertUserOrderDetails',(req,res,next)=>{
    Db.query(
      "INSERT INTO userorder_details(userId,orderId) VALUES(?,?)",
      [req.body.userId,req.body.orderId],
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).join({status:'error'});
        }
        else{
          res.status(200).json(results);
          console.log(results);
        }
      }
    )
  });

  router.get('/showOrderDetails/:orderId',function(req,res,next){
    Db.query(
      "SELECT * FROM order_details where orderId = ?",
      [req.params.orderId],
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).json({status:'error'});
        }
        else{
          res.status(200).json(results);
          //console.log(results);
        }
      }
    );
  });


  router.post('/insertBulkOrderDetails',(req,res,next)=>{
    Db.query(
      "INSERT INTO bulkorder_details(userId,bulkOrderId,peopleExpected,bulkOrderExpectedDate,orderedDateTime) VALUES(?,?,?,?,?)",
      [req.body.userId,req.body.bulkOrderId,req.body.peopleExpected,req.body.bulkOrderExpectedDate,req.body.orderedDateTime],
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).join({status:'error'});
        }
        else{
          res.status(200).json(results);
          console.log(results);
        }
      }
    )
  });

  router.post('/insertContactUsDetails',(req,res,next)=>{
    Db.query(
      "INSERT INTO contactus_table(userId,contactUsIssue,contactRequestTime) VALUES(?,?,?)",
      [req.body.userId,req.body.contactUsIssue,req.body.contactRequestTime],
      (errors,results)=>{
        if(errors){
          console.log(errors);
          res.status(500).join({status:'error'});
        }
        else{
          res.status(200).json(results);
          console.log(results);
        }
      }
    )
  });
  return router;
}

module.exports = createRouter;