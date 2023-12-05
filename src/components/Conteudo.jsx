/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

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
      justify-content: space-between;

      & article {
        width: 32%;
      }
    }
  }
`;

function Conteudo() {
  return (
    <StyledConteudo>
      <h2>Conteúdo da aplicação</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
        labore? Officia quae quo a quas excepturi distinctio sint voluptas
        labore iste veniam possimus facere adipisci sit repellat, voluptate,
        expedita aspernatur.
      </p>

      <div className="artigos">
        <Artigo
          icone="🐱"
          titulo="Senhor dos Anéis"
          descricao="Livro criado por Tokien."
        />
        <Artigo
          icone="👹"
          titulo="Game of Thrones"
          descricao="Aventura maluca, tem gente sempre morrendo."
        />
        <Artigo
          icone="🐱‍💻"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
