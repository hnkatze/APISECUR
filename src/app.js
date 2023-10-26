import express from "express";
import config from "./config";
import companyRoutes from "./routes/company.routes";
import employeeRoutes from "./routes/employee.routes";
const cors = require('cors')

const app = express();
app.use(cors());
let port;
app.set("port", config.port || 3000);
//middleawares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(companyRoutes);
app.use(employeeRoutes);
export default app;
