const user = require('../models/usermodel');
const bcrypt = require('bcrypt')

exports.getRoute = async(req,res) => {
    const userData = await user.find();
    res.status(201).json({data:userData});
}

exports.getRouteById = async(req,res) => {
    const userData = await user.findById(req.params.id);
    res.status(201).json({userData}) 
}

exports.signupRoute = async (req,res)=> {
    const {userName,password} = req.body;
    const exist = await user.findOne({userName});
    if(exist) return res.status(401).json({
        message:"User already exist"
    })
    const hashedPassword = await bcrypt.hash(password,10)
    const newUser = new user({userName,password:hashedPassword})
    await newUser.save();
    res.status(201).json({user:newUser})
}

exports.loginRoute = async(req,res) => {
    const {userName,password} = req.body;
    const userData = await user.findOne({userName})
    if(!userData) return res.status(401).json({
        message:"User Not Found"
    })
    const valid = await bcrypt.compare(password,userData.password)
    if(valid) res.status(201).json({message: "Login successfull"})
    res.status(401).json({message:"Password Invalid"})
}

exports.putRoute = async (req,res) => {
    const update = await user.findByIdAndUpdate(req.params.id,req.body);
    if(!update) return res.status(401).json({message:"User not exist"})
    res.status(201).json({update})
}

exports.deleteRoute = async(req,res) => {
    const deleteData = await user.findByIdAndDelete(req.params.id)
    if(!deleteData) return res.status(401).json({message:"User not exist"})
    res.status(201).json({message:"Deleted successfully"})
}