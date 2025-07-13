import { and, desc, eq, sql } from "drizzle-orm";
import { v4 as uuid } from "uuid";
import { CreateFile } from "../../types/User/file.type";
import { db } from "../config/db";
import { files } from "../model/schema";
export const createFile = async (createFile: CreateFile) => {
    const result = await db.insert(files).values({
        id: uuid(),
        ...createFile
    }).returning()
    return result[0]
}
export const getFileById = async (id: string) => {
    const result = await db.select().from(files).where(eq(files.id, id))
    return result[0]
}
export const incrementDownload = async (id: string) => {
    await db.update(files).set({ downloadCount: sql`${files.downloadCount} + 1`, updatedAt: new Date() }).where(eq(files.id, id))
}
export const getFilesByUser = async (userId: string) => {
    return await db.select().from(files).where(eq(files.userId, userId)).orderBy(desc(files.createdAt))
}
export const deleteFile = async (id: string) => {
    const result = await db.delete(files).where(eq(files.id, id)).returning()
    return result.length > 0
}
export const deleteFileByUser = async (id: string, userId: string) => {
    const result = await db.delete(files).where(and(
        eq(files.id, id),
        eq(files.userId, userId)
    )).returning()
    return result.length > 0
}
export const fileExist = async (id: string) => {
    const [file] = await db.select().from(files).where(eq(files.id, id)).limit(1)
    return !!file
}