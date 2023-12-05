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
        >
          <h4>Volumes</h4>
          <ul>
            <li>A Sociedade do Anel</li>
            <li>As Duas Torres</li>
            <li>O Retorno do Rei</li>
          </ul>
        </Artigo>

        <Artigo
          imagem={imagem2}
          icone="👹"
          titulo="Game of Thrones"
          descricao="Aventura maluca, tem gente sempre morrendo."
          data={datas[1]}
        >
          <h4>Defuntos do livro</h4>
          <ol>
            <li>Aquele cara Stark</li>
            <li>Outra pessoa Importante</li>
            <li>Mais uma pessoa surpreendente</li>
          </ol>
        </Artigo>

        <Artigo
          imagem={imagem3}
          icone="🐱‍💻"
          titulo="HTML5 e CSS3"
          descricao="Fonte de estudos para quem quer começar no Front-End"
          data={datas[0]}
        >
          <section>
            <h4>Assuntos</h4>
            <details>
              <summary>Estrutura</summary>
              <p>HTML5 para estruturar e etc...</p>
            </details>

            <details>
              <summary>Estilização</summary>
              <p>CSS3 para formatar e etc...</p>
            </details>
          </section>
        </Artigo>
      </div>
    </StyledConteudo>
  );
}

export default Conteudo;
