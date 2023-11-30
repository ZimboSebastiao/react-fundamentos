import Menu from "./Menu";

// importação do módulo CSS como um objeto chamado estilos (o nome)
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>
        Olá <span className={estilos.sombra}>React!</span> 😎
      </h1>
      <hr />
      <Menu />
    </header>
  );
}

export default Cabecalho;
