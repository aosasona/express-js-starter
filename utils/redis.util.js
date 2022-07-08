const redis = require("redis");
const { exec } = require("child_process");

// Start REDIS
// if (process.env.NODE_ENV === "development") {
//   const puts = (error, stdout) => {
//     console.log(error);
//     console.log(stdout);
//   };
//   exec("redis/src/redis-server redis/redis.conf", puts);
// }

// Create a redis connection client
const redisClient =
  process.env.NODE_ENV === "development"
    ? redis.createClient()
    : redis.createClient({ url: process.env.REDIS_URL });

// Log error status
redisClient.on("error", (err) => {
  console.log("Redis client error", err);
});

module.exports = redisClient;
