const PEDIDOOK_URL = "https://api.pedidook.com.br/v1/produtos/";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({
      erro: "Método não permitido",
    });
  }

  try {
    const pagina = request.query.pagina || "1";

    const pedidoOkResponse = await fetch(
      `${PEDIDOOK_URL}?pagina=${encodeURIComponent(pagina)}`,
      {
        method: "GET",
        headers: {
          token_parceiro: process.env.TOKEN_PARCEIRO,
          token_pedidook: process.env.PEDIDOOK_TOKEN,
          Accept: "application/json",
        },
      }
    );

    const data = await pedidoOkResponse.json();

    if (!pedidoOkResponse.ok) {
      return response.status(pedidoOkResponse.status).json({
        erro: "Erro retornado pelo PedidoOK",
        detalhe: data,
      });
    }

    return response.status(200).json(data);
  } catch (error) {
    console.error("Erro ao consultar PedidoOK:", error);

    return response.status(500).json({
      erro: "Não foi possível consultar os produtos",
    });
  }
}

