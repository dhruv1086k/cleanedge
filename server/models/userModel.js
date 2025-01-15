import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  photo: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  creditBalance: { type: Number, default: 5 },
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
// we will use this model to create users in the database

// clerk users ka data save karega then usko share karega backend ke sath and uske liye ham webhooks use karenge -> ye isliye karenge taaki jab bhi frontend pe user create hoga to vo hamare database me bhi create ho jaye
