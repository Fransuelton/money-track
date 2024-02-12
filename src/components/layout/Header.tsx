import logo from "/favicon.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Link to={`/`}>
      <img src={logo} alt="Logo Money Track" />
      </Link>
      <StyledP>MoneyTrack - Cofrinho Virtual</StyledP>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding: 3rem 0;
`;

const StyledP = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export {Header}
