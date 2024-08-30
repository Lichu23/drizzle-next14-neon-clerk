"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { revalidatePath } from "next/cache";

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

  return user
};

export const addUser = async () => {
  await db.insert(users).values({
    id: 1,
    name: "user1",
    email: "correo@correo.com",
  });
  revalidatePath("/");
};
