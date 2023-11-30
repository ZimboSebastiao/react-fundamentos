import Menu from "./Menu";

// importação do módulo CSS como um objeto chamado estilos (o nome)
import estilos from "./Cabecalho.module.css";

function Cabecalho() {
  return (
    <header>
      <h1 style={{ textAlign: "center" }}>
        <span className={estilos["destaque-texto"]}> Óla</span>
        <span className={estilos.sombra}>React!</span> 😎
      </h1>
      <hr />
      <p className={`${estilos["destaque-texto"]} centralizar`}>
        Classes combinadas
      </p>
      <Menu />
    </header>
  );
}

export default Cabecalho;
