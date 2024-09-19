import { Router } from "express";
import { logout, sendMSG, user } from "./user.controller.js";

const userRoutr=Router()

userRoutr.get('/user/:id',user)
userRoutr.post('/sendMSG/:id',sendMSG)
userRoutr.get('/logout',logout)

export default userRoutr