import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2>Admin page - welcome back {session?.user?.username}</h2>;
  }

  return <h2>Please sign in</h2>;
};

export default page;
