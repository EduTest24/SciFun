// /app/api/attendance/mark/route.js
import { connectDB } from "@/lib/db";
import { Attendance } from "@/models/Attendence";

export async function POST(req) {
  try {
    await connectDB();
    const { clerkId, date, status, subject, comments } = await req.json();

    if (!clerkId || !date || !status) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    const record = await Attendance.findOneAndUpdate(
      { clerkId, date },
      { clerkId, date, status, subject, comments },
      { upsert: true, new: true }
    );

    return Response.json({ success: true, record });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
