import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

function DetalhesProduto() {
  const [produto, setProduto] = useState([]);
  const [loading, setLoading] = useState(true);
  // Usamos o hook useParams do React Router DOM para ter acesso
  //aos parâmetros da rota dinâmica neste caso, o parâmetro chamado "id"
  const { id } = useParams();

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const resposta = await fetch(`https://fakestoreapi.com/products/${id}`);
        const dados = await resposta.json();
        setProduto(dados);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar produto: " + error);
        const dados = await respota.json();
        console.log(dados);
      }
    };
    carregarDados();
  }, [id]);

  return (
    <article>
      {loading ? (
        <Loading />
      ) : (
        <>
          <img
            src={produto.image}
            alt={produto.title}
            style={{ width: "22%" }}
          />
          <h2>{produto.title}</h2>
          <p>Preço: {produto.price}</p>
          <p>Descrição: {produto.description}</p>
          <p>Categoria: {produto.category}</p>
        </>
      )}
    </article>
  );
}

export default DetalhesProduto;
