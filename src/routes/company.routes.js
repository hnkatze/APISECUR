import { Router } from "express";
import {
  cretaNewCompany,
  deleteCompany,
  getCompanyById,
  getcompany,
  updateCompany,
} from "../controllers/company.controller";
const router = Router();

router.get("/Company", getcompany);

router.get("/Company/:id", getCompanyById);

router.post("/Company", cretaNewCompany);

router.delete("/Company/:id", deleteCompany);

router.put("/Company/:id", updateCompany);

export default router;
