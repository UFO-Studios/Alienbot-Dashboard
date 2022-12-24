const PM2IO = require('@pm2/js-api');

const testDataJSON = {
    "uptime": "4D 17H",
    "allUsers": "190",
    "onlineUsers": "76"
}
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