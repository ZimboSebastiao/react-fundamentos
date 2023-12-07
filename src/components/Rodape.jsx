function Rodape() {
  // Css em uma constanste para melhor organização ou reaproveitamento
  const exemploEstilos = {
    backgroundColor: "lightcyan",
    padding: "3%",
    color: "blue",
    border: "solid 4px #de56",
  };

  return (
    <footer style={exemploEstilos}>
      <h2 style={{ textAlign: "center" }}> Rodapé da aplicação</h2>
      <p className="destaque-texto, centralizar">Fundamentos de React</p>
      <p className="centralizar">
        Experimentando <b className="sombra">classes</b>
      </p>
    </footer>
  );
}

export default Rodape;
