import { pool, queries } from '../database';
const uuid = require('uuid');

export const getCompany = async (req, res) => {
  try {
    const [result] = await pool.execute(queries.getAllCompany);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const createNewCompany = async (req, res) => {
  const { Name, Description, Code } = req.body;
  const Id = uuid.v4();
  if (!Id || !Name || !Description || !Code) {
    return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
  }

  try {
    await pool.execute(queries.createNewCompany, [Id, Name, Description, Code]);
    res.json({ Id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getCompanyById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.execute(queries.getCompanyById, [id]);
    if (result.length === 0) {
      return res.status(404).json({ msg: 'Company not found' });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const deleteCompany = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute(queries.deleteCompany, [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateCompany = async (req, res) => {
  const { id } = req.params;
  const { Name, Description, Code } = req.body;

  if (!Name || !Description || !Code) {
    return res.status(400).json({ msg: 'Bad Request. Please fill all fields' });
  }

  try {
    await pool.execute(queries.updateCompany, [Name, Description, Code, id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
