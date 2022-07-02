const express=require('express')
const User=require('../Models/User')


router=express.Router();

router.get('/',  (req, res,next) =>{
    User.find().then(function(users){
        res.json(users);
    }).catch(next);
    // res.send("Working")
   
});

/* USER ROUTES */

/**
 * POST /users
 * Purpose: Sign up
 */
 router.post('/', (req, res) => {
    // User sign up

    let body = req.body;
    let isFalse=false;
    if (body.hasOwnProperty('isAdmin')){
        isFalse=req.body['isAdmin'];
    }
    let standard=null;
    if (body.hasOwnProperty('standard')){
        standard=req.body['standard'];
    }
    let newUser = new User({
        username: body.username,
        name:body.name,
        password: body.password, 
        isAdmin:isFalse,
        standard:standard
    });
    try{
    newUser.save(function(err,result){
        if (err){
            console.log(err.message);
            // res.json(err.message);
            res.status(400).send("Oh uh, something went wrong");

        }
        else{
            res.send(result)
        }
    })
    }
    catch(err){
        res.send(err.message);
    }
});





module.exports=router;