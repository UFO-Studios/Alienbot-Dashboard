const mongoose = require("mongoose");

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

  //END schema-users

  //START getUserCount

  /**
 *  @example const userCount = await getUserCount();
 *  @returns {Number} No. of online users.
 **/
 const getUserCount = async () => {
   
    if(!connected || !db) {
      await connectToDB() 
    }
    
    let date = new Date().toLocaleDateString();
    
    
    
    console.log("Data recived from DB!")
    return userXP
  };

  //END getUserCount

module.exports; {
    getUserCount,
    connectToDB
}