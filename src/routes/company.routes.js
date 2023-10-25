import { Router } from "express";
import {
  createNewCompany,
  deleteCompany,
  getCompanyById,
  getCompany,
  updateCompany,
} from "../controllers/company.controller";
const authenticateApiKey = require('../database/aunthenticated')
const router = Router();

router.get("/Company", authenticateApiKey, getCompany );

router.get("/Company/:id", authenticateApiKey, getCompanyById);

router.post("/Company", authenticateApiKey, createNewCompany);

router.delete("/Company/:id",authenticateApiKey, deleteCompany);

router.put("/Company/:id", authenticateApiKey , updateCompany);

export default router;
