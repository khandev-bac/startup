import { Context, Next } from "hono";
import { HTTPException } from "hono/http-exception";
import { verifyAccessToken } from "../utils/token";
export const AuthMiddleware = async (c: Context, next: Next) => {
    const authHeader = c.req.header('Authorization');
    if (!authHeader || authHeader.startsWith('Bearer ')) {
        throw new HTTPException(401, { message: 'Unauthorized: No token provided' });
    }
    const token = authHeader.split(' ')[1]
    try {
        const user = verifyAccessToken(token)
        c.set('user', user)
        await next();
    } catch (error) {
        console.error('AuthMiddleware error:', error);
        throw new HTTPException(401, { message: 'Unauthorized: Invalid or expired token' });
    }
}