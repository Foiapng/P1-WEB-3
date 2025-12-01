import mysql from "mysql2";

export const db = mysql.createPool({
  host: process.env.DB_HOST,   // apenas o host
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,   // importante: 20863
  waitForConnections: true,
  connectionLimit: 10,
});
