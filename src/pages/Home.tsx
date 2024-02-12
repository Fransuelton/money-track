import { Header, Footer } from "../components/layout";
import styled from "styled-components";
import piggyBank from "/piggy.svg";
import { Button } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <StyledSection>
        <StyledDivContainer>
          <h1>Divirta-se economizando, construa seu futuro!</h1>
          <p>
            MoneyTrack: Transformando economia em diversão. Controle suas
            finanças enquanto se diverte e atinja seus objetivos mais rápido.
          </p>
          <div>
            <Link to={`/dashboard`}>
              <Button content="Criar cofrinho virtual" className="CtaButton" />
            </Link>
            <Link to={`/saiba-mais`}>
              <Button content="Saiba mais" className="SecondaryButton" />
            </Link>
          </div>
        </StyledDivContainer>
        <StyledImg
          src={piggyBank}
          alt="Piggy Bank Coin - Piggy Bank Vector Png@pngkit.com"
        />
      </StyledSection>
      <Footer />
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 10rem 0;
  padding: 2rem;
   color: #fff;
  
  h1 {
    font-size: 4.5rem;
    text-align: left;
    padding-bottom: 3.2rem;
  }

  p {
    font-weight: 400;
    font-size: 2rem;
    padding-bottom: 4.8rem;
    padding-right: 10rem;
  }

  div {
    display: flex;
    gap: 2.4rem;
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    margin: 0;
    gap: 0;
    padding: 0 2rem;

    h1 {
      font-size: 3rem;
      text-align: center;
      padding: 0;
    }

    p {
      font-size: 1.5rem;
      text-align: center;
      padding: 0;
    }

    div {
      gap: 2.4rem;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80rem;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 50rem;
  height: 50rem;

  @media (max-width: 480px) {
    width: 30rem;
    height: 30rem;
  }
`;

export { Home };
