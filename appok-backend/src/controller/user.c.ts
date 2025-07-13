import { Context } from "hono";
import { createUser, deleteUser, findByEmail } from "../repo/user.repo";
import { extractUser } from "../utils/extractUser";
import { generateTokens } from "../utils/token";
export const controllerTest = async (c: Context) => {
    return c.json("Controller is fine")
}
export const GoogleAuth = async (c: Context) => {
    try {
        const { idToken } = await c.req.json()
        if (!idToken) {
            return c.json({
                message: "IdToken not received and failed to login user"
            })
        }
        const info = extractUser(idToken)
        let user = await findByEmail(info.email)
        if (!user) {
            user = await createUser({
                name: info.name,
                email: info.email,
                avatar: info.avatar
            })
        }
        const tokens = generateTokens({
            userId: user.id,
            name: user.name,
            email: user.email
        })

        return c.json({
            message: "Google login successfull ",
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            data: user
        })
    } catch (error) {
        console.error('Login error:', error);
        return c.json({
            message: "Failed to google login please try again later"
        })
    }
}
export const deleteAccount = async (c: Context) => {
    const user = c.get('user')
    try {
        await deleteUser(user.userId)
        return c.json({
            message: "User Successfully deleted"
        })
    } catch (error) {
        console.log(error)
        return c.json({
            message: "Failed to delete user"
        }, 500)
    }
}