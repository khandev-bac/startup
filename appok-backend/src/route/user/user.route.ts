import { Hono } from "hono";
import { controllerTest, deleteAccount, GoogleAuth } from "../../controller/user.c";
import { AuthMiddleware } from "../../middleware/auth.middleware";

const router = new Hono()
router.get("/test", controllerTest)
router.post("/google", GoogleAuth)
router.get("/delete-account", AuthMiddleware, deleteAccount)
export default router