import "dotenv/config"; //to get all the env var in the backend process
import express from "express";
import cors from "cors";
import connectDB from "./configs/config.js";

// App config
const PORT = process.env.PORT || 4000; //getting port number provided from .env file or use 4000 if not available in env file
const app = express();
await connectDB();

// Initialize middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // use to connect our client which is running on another port to server

// API Routes
app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
