import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  username: { type: String },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, required: true },
  lastSignInAt: { type: Date },
  lastSignOutAt: { type: Date },
});

export const User = mongoose.models.User || mongoose.model("User", userSchema);
