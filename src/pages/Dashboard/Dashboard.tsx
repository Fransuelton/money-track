import { Header, Footer } from "../../components/layout";
import styled from "styled-components";
import empty from "/empty.svg";
import { Button, Modal } from "../../components";
import { useState } from "react";
import { criarCofrinho } from "../../utils/CreatePiggyBank";

const Dashboard = () => {

  const [open, setOpen] = useState<boolean>(false);

  criarCofrinho()
  
  return (
    <>
      <Header />
      <StyledSection>
        <img src={empty} alt="" className="piggy" id="piggy" />
        <h2 className="text">
          Ops! Parece que você ainda não tem um cofrinho.
          <span> Que tal criar o seu primeiro? É fácil e divertido!</span>
        </h2>
        <Button
          content="Criar cofrinho"
          className="createButton"
          onClick={() => setOpen(!open)}
        />

        <Modal isOpen={open} setOpen={setOpen}/>

      </StyledSection>
      <Footer />
    </>
  );
};

const StyledSection = styled.section`
  background-color: rgb(245, 249, 254);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 10rem 2rem;
  padding: 2rem;

  h2 {
    padding-bottom: 3.2rem;
  }

  span {
    display: block;
    margin-top: 2rem;
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
    margin: 0 2rem;
    text-align: center;

    h2 {
      font-size: 1.6rem;
    }

    .piggy {
      width: 100%;
    }

    span {
      margin-top: 0;
      display: inline;
    }
  }
`;

export { Dashboard };
