const mongoose = require("mongoose");
const config = require(".../config.json")

const connectToDB = async () => {
    await mongoose.connect(config.MONGO_CONFIG);
    connected = true;
    console.log("MongoDB is loaded!");
    db = await mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:")); //tells us if there is an error
  };
  //END connect

  //START schema-users . This is for seeing how many users are online. The bot will do this every 1H. Times in GMT (not BST!)

  const userCountSchema = new mongoose.Schema ({
    date: Number,
    OnlineUserCount: Number
  });

  const UCModule = mongoose.model("OUD", userCountSchema); //OUD stands for Online User Data. This is only used for saving. Probably
  //const OUC = UCModule({DATA_HERE})

  //END schema-users

  //START getUserCount

  /**
 *  @example const onlineUserCount = await getUserCount();
 *  @returns {Number} No. of online users.
 **/
 const getUserCount = async () => {
   
    if(!connected || !db) {
      await connectToDB() 
    }
    
    let GMTdate = new Date().toLocaleDateString();
    const OUC = await lvl_module.findOne({ date: GMTdate });
//OUC is Online User Count
    
    
    
    console.log("Data recived from DB!")
    return OUC
  };

  //END getUserCount

module.exports; {
    getUserCount,
    connectToDB
}