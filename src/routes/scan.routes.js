import { Router } from "express";
import {
  createNewScan,
  deleteScan,
  getScanById,
  getAllScan,
  updateScan,
} from "../controllers/scan.controller"; 
import { authenticateApiKey } from "../database/aunthenticated";

const router = Router();

router.get("/Scan", authenticateApiKey, getAllScan); 
router.get("/Scan/:id", authenticateApiKey, getScanById); 
router.post("/Scan", authenticateApiKey, createNewScan); 
router.delete("/Scan/:id", authenticateApiKey, deleteScan); 
router.put("/Scan/:id", authenticateApiKey, updateScan); 

export default router;
