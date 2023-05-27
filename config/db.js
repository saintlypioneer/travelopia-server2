const mongoose = require('mongoose');

const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB conected...")
    } catch (err){
        console.log(err);
    }
}

module.exports = connectDb;