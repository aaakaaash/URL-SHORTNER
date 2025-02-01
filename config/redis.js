const env = require('dotenv').config();
const Redis = require('redis');


const redisClient = Redis.createClient({
  url: process.env.REDIS_URL || "redis://redis:6379",
});

redisClient.on("error", (err) => console.error(" Redis Client Error:", err));
redisClient.on("connect", () => console.log("Redis Client Connected"));

module.exports = redisClient;
