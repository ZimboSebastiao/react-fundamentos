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
`;

function Artigo() {
  return (
    <StyledArtigo>
      <h3>Artigo 1</h3>
      <p>Conteúdo do artigo 1....</p>
    </StyledArtigo>
  );
}

export default Artigo;
