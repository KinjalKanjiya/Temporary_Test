const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://GoFood:GoFood_1234@cluster0.kojmg9f.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
        const db = mongoose.connection.db; // Get the database instance

        // Use the db.collection method to access the collection
        const foodCollection = db.collection("Food");
        const foodData = await foodCollection.find({}).toArray();
  

        if (foodData && foodData.length > 0) {
            console.log("Fetched data:", foodData);
        } else {
            console.log("No data found in the 'Food' collection.");
        }
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
   
   }
  


module.exports = mongoDB;