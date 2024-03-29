import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>© 2024 MoneyTrack. Todos os direitos reservados. Versão MVP.</p>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  color: #fff;
  font-size: 1.6rem;
  text-align: center;
  padding: 2rem;

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }
`;

export {Footer}
