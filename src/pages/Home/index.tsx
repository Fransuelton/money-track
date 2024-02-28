import piggyBankCoin from "/piggy.svg";

import { Link } from "react-router-dom";
import { styled } from "styled-components";

import { Header, Footer } from "../../components/layout";
import { Button } from "../../components";

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
          <div className="button-container">
            <Link to={`/dashboard`}>
              <Button content="Criar cofrinho virtual" className="CtaButton" />
            </Link>

            <Link to={`/saiba-mais`}>
              <Button content="Saiba mais" className="SecondaryButton" />
            </Link>
          </div>
        </StyledDivContainer>
        <StyledImg
          src={piggyBankCoin}
          alt="Coin Clipart Banking - Piggy Bank"
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
    padding-bottom: 3.2rem;
    padding-right: 10rem;
  }

  .button-container {
    display: flex;
    gap: 2.4rem;
  }

  .CtaButton {
    background: #fff;
    color: #009c4a;
    border: none;
    transition: transform 0.2s;
  }

  .SecondaryButton {
    border: 0.1rem solid #fff;
    color: #fff;
    background: transparent;
    transition: 0.2s;

    &:hover {
      background: #fff;
      color: #009c4a;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column-reverse;

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

    .button-container {
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    flex-direction: column-reverse;

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

    .button-container {
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    flex-direction: column-reverse;

    h1 {
      font-size: 3rem;
      text-align: center;
      padding: 0;
    }

    p {
      text-align: center;
      padding: 0;
    }

    .button-container {
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    flex-direction: column-reverse;

    h1 {
      font-size: 3rem;
      text-align: center;
      padding: 0;
    }

    p {
      text-align: center;
      padding: 0;
    }

    .button-container {
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    flex-direction: row;
  }

  @media (min-width: 1920px) {
    flex-direction: row;

    p {
      padding: 0;
    }
  }
`;

const StyledDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    width: 100%;
    margin-bottom: 3rem;
    gap: 2.4rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    margin-bottom: 3rem;
    gap: 2.4rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    margin-bottom: 3rem;
    gap: 3rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 80rem;
    margin-bottom: 3rem;
    gap: 3rem;
  }

  @media (min-width: 1200px) and (max-width: 1919px) {
    max-width: 80rem;
  }

  @media (min-width: 1920px) {
    width: 80rem;
    margin-bottom: 3rem;
    gap: 3rem;
  }
`;

const StyledImg = styled.img`
  width: 50rem;
  height: 50rem;

  @media (max-width: 480px) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 30rem;
    height: 30rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    width: 40rem;
    height: 40rem;
  }
`;

export { Home };
