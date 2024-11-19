import React from "react";
import Main from "../Main";

const MainHome: React.FC = () => {
  return (
    <Main>
      <img src="src/assets/logo.png" alt="" />
      <h1>venha conhece loja de jogos e diverti muito jogos</h1>
      <button className="cta-button">Faça um Orçamento</button>
    </Main>
  );
};

export default MainHome;