import imagemLoading from "../assets/loading.svg";

function Loading() {
  return (
    <p style={{ textAlign: "center" }}>
      <img src={imagemLoading} alt="Carregando" />
    </p>
  );
}

export default Loading;
