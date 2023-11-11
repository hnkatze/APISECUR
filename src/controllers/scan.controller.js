import { pool, queries } from '../database';
const uuid = require('uuid');

// Obtener todos los escaneos
export const getAllScan = async (req, res) => {
  try {
    const [result] = await pool.execute(queries.getAllScan);
    res.json(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Crear un nuevo escaneo
export const createNewScan = async (req, res) => {
  const { ScanTime, Location, EmployeeId, CompanyId } = req.body;
  const Id = uuid.v4();

  if (!Id || !ScanTime || !Location || !EmployeeId || !CompanyId) {
    return res.status(400).json({ msg: 'Solicitud incorrecta. Por favor, complete todos los campos.' });
  }

  try {
    await pool.execute(queries.createNewScan, [Id, ScanTime, Location, EmployeeId, CompanyId]);
    res.json({ Id });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Obtener un escaneo por su ID
export const getScanById = async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await pool.execute(queries.getScanById, [id]);
    if (result.length === 0) {
      return res.status(404).json({ msg: 'Escaneo no encontrado' });
    }
    res.json(result[0]);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Eliminar un escaneo por su ID
export const deleteScan = async (req, res) => {
  const { id } = req.params;

  try {
    await pool.execute(queries.deleteScan, [id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Actualizar un escaneo por su ID
export const updateScan = async (req, res) => {
  const { id } = req.params;
  const { ScanTime, Location, EmployeeId, CompanyId } = req.body;

  if (!ScanTime || !Location || !EmployeeId || !CompanyId) {
    return res.status(400).json({ msg: 'Solicitud incorrecta. Por favor, complete todos los campos.' });
  }

  try {
    await pool.execute(queries.updateScan, [ScanTime, Location, EmployeeId, CompanyId, id]);
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};
