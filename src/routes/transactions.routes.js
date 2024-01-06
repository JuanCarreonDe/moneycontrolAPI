import {Router} from 'express'
import { insertTransaction, deleteTransaction, updateTransaction, getTransactionsOfDay, getIncomeAndExpenseTotals } from '../controllers/transactions.controller.js';

const router = Router()

router.post("/transaction/:idUser", insertTransaction);

router.put("/transaction/:idUser", deleteTransaction);

router.patch("/transaction/:idUser", updateTransaction);

router.post("/getTransactionsOfDay/:idUser", getTransactionsOfDay);

router.post("/getIncomeAndExpenseTotals/:idUser", getIncomeAndExpenseTotals);


export default router