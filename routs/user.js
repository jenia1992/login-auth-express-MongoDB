const mongoose = require("mongoose")
const User = mongoose.model("USER")
const bcrypt = require("bcryptjs")
const multer = require("multer");
const keys = require("../config/key")
const cloudinary = require("cloudinary");
const auth =require("../middleware/auth")
const cloudinaryStorage = require("multer-storage-cloudinary");
module.exports = app => {
    //Promises
    app.post('/api/auth-strategy/add-user', (req, res) => {
        let user = new User(req.body)
        user.save().then(user => {
            return user.generateToken()
        }).then(token => {
            res.send({ email: user.email, token: token })
        })
            .catch(err => {
                res.send(err)
            })
    })

    app.post('/api/auth-strategy/login-user', (req, res) => {
        User.loginWithCredential(req.body.email, req.body.password).then(user => {
            // console.log(result)
            return user.generateToken().then(result=>{
                res.status(200).send(user)
            })
            
        }).catch(err => {
            res.status(400).send("error")
        })

    })

    app.post('/api/auth-strategy/logout-user', (req, res) => {
        User.findOne({ email: req.body.email }).then(user => {
            let tempTokens = user.tokens.filter(token => {
                return token.token !== req.header("token");
            })
            user.tokens = tempTokens
            user.save().then(user => {
                res.status(200).send()
            })

        }).catch(err => {
            return res.status(400).send(err)

        })
    })

    app.post('/api/auth-strategy/auth', auth,(req, res) => {
        User.findOne({ email: req.body.email }).then(user=>{
            res.send(user)
        }).catch(err=>{
            res.send(err)
        })
    })
}