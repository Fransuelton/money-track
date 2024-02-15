import { Header, Footer } from "../../components/layout";
import styled from "styled-components";
import empty from "/empty.svg";
import { Button, Modal } from "../../components";
import { useState } from "react";
import { readLocalStorage } from "../../utils/LocalStorage";
import { deletePiggyBank } from "../../utils/deletePiggBank";

const Dashboard = () => {
  const [open, setOpen] = useState<boolean>(false);

  const key = "piggyBank";
  const piggyBanksCreated = readLocalStorage({ key: key });

  return (
    <>
      <Header />
      <StyledSection>
        {piggyBanksCreated && (
          <>
            <h2>Seu cofrinho:</h2>
            <h2>{piggyBanksCreated.piggyBankName}</h2>
            <p>Valor Guardado: {piggyBanksCreated.initialDeposit}</p>
            <p>Motivo: {piggyBanksCreated.motive}</p>
            <Button
              content="Excluir cofrinho"
              className="deleteBtn"
              onClick={() => deletePiggyBank()}
            />
          </>
        )}
        {!piggyBanksCreated && (
          <>
            <img src={empty} alt="" className="piggy" id="piggy" />
            <h2>
              Ops! Parece que você ainda não tem um cofrinho.
              <span> Que tal criar o seu primeiro? É fácil e divertido!</span>
            </h2>
            <Button
              content="Criar cofrinho"
              className="createButton"
              onClick={() => setOpen(!open)}
            />
          </>
        )}

        <Modal isOpen={open} setOpen={setOpen} />
      </StyledSection>
      <Footer />
    </>
  );
};

const StyledSection = styled.section`
  background-color: rgb(245, 249, 254);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  width: 90%;

  h2 {
    padding: 3.2rem 0;
    font-size: 1.6rem;
  }

  span {
    display: block;
    margin-top: 1rem;
  }

  .createButton {
    background-color: #009c4a;
    border: none;
    color: #fff;

    &:hover {
      background-color: #00803a;
    }
  }

  @media (max-width: 480px) {
    span {
      display: inline;
    }
  }
`;

export { Dashboard };
