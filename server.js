const http = require("http");

// Load environment variables from .env file
require("dotenv").config();

// Load express
const app = require("./app");
const { connect, disconnect } = require("./services/db");
const redisClient = require("./utils/redis.util");
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

// Start listening on port
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

  // Connect to MONGODB database
  connect();

  // Connect to REDIS
  //   redisClient
  //     .connect()
  //     .then(() => {
  //       if (process.env.NODE_ENV !== "test") {
  //         console.log("🛠\tRedis - Connection open");
  //       }
  //     })
  //     .catch((err: any) => {
  //       console.log(err);
  //     });
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Closing server.");
  // Disconnect from MONGODB database
  disconnect();
  process.exit(0);
});
