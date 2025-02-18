import express from "express";
import cors from "cors";

import authRouter from "./routes/auth.js";
import connectToDatabase from "./db/db.js";
connectToDatabase();
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRouter);
console.log(process.env.PORT);

app.listen(process.env.PORT || 5001, () => {
  console.log(`Server is running on port http://localhost:5001`);
});
