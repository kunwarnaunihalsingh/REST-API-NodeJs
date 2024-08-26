import mongoose from "mongoose";

async function connectDb() {
  const dbUri = "mongodb+srv://kunwarnsingh41:kunwarnaunihal@cluster0.hxdbzdi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; 
  useMongoClient: true
  try {
    await mongoose.connect(dbUri);
    console.log("DB connected");
  } catch (error) {
    console.error("Could not connect to db");
    process.exit(1);
  }
}   

export { connectDb };