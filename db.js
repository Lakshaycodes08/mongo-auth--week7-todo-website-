const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  email: String,
  password: String,
  name: String
});

const TodoSchema = new Schema({
  title: String,
  done: Boolean,
  userId: { type: ObjectId, ref: "User" }
});

const UserModel = mongoose.model("User", UserSchema);
const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = { UserModel, TodoModel };
