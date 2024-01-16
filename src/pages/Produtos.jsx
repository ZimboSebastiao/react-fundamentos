import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Produtos() {
  // O state "produtos" é iniciado como um array vazio. Posteriormente (após o carregamento dos dados da api) ele será preenchido com os objetos/produtos.
  const [produtos, setProdutos] = useState([]);

  // State de loading (por padrão, inicia ativado/true)
  const [loading, setLoading] = useState(true);

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
        const resposta = await fetch(`https://fakestoreapi.com/products/`);
        const dados = await resposta.json();
        console.log(dados);
        setProdutos(dados);
        setLoading(false);
      } catch (error) {
        console.error("Houve um erro: " + error);
      }
    };

    carregarDados();
  }, []);

  return (
    <article>
      <h2>Produtos</h2>
      {loading ? (
        <Loading />
      ) : (
        produtos.map((produto) => {
          return (
            <section key={produto.id}>
              <h3>{produto.title}</h3>
              <p>Preço: {produto.price}</p>
              <p>Descrição: {produto.description}</p>
              <p>Categoria: {produto.category}</p>
              <p>
                <img
                  src={produto.image}
                  alt={produto.title}
                  style={{ width: "20%" }}
                />
              </p>
              <p>
                <Link to={`/produtos/${produto.id}`}>Ver detalhes</Link>
              </p>
            </section>
          );
        })
      )}
    </article>
  );
}

export default Produtos;
