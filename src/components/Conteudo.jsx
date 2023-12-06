/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";
import "../api/cursos.js";
import cursos from "../api/cursos.js";

const StyledConteudo = styled.main`
  width: 90vw;
  margin: 1rem auto;
  background-color: aliceblue;
  padding: 1rem;
  box-shadow: darkblue 0 0 1px inset;

  h2,
  p {
    padding: 0.2rem 0;
  }

  @media screen and (min-width: 650px) {
    .artigos {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      & article {
        width: 48%;
        margin: 1%;
      }
    }
  }
`;
function Conteudo() {
  // Função que será chamada a partir do evento acionado por um componente/elemento.
  const exemplo2 = () => {
    alert("Exemplo2");
  };

  const exemplo3 = (valor) => {
    alert("Exemplo3 " + valor);
  };

  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>
      <button onClick={exemplo2}>Exemplo 2</button>
      <br />
      <button
        onClick={() => {
          exemplo3("O Pai está On");
        }}
      >
        Exemplo 3 (Acionando o evento/ atráves do conteudo (pai))
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        {cursos.map((curso) => {
          return (
            <Artigo
              // handleClick={}

              // É necessário criar uma prop para passar a chamada/referência da função do componente pai

              aoClicar={() => {
                exemplo3(curso.categoria);
              }}
              key={curso.id}
              categoria={curso.categoria}
              titulo={curso.titulo}
              preco={curso.preco}
            />
          );
        })}
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
