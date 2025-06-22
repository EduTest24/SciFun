// models/StudentInfo.js
import mongoose from "mongoose";

const StudentInfoSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true },
  schoolName: { type: String, required: true },
  className: { type: String, required: true },
  mobile: { type: String, required: true },
  gender: { type: String },
  dob: { type: Date },
  address: { type: String },
});

export const StudentInfo =
  mongoose.models.StudentInfo ||
  mongoose.model("StudentInfo", StudentInfoSchema);
