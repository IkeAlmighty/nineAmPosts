import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

// TODO: replace test user auth with real auth when real auth is implemented
function testUser(req, res, next) {
  //
}

app.use(testUser);

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Express server!" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
