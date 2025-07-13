import "dotenv/config";
import * as jwt from 'jsonwebtoken';
interface Tokens {
    accessToken: string;
    refreshToken: string
}
export interface Payload {
    userId: string;
    email: string;
    name: string;
}
const accessSecert = process.env.JWT_ACC_KEY
const refreshSecert = process.env.JWT_REF_KEY
export const generateTokens = (payload: Payload): Tokens => {
    const Accesstoken = jwt.sign(payload, accessSecert!, { expiresIn: "15m" })
    const Refreshtoken = jwt.sign(payload, refreshSecert!, { expiresIn: "90d" })
    return {
        accessToken: Accesstoken,
        refreshToken: Refreshtoken
    }
}
export const verifyAccessToken = (token: string): Payload => {
    const payload = jwt.verify(token, accessSecert!) as Payload
    return payload
}
export const verifyRefreshToken = (token: string): Payload => {
    const payload = jwt.verify(token, refreshSecert!) as Payload
    return payload
}