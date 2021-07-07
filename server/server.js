import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import * as db from "./db/index.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// GET ALL COMPANIES FOR SEARCH

app.get("/api/companies", async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM company");
    res.status(200).json({
      status: "success",
      companies: result.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

// GET A COMPANY

app.get("/api/companies/:id", async (req, res) => {
  try {
    const result = await db.query(
      `SELECT * FROM company where id = ${req.params.id}`
    );
    res.status(200).json({
      status: "success",
      company: result.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

// ADD A COMPANY
app.post("/api/companies", async (req, res) => {
  try {
    const { name, shipping_type, avg_period, avg_payment } = req.body;
    const result = await db.query(
      "INSERT INTO company ( name , shipping_type , avg_period , avg_payment)  values ($1 , $2 , $3, $4) returning *",
      [name, shipping_type, avg_period, avg_payment]
    );
    res.status(201).json({
      status: "success",
      data: {
        company: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// ADD A Customer

app.post("/api/companinig", async (req, res) => {
  try {
    const { name, address, email } = req.body;
    const result = await db.query(
      "INSERT INTO customer ( name , address , email)   values ($1 , $2 , $3) returning *",
      [name, address, email]
    );
    res.status(201).json({
      data: {
        customer: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// ADD A SERVICE

app.post("/api/companies/:id/service", async (req, res) => {
  try {
    const { customer_id, quantity, payment } = req.body;
    const result = await db.query(
      "INSERT INTO service ( company_id , customer_id , quantity , payment ) values($1 , $2 , $3, $4)returning *",
      [req.params.id, customer_id, quantity, payment]
    );
    res.status(201).json({
      status: "success",
      data: {
        service: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// GET THE BILL SHEET

app.get("/api/service/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await db.query(
      "SELECT  service.id as order_id ,customer_id, customer.name as customer_name, company.name as company_name, company.shipping_type, quantity , payment FROM service LEFT JOIN company on service.company_id = company.id LEFT JOIN customer on service.customer_id = customer.id ORDER BY service.id;"
    );
    res.status(200).json({
      status: "success",
      data: {
        service: result.rows[0],
      },
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3006;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
