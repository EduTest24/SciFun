"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function SyncUser() {
  const { isSignedIn, isLoaded, user } = useUser();

  useEffect(() => {
    if (isSignedIn && isLoaded) {
      fetch("/api/users/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkId: user.id, // Add this
          username: user.username || user.fullName || "",
          email: user.primaryEmailAddress?.emailAddress,
          createdAt: new Date(user.createdAt),
          lastSignInAt: new Date(user.lastSignInAt),
          lastSignOutAt: new Date(),
        }),
      });
    }
  }, [isSignedIn, isLoaded]);

  return null;
}
