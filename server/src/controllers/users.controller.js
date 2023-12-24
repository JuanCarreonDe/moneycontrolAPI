import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};

export const getUserBalance = async (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  const { idUser } = req.params;

  try {
    const [result] = await pool.query("call getUserBalance(?);", [idUser]);
    res.json(result[0][0]);
  } catch (error) {
    return res.status(500).json({
      message: "Opps, Algo salio mal",
    });
  }
};
