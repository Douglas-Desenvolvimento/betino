const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const prisma = require("./prismaClient");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3131;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api", require("./routes/sportsRoutes"));

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
