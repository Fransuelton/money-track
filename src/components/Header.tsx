import logo from "/favicon.png";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <img src={logo} alt="Logo Money Track" />
      <StyledP>MoneyTrack - Cofrinho Virtual</StyledP>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  padding-top: 2rem;
`;

const StyledP = styled.p`
  font-size: 2.4rem;
  font-weight: 600;
  color: #fff;
`;
