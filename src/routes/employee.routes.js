import { Router } from "express";
import {
  createEmployee,
  deleteEmployee,
  getEmployeeById,
  getEmployeeByIdCompany,
  getEmployees,
  updateEmployee,
} from "../controllers/employee.controller";

const router = Router();

router.get("/Employees", getEmployees);

router.get("/Employees/:id", getEmployeeById);

router.post("/Employees", createEmployee);

router.delete("/Employees/:id", deleteEmployee);

router.put("/Employees/:id", updateEmployee);

router.get("/Company/:CompanyId/Employees", getEmployeeByIdCompany);

export default router;
