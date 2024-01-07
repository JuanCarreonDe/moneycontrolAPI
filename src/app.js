import express from "express";
import transactionsRoutes from "./routes/transactions.routes.js"
import usersRoutes from "./routes/users.routes.js"
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api",transactionsRoutes)
app.use("/api",usersRoutes)

app.use((req, res, next) =>[
    res.status(404).json({
        message: 'Opps, no fue posible encontrar este endpoint'
    })
])

export default app