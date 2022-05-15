const { Schema, model } = require("mongoose");

const dummySchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
});

module.exports = model("Dummy", dummySchema);
