function App() {
  return (
    <>
      <header>
        <h1>Olá React! 😎</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Produtos</a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/* Comentário no meio do JS
      É normal ficar entre {} nesta situação
     */}

      <main>
        <section>
          <h2>Conteúdo da aplicação</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            itaque minus atque odio quis quidem labore aliquam repellendus
            architecto soluta temporibus error similique, rem cumque magnam
            fugiat ducimus dignissimos animi.
          </p>

          <article>
            <h3>Artigo 1</h3>
            <p>Conteúdo do artigo1...</p>
          </article>
          <article>
            <h3>Artigo 2</h3>
            <p>Conteúdo do artigo...</p>
          </article>
          <article>
            <h3>Artigo 3</h3>
            <p>Conteúdo do artigo...</p>
          </article>
        </section>
      </main>
    </>
  );
}

export default App;
