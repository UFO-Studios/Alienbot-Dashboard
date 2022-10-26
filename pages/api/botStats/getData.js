const mongoose = require("mongoose");

const connectToDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  connected = true;
  console.log("MongoDB is loaded!");
  db = await mongoose.connection;
  db.on("error", console.error.bind(console, "MongoDB connection error:")); //tells us if there is an error
};
//END connect

module.exports; {
  connectToDB
}