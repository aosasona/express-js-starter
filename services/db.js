const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/test";

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected");
    })
    .catch((err) => console.error(err));
};

exports.disconnect = () => {
  mongoose.disconnect().then(() => {
    console.log("MongoDB Disconnected");
  });
};
