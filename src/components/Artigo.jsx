import { useState } from "react";
import styled from "styled-components";

// Definindo props para o componente
function Artigo({ categoria, titulo, preco }) {
  const formatarPreco = (valor) => {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const [cor, setCor] = useState("lavender");

  const mudarCor = () => {
    if (cor == "lavender") {
      setCor("pink");
    } else {
      setCor("lavender");
    }
  };

  return (
    <StyledArtigo style={{ background: cor }}>
      <div onClick={mudarCor}>
        <h3>{categoria}</h3>
        <p>
          <b> Curso: </b>
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
