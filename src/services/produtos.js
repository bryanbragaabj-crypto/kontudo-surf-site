const API_LOCAL = "https://kontudo-surf-site.vercel.app";

async function buscarPagina(pagina) {
  const baseUrl = import.meta.env.DEV ? API_LOCAL : "";

  const resposta = await fetch(`${baseUrl}/api/produtos?pagina=${pagina}`);

  if (!resposta.ok) {
    throw new Error("Não foi possível buscar os produtos.");
  }

  return resposta.json();
}

export async function buscarTodosProdutos() {
  const todosProdutos = [];
  let pagina = 1;
  let continuar = true;

  while (continuar && pagina <= 50) {
    const dados = await buscarPagina(pagina);

    const produtosDaPagina = Array.isArray(dados)
      ? dados
      : dados.produtos || [];

    todosProdutos.push(...produtosDaPagina);

    continuar =
      Boolean(dados?.href_proxima_pagina) &&
      produtosDaPagina.length > 0;

    pagina += 1;
  }

  const produtosUnicos = Array.from(
    new Map(
      todosProdutos.map((produto) => [
        produto.id || produto.codigo,
        produto,
      ])
    ).values()
  );

  return produtosUnicos;
}
