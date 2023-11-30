import Artigo from "./Artigo";

function Conteudo() {
  return (
    <main>
      <section>
        <h2>Conteúdo da aplicação</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          itaque minus atque odio quis quidem labore aliquam repellendus
          architecto soluta temporibus error similique, rem cumque magnam fugiat
          ducimus dignissimos animi.
        </p>
      </section>
      {/* Reaproveitamentos de Componentes */}
      <Artigo />
      <Artigo />
      <Artigo />
    </main>
  );
}

export default Conteudo;
