import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import avatarFile from "../controllers/user.controller.js";
const router=Router()
router.route("/register").post(upload.single('avatar'),avatarFile)
export default router;