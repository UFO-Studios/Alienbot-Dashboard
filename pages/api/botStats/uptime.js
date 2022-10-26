const mongoose = require("mongoose"); // every file in the api folder is on the server side
let connected = false;

const connectToDB = async () => {
  await mongoose.connect(process.env.MONGO_URL); 
//king?
  connected = true;

  console.log("MongoDB is loaded!");

  db = await mongoose.connection;

  db.on("error", console.error.bind( 
    console,
    "MongoDB connection error:"
  ));
};



/**
 * @type {Function}
 */
async function get () {
       
  if(!connected || !db) {
    await connectToDB() 
  };

  //Schemas n` stuff
  const uptimeSchema = new mongoose.Schema({
    time: Number
  });
  const uptimeModule = await mongoose.model("uptime", uptimeSchema);

  const botStartTime = await uptimeModule.findOne({});
  
  //result
  console.log("Data recived from DB!");
  return botStartTime;
};

module.exports = {
  connectToDB,
  get
}
