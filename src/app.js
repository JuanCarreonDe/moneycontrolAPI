import express from "express";
import transactionsRoutes from "./routes/transactions.routes.js"
import usersRoutes from "./routes/users.routes.js"

const app = express();

app.use(express.json())

app.use("/api",transactionsRoutes)
app.use("/api",usersRoutes)

app.use((req, res, next) =>[
    res.status(404).json({
        message: 'Opps, no fue posible encontrar ese endpoint'
    })
])

export default app