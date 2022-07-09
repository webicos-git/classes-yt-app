const express=require('express')
const Video=require('../Models/Video')
const User=require('../Models/User')
const jwt = require('jsonwebtoken');


router=express.Router();


// check whether the request has a valid JWT access token
let authenticate = (req, res, next) => {
    let token = req.header('x-access-token');

    // verify the JWT
    jwt.verify(token, User.getJWTSecret(), (err, decoded) => {
        if (err) {
            // there was an error
            // jwt is invalid - * DO NOT AUTHENTICATE *
            res.status(401).send(err);
        } else {
            // jwt is valid
            req.user_id = decoded._id;
            next();
        }
    });
}


router.post('/',authenticate,(req, res) => {
    // Add Video
    let body = req.body;

    // console.log("BODY", body);
    // let isFalse=false;
    // if (body.hasOwnProperty('isAdmin')){
    //     isFalse=req.body['isAdmin'];
    // }
    // let standard=null;
    // if (body.hasOwnProperty('standard')){
    //     standard=req.body['standard'];
    // }
    let newVideo = new Video({
        title: body.title,
        subject:body.subject,
        teacher: body.teacher, 
        videolink:body.videolink,
        duration:body.duration,
        description:body.description,
        standard:body.standard
    });
    try{
    newVideo.save(function(err,result){
        if (err){
            console.log(err.message);
            // res.json(err.message);
            res.status(400).send("Oh uh, something went wrong ,err "+err.message);

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

router.get('/', authenticate,(req, res,next) =>{
    Video.find().then(function(users){
        res.json(users);
    }).catch(next);
    // res.send("Working")
   
});

router.get('/:subject',authenticate, (req, res, next) =>{
    let videos=Video.find({$or:[{subject:req.params.subject}]}).then(function(result){
        console.log(result);
        res.json(result);
    })

})

module.exports=router;
