const express = require ('express')
const router = express.Router()

router.post('/foodData', async (req, res) => {
    try {
       
        res.send([global.Food, global.FoodCategory])
    } catch (error) {
        console.error(error.message)
        res.send("Server Error")

    }
})

// router.post('/foodData', (req, res) => {
//     try {
//       console.log("Sending response:", global.Food, global.FoodCategory);
//       res.send([global.Food, global.FoodCategory]);
//     } catch (error) {
//       console.error(error.message);
//       res.send("Server Error");
//     }
//   });
  
  
module.exports = router;