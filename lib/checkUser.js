"use server";

import { currentUser } from "@clerk/nextjs/server";

export async function checkUser() {
  const user = await currentUser();
  if (!user) {
    // user not signed in
    return null;
  }
  // you can add logic here like checking roles, saving to DB, etc.
  return user;
}
