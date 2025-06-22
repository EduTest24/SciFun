// /app/api/attendance/route.js
import { connectDB } from "../../../../lib/db";
import { Attendance } from "../../../../models/Attendence";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clerkId = searchParams.get("clerkId");

    if (!clerkId) {
      return new Response(JSON.stringify({ error: "Missing clerkId" }), {
        status: 400,
      });
    }

    await connectDB();
    const records = await Attendance.find({ clerkId }).sort({ date: -1 });

    return Response.json(records);
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
