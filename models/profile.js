const mongoose = require("mongoose");

const profileSchema = mongoose.Schema({
    UserID: String,
    Username: String,
    ServerID: String,
    ActiveColor: String

});

module.exports = mongoose.model("Profile", profileSchema);