import { useParams } from "react-router-dom";

function DetalhesProduto() {
  // Usamos o hook useParams do React Router DOM para ter acesso
  //aos parâmetros da rota dinâmica neste caso, o parâmetro chamado "id"
  const { id } = useParams();
  console.log(id);

  return (
    <article>
      <img src="" alt="" />
      <h2>Titulo...</h2>
      <p>Categoria...</p>
      <p>Preço...</p>
      <p>Descrição</p>
    </article>
  );
}

export default DetalhesProduto;
