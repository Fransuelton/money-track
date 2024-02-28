import { Header, Footer } from "../../components/layout";
import styled from "styled-components";
import empty from "/empty.svg";
import { Button, Modal } from "../../components";
import { useState, useEffect } from "react";
import { getPiggyBankObserver } from "../../services/observers/piggyBanksObservers";
import { IPiggyBankGetType } from "../../interfaces/piggyBanksInterfaces";
import background from "/piggybank-background.png";
import { deletePiggyBankAction } from "../../services/actions/piggyBanksAction";
import { formatCurrency } from "../../utils/FormatCurrency";

const Dashboard = () => {
  const [piggyBank, setPiggyBank] = useState<IPiggyBankGetType[]>([]);
  useEffect(() => {
    getPiggyBankObserver(setPiggyBank);
  }, []);

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Header />
      <p>Olá {}</p>
      <StyledSection>
        {piggyBank.length > 0 ? (
          piggyBank.map((piggy) => (
            <div className="piggyContainer" key={piggy.id}>
              <img src={background} alt="" className="piggy" id="piggy" />
              <div className="text-container">
                <h2>{piggy.name}</h2>
                <p>{formatCurrency(piggy.initialDeposit)}</p>
              </div>
              <div className="button-container">
                <Button
                  content="Deletar cofrinho"
                  className="createButton"
                  onClick={() => deletePiggyBankAction(piggy.id)}
                />
              </div>
            </div>
          ))
        ) : (
          <section className="empty-piggy">
            <img src={empty} alt="" className="piggy" id="piggy" />
            <h2>
              Ops! Parece que você ainda não tem um cofrinho.
              <span> Que tal criar o seu primeiro? É fácil e divertido!</span>
            </h2>
          </section>
        )}

        <Button
          content="Criar cofrinho"
          className="createButton"
          onClick={() => {
            setOpen(!open);
          }}
        />

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
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  text-align: center;
  width: 90%;

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 1.6rem;
  }

  span {
    display: block;
    margin-top: 1rem;
  }

  .createButton {
    display: flex;
    flex-direction: column;
    background-color: #009c4a;
    border: none;
    color: #fff;

    &:hover {
      background-color: #00803a;
    }
  }

  .empty-piggy {
    display: flex;
    flex-direction: column;
  }

  .button-container {
    display: flex;
    flex-direction: column;
  }

  .piggyContainer {
    display: flex;
    flex-direction: column;
    background-color: #263238;
    color: white;
    padding: 1rem;
    border-radius: 1.6rem;
    width: 30rem;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    span {
      display: inline;
    }
  }
`;

export { Dashboard };
