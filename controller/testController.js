

// const testController = (req,res)=>{
//   try{
// return res.status(200).send({
//     message:"Hello world"
// })
// }catch(err){
//     console.log("Error :", err)
//     res.status(500).send({
//         message:"An Error occured"
//     })
//   }
// }

// module.exports = testController

const testController = (req, res) => {
    try {
      return res.status(200).send({
        message: "Hello world",
      });
    } catch (err) {
      console.log("Error :", err);
      res.status(500).send({
        message: "An Error occurred",
      });
    }
  };
  
  module.exports = testController;