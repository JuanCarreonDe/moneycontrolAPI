import { pool } from "../db.js";

export const insertTransaction = async (req, res) => {
    const { idUser } = req.params;
    const { amount, description, idCategory, idAccount, isIncome } =
    req.body;
  try {
    const result = await pool.query(
      "call insertTransaction(?, ?, ?, ?, ?, ?);",
      [amount, description, idCategory, idAccount, isIncome, idUser]
    );
    res.send(result);
  } catch (error) {
    const result = await pool.query("SELECT * FROM users");
    res.json(result);
  }
};

export const deleteTransaction = (req, res) => {
  try {
    res.send("Dropping transaction");
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};

export const updateTransaction = (req, res) => {
  try {
    res.send("Edditing transaction");
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};
