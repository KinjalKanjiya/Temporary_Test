const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoFood:Kinjal12345@cluster0.kojmg9f.mongodb.net/?retryWrites=true&w=majority';

// const mongoDB = async () => {
//     await mongoose.connect(mongoURI,{ useNewUrlParser: true },async (err,result)=>{
//         if(err) console.log("...",err)
//         else{
//             console.log("Connected");
//             const fetched_data = await mongoose.connection.db.collection("Food");
//             fetched_data.find({}).toArray(async function(err,data){
//                 const FoodCategory = await mongoose.connection.db.collection("FoodCategory");
//                 FoodCategory.find({}).toArray(function(err,catData){
//                     if(err) console.log(err);
//                     else{
//                         global.Food = data;
//                         global.FoodCategory = catData;
//                     }
//                 })
//             })
//     }
//     })
    
   
//    }
  
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log("Connected");

        const fetched_data = await mongoose.connection.db.collection("Food");
        const data = await fetched_data.find({}).toArray();

        const FoodCategory = await mongoose.connection.db.collection("FoodCategory");
        const catData = await FoodCategory.find({}).toArray();

        global.Food = data;
        global.FoodCategory = catData;
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};


module.exports = mongoDB;