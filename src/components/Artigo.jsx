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
function Artigo({ imagem, icone, titulo, descricao, data, children }) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={imagem} alt="" />
      </p>
      <h3>
        <span>{icone}</span>
        {titulo}
      </h3>
      <p>{descricao}</p>
      <p>
        Lançamento: <time>{data}</time>
      </p>
      {children}
    </StyledArtigo>
  );
}

export default Artigo;
