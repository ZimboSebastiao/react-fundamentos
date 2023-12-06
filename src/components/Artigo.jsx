import styled from "styled-components";

// Definindo props para o componente
function Artigo({ categoria, titulo, preco, aoClicar }) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <StyledArtigo>
      {/* O Componente filho (Artigo) recebe através da prop 'aoClicar' a referência à função exemplo 3 existente no componente Pai (conteudo) */}
      <div>
        <h3 onClick={aoClicar}> {categoria}</h3>
        <p>
          <b>Curso: </b>
          {titulo}
        </p>
        <p>
          <b>Preço: </b>
          {formatarPreco(preco)}
        </p>
      </div>
    </StyledArtigo>
  );
}

const StyledArtigo = styled.article`
  background-color: lavender;
  padding: 1rem;
  margin: 0.5rem 0;

  h3 {
    color: purple;
    border-bottom: 1px solid;
  }

  p {
    font-size: 1.1rem;
  }
  .centralizar {
    text-align: center;
    padding: 4px;
  }
`;

export default Artigo;
