const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const memberSchema = new mongoose.Schema({
  number: {
    type: Number,
    require: true,
  },
  position: {
    type: String,
    require: true,
  },
  member: [
    {
      type: ObjectId,
      ref: "Member",
    },
  ],
  event: [
    {
      type: ObjectId,
      ref: "Event",
    },
  ],
});

module.exports = mongoose.model("MemberCertificate", memberSchema);
