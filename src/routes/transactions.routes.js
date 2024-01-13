import {Router} from 'express'
import { insertTransaction, deleteTransaction, updateTransaction, getTransactionsOfDay, getMonthTotals, getDaysTotals } from '../controllers/transactions.controller.js';

const router = Router()

router.post("/transaction/:idUser", insertTransaction);

router.put("/transaction/:idUser", deleteTransaction);

router.patch("/transaction/:idUser", updateTransaction);

router.post("/getTransactionsOfDay/:idUser", getTransactionsOfDay);

router.post("/getMonthTotals/:idUser", getMonthTotals);

router.post("/getDaysTotals/:idUser", getDaysTotals);



export default router