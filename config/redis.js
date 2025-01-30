require("dotenv").config(); 
const { createClient } = require("redis");


const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});

redisClient.on("error", (err) => console.error(" Redis Client Error:", err));

(async () => {
  try {
    await redisClient.connect();
    console.log("Redis connected");
  } catch (error) {
    console.error(" Redis Connection Failed:", error);
  }
})();

module.exports = redisClient;
