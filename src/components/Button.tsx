import styled from "styled-components";

interface IButton {
  content: string;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "button";
  disabled?: boolean;
}

const Button = ({ content = "Button", className, onClick }: IButton) => {
  return <StyledButton className={className} onClick={onClick}>{content}</StyledButton>;
};

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 1.8rem;
  padding: 1.6rem 3.2rem;
  justify-content: center;
  border-radius: 1rem;
  align-items: center;
  transition: 0.2s;
  border: none;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 480px){
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
  }
`;

export { Button };
