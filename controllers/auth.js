const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken') 
const  User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/ErrorHandler')


module.exports.login = async function(req, res){ 
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
        if (passwordResult) {
            // generate token, password is correct 
            const token = jwt.sign(
                {
                email: candidate.email,
                userId: candidate._id
            },
            keys.jwt,
             {expiresIn: 60 * 60});
            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            res.status(401).json({
                message: "Wrong password !!!"
            })
        }
    }else{        
        res.status(404).json({
            message: 'User with this email is not found'
        })
    }
 }

module.exports.register = async function(req, res){
    // email password
    
  const candidate = await User.findOne({email : req.body.email})
  
  if (candidate) {
      //the user exist's and we need to throw an error
    res.status(409).json({
        message : 'This email already registered by other user'
    }
    )

  } else {
     //we need to create user
     const salt = bcrypt.genSaltSync(10)
     const password = req.body.password
     const user = new User({
         email: req.body.email,
         password: bcrypt.hashSync(password, salt)
     })
     try {
        await user.save()
        res.status(201).json(user)

     } catch (error) {
         // work on error
         errorHandler(res, errorHandler)
     }

  }   
}