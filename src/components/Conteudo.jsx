/* Conteudo.jsx */
import Artigo from "./Artigo";
import styled from "styled-components";

// Importando os asstes de imagem
import imagem1 from "../assets/abra-o-livro.png";
import imagem2 from "../assets/livro-magico.png";
import imagem3 from "../assets/pilha-de-livros.png";

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
  const datas = ["12/03/2014", "04/06/2015", "05/07/2023"];
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
          imagem={imagem1}
          icone="🐱"
          titulo="Senhor dos Anéis"
          descricao="Livro criado por Tokien."
          data={datas[2]}
        />
        <Artigo
          imagem={imagem2}
          icone="👹"
          titulo="Game of Thrones"
          descricao="Aventura maluca, tem gente sempre morrendo."
          data={datas[1]}
        />
        <Artigo
          imagem={imagem3}
          icone="🐱‍💻"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
          data={datas[0]}
        />
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
