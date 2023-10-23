import { getConnetion, queries, sql } from "../database";
const uuid = require("uuid");

export const getEmployees = async (req, res) => {
  try {
    const pool = await getConnetion();
    const result = await pool.request().query(queries.getAllEmployee);
    res.json(result.recordset);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createEmployee = async (req, res) => {
  const { Name, LastName, Age, Code, Description, DNI, Placa,CompanyId } = req.body;
  const Id = uuid.v4();

  if (Name == null || LastName == null || Age == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all required fields" });
  }

  try {
    const pool = await getConnetion();
    await pool
      .request()
      .input("Id", sql.VarChar, Id)
      .input("CompanyId", sql.VarChar, CompanyId)
      .input("Name", sql.VarChar, Name)
      .input("LastName", sql.VarChar, LastName)
      .input("Age", sql.Int, Age)
      .input("Code", sql.VarChar, Code)
      .input("Description", sql.Text, Description)
      .input("DNI", sql.VarChar, DNI)
      .input("Placa", sql.VarChar, Placa)
      .query(queries.createNewEmployee);

    res.json({ Id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEmployeeByIdCompany = async (req, res) => {
  const { CompanyId } = req.params;

  try {
    const pool = await getConnetion();
    const result = await pool
      .request()
      .input("CompanyId", CompanyId)
      .query(queries.getAllEmployeesByCompany);
      res.json(result.recordset)

    if (result.recordset.length === 0) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
export const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnetion();
    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.getEmployeeById);

    if (result.recordset.length === 0) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { Name, LastName, Age, Code, Description, DNI, Placa } = req.body;

  try {
    const pool = await getConnetion();
    const result = await pool
      .request()
      .input("Id", sql.VarChar, id)
      .input("Name", sql.VarChar, Name)
      .input("LastName", sql.VarChar, LastName)
      .input("Age", sql.Int, Age)
      .input("Code", sql.VarChar, Code)
      .input("Description", sql.Text, Description)
      .input("DNI", sql.VarChar, DNI)
      .input("Placa", sql.VarChar, Placa)
      .query(queries.updateEmployee);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.send(204); // Respuesta exitosa sin contenido
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const pool = await getConnetion();
    const result = await pool
      .request()
      .input("Id", id)
      .query(queries.deleteEmployee);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    res.send(204); // Respuesta exitosa sin contenido
  } catch (error) {
    res.status(500).send(error.message);
  }
};
