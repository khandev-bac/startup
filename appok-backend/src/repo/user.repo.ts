import { eq } from "drizzle-orm";
import { v4 as uuidv4 } from "uuid";
import { CreateUser } from "../../types/User/user.type";
import { db } from "../config/db";
import { users } from "../model/schema";
// import
export const createUser = async (createUser: CreateUser) => {
    const user = await db.insert(users).values({
        id: uuidv4(),
        ...createUser
    }).returning()
    return user[0]
}
export const findById = async (id: string) => {
    const user = await db.select().from(users).where(eq(users.id, id));
    return user[0]
}
export const findByEmail = async (email: string) => {
    const user = await db.select().from(users).where(eq(users.email, email));
    return user[0]
}
export const deleteUser = async (id: string) => {
    return await db.delete(users).where(eq(users.id, id))
}