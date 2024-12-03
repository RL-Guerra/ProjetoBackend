import express from "express";
import cors from "cors";
import userRoutes from "./routes/authRoutes";
import bookRoutes from "./routes/bookRoutes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

// Utilizando as rotas de usuários
app.use(userRoutes);
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;