import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({ path: "./backend/.env" });


const app = express();

app.use(cors());
app.use(express.json());

const API_PEDIDOOK = "https://api.pedidook.com.br/v1/produtos/";

app.get("/", (req, res) => {
  res.send("Backend Kontudo Surf funcionando");
});

app.get("/api/produtos", async (req, res) => {
  try {
    const response = await axios.get(API_PEDIDOOK, {
      headers: {
        token_parceiro: process.env.TOKEN_PARCEIRO,
        token_pedidook: process.env.PEDIDOOK_TOKEN,
        "Content-Type": "application/json",
      },
      params: {
        pagina: req.query.pagina || 1,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.log(error.response?.data || error.message);

    res.status(500).json({
      erro: "Erro ao buscar produtos no PedidoOK",
      detalhe: error.response?.data || error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
