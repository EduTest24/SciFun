import { connectDB } from "../../../../../lib/db";
import { User } from "../../../../../models/User";

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

    const user = await User.findOne({ clerkId }).lean();

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    return Response.json(user);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch user", details: error.message }),
      {
        status: 500,
      }
    );
  }
}
