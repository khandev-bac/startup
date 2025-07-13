import { Hono } from 'hono'
import authRouter from "./route/user/user.route"
const app = new Hono()
app.get('/', (c) => {
  return c.text('Hello Hono!')
})
app.route("/auth", authRouter)

export default app
