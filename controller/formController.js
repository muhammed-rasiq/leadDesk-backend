const Users = require('../model/formModel')

exports.formApplay = async(req,res)=>{
    console.log('inside formApplay')
    
    const {userName,email,budget,message}=req.body

    try {

        const existingUser = await Users.findOne({email})
    if(existingUser){
      return  res.status(401).json({message:'user already exist'})
    }else{
        const addUser  = new Users({userName,email,budget,message})
        await addUser.save()

        res.status(201).json({message:'successfull',addUser})
    }
        
    } catch (error) {
        res.status(500).json({message:'error in formApplay function ',error:error.message})
    }

    

}