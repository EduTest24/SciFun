import mongoose from "mongoose";

const AttendanceSchema = new mongoose.Schema({
  clerkId: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Present", "Absent", "Late"], required: true },
  subject: { type: String },
  comments: { type: String },
});

AttendanceSchema.index({ clerkId: 1, date: 1 }, { unique: true });

export const Attendance =
  mongoose.models.Attendance || mongoose.model("Attendance", AttendanceSchema);
