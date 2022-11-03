const { on } = require("stream");
const testDataJSON = require("./exampleData.json");
const PM2IO = require('@pm2/js-api');

let client = new PM2IO()

const allUsers = () => {
    const data = testDataJSON.allUsers;
    return data;
};

const onlineUsers = () => {
    const data2 = testDataJSON.onlineUsers;
    return data2;
};

module.exports; {
    allUsers,
    onlineUsers
}