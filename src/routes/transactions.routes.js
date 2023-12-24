import {Router} from 'express'
import { insertTransaction, deleteTransaction, updateTransaction } from '../controllers/transactions.controller.js';

const router = Router()

router.post("/transaction/:idUser", insertTransaction);

router.put("/transaction/:idUser", deleteTransaction);

router.patch("/transaction/:idUser", updateTransaction);

export default router