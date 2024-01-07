import { pool } from "../db.js";

export const insertTransaction = async (req, res) => {
  const { idUser } = req.params;
  const { amount, description, idCategory, idAccount, isIncome } = req.body;
  try {
    const [result] = await pool.query(
      "call insertTransaction(?, ?, ?, ?, ?, ?);",
      [amount, description, idCategory, idAccount, isIncome, idUser]
    );
    result.affectedRows > 0
      ? res.json({
          message: "Se ha insertado correctamente",
        })
      : res.json({
          message: "La inserción ha fallado",
        });
  } catch (error) {
    res.json({
      message: `Opps, Algo salio mal ${error}`,
    });
  }
};

export const deleteTransaction = (req, res) => {
  try {
    res.send("Dropping transaction");
  } catch (error) {
    return res.status(500).json({
      message: `Opps, Algo salio mal ${error}`,
    });
  }
};

export const updateTransaction = (req, res) => {
  try {
    res.send("Edditing transaction");
  } catch (error) {
    return res.status(500).json({
      message: `Opps, Algo salio mal ${error}`,
    });
  }
};

export const getTransactionsOfDay = async (req, res) => {
  const { idUser } = req.params;
  const { day, month, year } = req.body;
  try {
    const [result] = await pool.query("CALL getTransactionsOfDay(?,?,?,?);", [
      day,
      month,
      year,
      idUser,
    ]);
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: `Opps, Algo salio mal ${error}`,
    });
  }
};

export const getIncomeAndExpenseTotals = async (req, res) => {
  const { idUser } = req.params;
  const { day, month, year } = req.body;
  try {
    const [result] = await pool.query("CALL getIncomeAndExpenseTotals(?,?,?,?);", [
      day,
      month,
      year,
      idUser,
    ]);
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      message: `Opps, Algo salio mal ${error}`,
    });
  }
};
