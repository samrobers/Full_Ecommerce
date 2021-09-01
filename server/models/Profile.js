const { Schema, model } = require("mongoose");

const ProfileSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
  },
});

const Profile = ("Profile", ProfileSchema);

module.exports = Profile;
