import { decodeJwt } from "jose";
export function extractUser(idToken: string) {

    const payload = decodeJwt(idToken)
    if (!payload.email || !payload.sub) {
        throw new Error('Invalid Google token');
    }
    return {
        name: (payload.name) as string,
        email: (payload.email) as string,
        avatar: (payload.picture) as string
    }
}
