const user = require('../models/usermodel');
exports.getRoute = async(req,res) => {
    const userData = await user.find();
    res.status(201).json({data:userData});
}

exports.postRoute = async (req,res)=> {
    const {userName,password} = req.body;
    const exist = await user.findOne({userName});
    if(exist) return res.status(401).json({
        message:"User already exist"
    })
    const newUser = new user({userName,password})
    await newUser.save();
    res.status(201).json({user:newUser})
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