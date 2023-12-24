import { pool } from "../db.js";

export const insertTransaction = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
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
    const result = await pool.query("SELECT * FROM users");
    res.json(result);
  }
};

export const deleteTransaction = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    res.send("Dropping transaction");
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};

export const updateTransaction = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    res.send("Edditing transaction");
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};
