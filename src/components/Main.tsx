import styled from "styled-components";
import piggyBank from "/piggy.svg";

const Main = () => {
  return (
    <StyledSection>
      <StyledDivContainer>
        <h1>Divirta-se economizando, construa seu futuro!</h1>
        <p>
          MoneyTrack: Transformando economia em diversão. Controle suas finanças
          enquanto se diverte e atinja seus objetivos mais rápido.
        </p>
        {/* <StyledCTAButton type="button">Criar cofrinho virtual</StyledCTAButton> */}
        <StyledButton type="button">Saiba mais</StyledButton>
      </StyledDivContainer>
      <StyledImg
        src={piggyBank}
        alt="Piggy Bank Coin - Piggy Bank Vector Png@pngkit.com"
      />
    </StyledSection>
  );
};

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin: 10rem 0;
  height: 100%;
`;

const StyledDivContainer = styled.div`
  color: #fff;
  width: 80rem;

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
`;

// const StyledCTAButton = styled.button`
//   cursor: pointer;
//   padding: 1.6rem 3.2rem;
//   justify-content: center;
//   align-items: center;
//   border-radius: 1rem;
//   background: #fff;
//   color: #009c4a;
//   border: none;
//   font-size: 1.8rem;
//   margin-right: 2.4rem;
// `;

const StyledButton = styled.button`
  font-size: 1.8rem;
  cursor: pointer;
  padding: 1.6rem 3.2rem;
  justify-content: center;
  align-items: center;
  background: none;
  border: 0.1rem solid #fff;
  border-radius: 1rem;
  font-weight: 500;
  color: #fff;
`;

const StyledImg = styled.img``;

export default Main;
