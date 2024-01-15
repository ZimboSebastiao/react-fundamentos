import { useEffect, useState } from "react";

function Produtos() {
  // O state "produtos" é iniciado como um array vazio. Posteriormente (após o carregamento dos dados da api) ele será preenchido com os objetos/produtos.
  const [produtos, setProdutos] = useState([]);

  // Gerenciando efeito colateral dp componente para o carregamento dos da api

  /*
  Fluxo geral de funcionamento do código abaixo:

  1) useEffect é carregado UMA VEZ e APÓS  a montagem do page (Produtos)
  Obs: 0 [] indica que o useEffect não tem dependências adicionais e que será executado somente UMA VEZ.
  2) Em seguida, ele executa a funçao carregarDados
  3) Ao término dela, atualiza o state (produtos)
  */

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>
      {produtos.map((produto) => {
        return (
          <section key={produto.id}>
            <h3>{produto.title}</h3>
            <p>{produto.price}</p>
            <p>{produto.description}</p>
            <p>{produto.category}</p>
            <p>{produto.image}</p>
          </section>
        );
      })}
    </article>
  );
}

export default Produtos;
