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
function Artigo(props) {
  return (
    <StyledArtigo>
      <p className="centralizar">
        <img src={props.imagem} alt="" />
      </p>
      <h3>
        <span>{props.icone}</span>
        {props.titulo}
      </h3>
      <p>{props.descricao}</p>
      <p>
        Lançamento: <time>{props.data}</time>
      </p>
      {props.children}
    </StyledArtigo>
  );
}

export default Artigo;
