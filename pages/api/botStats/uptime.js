const mongoose = require("mongoose")

const connectToDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    connected = true;
    console.log("MongoDB is loaded!");
    db = await mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:")); //tells us if there is an error
  };
  //END connect
  
//START getStartTime

const get = async () => {
       
  if(!connected || !db) {
    await connectToDB() 
  }

  //Schemas n` stuff
  const uptimeSchema = new mongoose.Schema({
    time: Number
  });
  const uptimeModule = mongoose.model("uptime", uptimeSchema);

  const botStartTime = await uptimeModule.findOne({});
  
  console.log("Data recived from DB!")
  return botStartTime

};

//END getStartTime

  module.exports; {
    connectToDB,
    get
  }
