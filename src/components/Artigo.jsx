import styled from "styled-components";

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

// Definindo props para o componente
function Artigo({ categoria, titulo, preco }) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };
  return (
    <StyledArtigo>
      <div>
        <h3>{categoria}</h3>
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

export default Artigo;
