import { Router } from "express";
import {
  createNewCompany,
  deleteCompany,
  getCompanyById,
  getCompany,
  updateCompany,
} from "../controllers/company.controller";
const router = Router();

router.get("/Company", getCompany );

router.get("/Company/:id", getCompanyById);

router.post("/Company", createNewCompany);

router.delete("/Company/:id", deleteCompany);

router.put("/Company/:id", updateCompany);

export default router;
