import { connectDB } from "../../../../../lib/db";
import { StudentInfo } from "../../../../../models/StudentInfo";

export async function POST(req) {
  try {
    const body = await req.json();
    const { clerkId, schoolName, className, mobile, gender, dob, address } =
      body;

    if (!clerkId || !schoolName || !className || !mobile) {
      return new Response(
        JSON.stringify({ error: "Required fields missing" }),
        { status: 400 }
      );
    }

    await connectDB();

    const updated = await StudentInfo.findOneAndUpdate(
      { clerkId },
      { clerkId, schoolName, className, mobile, gender, dob, address },
      { upsert: true, new: true }
    );

    return Response.json(updated);
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to save profile", details: err.message }),
      { status: 500 }
    );
  }
}
