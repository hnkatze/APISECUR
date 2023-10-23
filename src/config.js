import { config } from "dotenv";

config();

export default {
  port: process.env.PORT || 4000,
  portDb: process.env.PORTDB || 3125,
  dbUser: process.env.DB_USER || "",
  dbPassword: process.env.DB_PASSWORD || "",
  dbServer: process.env.DB_SERVER || "",
  dbDatabase: process.env.DB_DATABASE || "",
};
