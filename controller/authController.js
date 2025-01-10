const useModel = require("../model/useModel");
const bcrypt = require('bcrypt');



 const  registerController = async (req,res)=>{
 try{
    const { userName, email, password, phone, address } = req.body;

    const salt = bcrypt.genSaltSync(10);
    const encriptPass  = await bcrypt.hashSync(password, salt);




    if(!userName || !email || !password ||!phone){
        return res.status(500).send({
            success: false,
            message: "Please Provide All Fields",
          })
        }
    const exists  = await useModel.findOne({email})
    if(exists){
        return res.status(500).send({
            success: false,
            message: "User Email alredy Present",
          })
    }

    
    const user = await useModel.create({
        userName,
        email,
        password:encriptPass,
        address,
        phone,
      });
     res.status(200).send({
        success: true,  
        message: "Successfully Registered",
        user
     })


 }catch(err){
    console.log("Error : ",err)
    res.status(500).send({
    success:false,
    message:"Error In Register API",
    err
    })
   
 }
}


// for login 

const loginController = async (req, res) => {
   try {
     const { email, password } = req.body;
 
     // Validate request body
     if (!email || !password) {
       return res.status(400).send({
         success: false,
         message: "Please provide all parameters",
       });
     }
 
     // Find user by email
     const user = await useModel.findOne({email});

     const compare  = await bcrypt.compare(password,user.password)
 
     if (!user) {
       return res.status(404).send({
         success: false,
         message: "Email does not exist",
       });
     }

     if (!compare) {
      return res.status(404).send({
        success: false,
        message: "Wrong Pass",
      });
    }
 
   
 
     // Respond with success
     res.status(200).send({
       success: true,
       message: "Login successful",
       user: {
         id: user._id,
         email: user.email,
       
       },
     });
   } catch (err) {
     console.error("Error:", err);
     res.status(500).send({
       success: false,
       message: "An error occurred during login",
       error: err.message, // Send error details in development
     });
   }
 };

module.exports = {registerController,loginController}