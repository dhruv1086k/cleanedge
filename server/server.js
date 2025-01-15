import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js"; //remember to add .js

// App Config
const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // to connect our client to backend running on diff port

// API Routes
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(PORT, () => {
  console.log("Server running on ", PORT);
});
