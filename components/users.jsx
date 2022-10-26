const { uptime } = require("process");
const Uptime = require("../pages/api/botStats/uptime");

//END dependencies

//START vars

const currentUptime = Uptime.get();