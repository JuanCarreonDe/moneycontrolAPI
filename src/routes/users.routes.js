import {Router} from 'express'
import { getUsers, getUserBalance } from '../controllers/users.controller.js';
const router = Router()

router.get("/userBalance/:idUser", getUserBalance);

router.get("/bd", getUsers);

export default router