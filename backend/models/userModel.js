import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

},{timestamps:true, minimize:false});

const User = mongoose.model("User", userSchema);
export default User;