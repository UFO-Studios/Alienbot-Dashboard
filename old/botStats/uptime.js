const mongoose = require("mongoose");
let connected = false;

const connect = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  //king?
  connected = true;

  console.log("MongoDB is loaded!");

  db = await mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
};

/**
 * @type {Function}
 */
async function get() {
  if (!connected || !db) {
    await connect();
  }

  //Schemas n` stuff
  const uptimeSchema = new mongoose.Schema({
    time: Number,
  });
  const uptimeModule = await mongoose.model("uptime", uptimeSchema);

  const botStartTime = await uptimeModule.findOne({});

  //result
  console.log("Data recived from DB!");
  return botStartTime;
}

module.exports = {
  connect,
  get,
};
