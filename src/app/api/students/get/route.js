import { connectDB } from "../../../../../lib/db";
import { StudentInfo } from "../../../../../models/StudentInfo";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const clerkId = searchParams.get("clerkId");

    if (!clerkId) {
      return new Response(JSON.stringify({ error: "Missing clerkId param" }), {
        status: 400,
      });
    }

    await connectDB();

    const student = await StudentInfo.findOne({ clerkId }).lean();

    if (!student) {
      return new Response(
        JSON.stringify({ exists: false, message: "Student profile not found" }),
        { status: 200 }
      );
    }

    return new Response(JSON.stringify({ exists: true, student }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch student",
        details: err.message,
      }),
      { status: 500 }
    );
  }
}
