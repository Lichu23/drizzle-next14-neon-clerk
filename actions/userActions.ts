"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";

export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUser = async (userId: number) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.id, userId),
    with: {
      todos: true,
    },
  });

  return user;
};

export const addUser = async (user: any) => {
  await db.insert(users).values({
    clerkId: user?.clerkId,
    name: user.name,
    email: user.email,
    firstName: user?.firstName,
    lastName: user?.lastName,
    photo: user?.photo,
  }).returning({clerkClient: user.clerkId})
  // revalidatePath("/");
};
