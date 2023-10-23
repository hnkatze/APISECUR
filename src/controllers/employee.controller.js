import { getConnetion, queries, mysql, pool } from "../database";
const uuid = require("uuid");

export const getEmployees = async (req, res) => {
  try {
    const [rows] = await pool.query(queries.getAllEmployee);  // Utiliza pool.query para realizar consultas en MySQL2
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createEmployee = async (req, res) => {
  const { Name, LastName, Age, Code, Description, DNI, Placa, CompanyId } = req.body;
  const Id = uuid.v4();
console.log(Id)
  if (Name == null || LastName == null) {
    return res.status(400).json({ msg: 'Bad Request. Please fill all required fields' });
  }

  try {
    const [result] = await pool.execute(queries.createNewEmployee, [
      Id,
      CompanyId,
      Name,
      LastName,
      Age,
      Code,
      Description,
      DNI,
      Placa,
    ]);

    res.json({ Id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEmployeeByIdCompany = async (req, res) => {
  const { CompanyId } = req.params;

  try {
    const [result] = await pool.execute(queries.getAllEmployeesByCompany, [CompanyId]);

    if (result.length === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.execute(queries.getEmployeeById, [id]);

    if (result.length === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.json(result[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { Name, LastName, Age, Code, Description, DNI, Placa } = req.body;

  try {
    const [result] = await pool.execute(queries.updateEmployee, [
      Name,
      LastName,
      Age,
      Code,
      Description,
      DNI,
      Placa,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.execute(queries.deleteEmployee, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
