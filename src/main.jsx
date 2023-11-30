// Importação das libs essenciais (React e ReactDOM)
import React from "react";
import ReactDOM from "react-dom/client";

// Importação do primeiro/principal componente, arquivo em que carregamos os elementos da página (como fosse um index/home)
import App from "./App.jsx";
import "./index.css";

// Inicialização dos recursos do React, manipulando a div#root existente no index.html
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
