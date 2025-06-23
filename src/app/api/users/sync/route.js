// app/api/users/sync/route.js
import { connectDB } from "@/lib/db";
import { User } from "@/models/User";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      clerkId, // ✅ Make sure it's destructured
      username,
      email,
      createdAt,
      lastSignInAt,
      lastSignOutAt,
    } = body;

    if (!clerkId || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOneAndUpdate(
      { clerkId },
      {
        clerkId,
        username,
        email,
        createdAt,
        lastSignInAt,
        lastSignOutAt,
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    return Response.json({ message: "User synced successfully", user });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to sync user", details: err.message }),
      { status: 500 }
    );
  }
}
