import { getConnetion, queries, sql } from "../database";
const uuid = require("uuid");

export const getcompany = async (req, res) => {
  try {
    const pool = await getConnetion();
    const result = await pool.request().query(queries.getAllCompany);
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const cretaNewCompany = async (req, res) => {
  const { Name, Description, Code } = req.body;
  const Id = uuid.v4();
  console.log(Name, Description);
  if (Name == null || Description == null) {
    return res.status(400).json({ msg: "Bad Request. please fill all fields" });
  }
  try {
    const pool = await getConnetion();
    await pool
      .request()
      .input("Id", sql.VarChar, Id)
      .input("Name", sql.VarChar, Name)
      .input("Description", sql.Text, Description)
      .input("Code", sql.VarChar, Code)
      .query(queries.createNewCompany);
    res.json({ Id });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCompanyById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnetion();
  const resul = await pool
    .request()
    .input("Id", id)
    .query(queries.getCompanyById);
  res.send(resul.recordset[0]);
};

export const deleteCompany = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnetion();
  await pool.request().input("Id", id).query(queries.deleteCompany);
  res.send(204);
};
export const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { Name, Description, Code } = req.body;
  const pool = await getConnetion();
 await pool
    .request()
    .input("Id", sql.VarChar, id)
    .input("Name", sql.VarChar, Name)
    .input("Description", sql.Text, Description)
    .input("Code", sql.VarChar, Code)
    .query(queries.updateCompany);
  res.send(204);
};
