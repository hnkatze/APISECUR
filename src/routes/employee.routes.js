import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployeeByIdCompany,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller";
const authenticateApiKey = require('../database/aunthenticated')
const router = Router();

router.get("/Employees", authenticateApiKey, getEmployees);

router.get("/Employees/:id",authenticateApiKey, getEmployeeById);

router.post("/Employees", authenticateApiKey, createEmployee);

router.delete("/Employees/:id",authenticateApiKey, deleteEmployee);

router.put("/Employees/:id",authenticateApiKey, updateEmployee);

router.get("/Company/:CompanyId/Employees",authenticateApiKey, getEmployeeByIdCompany);

export default router;
