import { useForm, ValidationError } from "@formspree/react";
import { styled } from "styled-components";
import { Button } from "../../components/Button";

const Form = () => {
  const [state, handleSubmit] = useForm("xyyrelar");
  
  if (state.succeeded) {
    return <SucessMessage>Sua Mensagem foi enviada com sucesso!</SucessMessage>;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput id="name" type="text" name="name" placeholder="Nome" />
      <StyledTextArea id="message" name="message" placeholder="Mensagem" />

      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button type="submit" disabled={state.submitting} content="Enviar Mensagem"/>

    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 45rem;
  gap: 1.5rem;

  @media (max-width: 480px) {
    width: 35rem;
  }
`;

const StyledInput = styled.input`
  height: 5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  outline: none;
  background-color: #fff;
  border: none;
  font-size: 1.7rem;

  &::placeholder {
    color: #B3B3B3;
    font-size: 1.7rem;
  }
`;

const StyledTextArea = styled.textarea`
  height: 14rem;
  padding: 1rem;
  border-radius: 0.8rem;
  border: none;
  outline: none;
  background-color: #fff;
  border: none;
  resize: none;
  font-size: 1.7rem;

  &::placeholder {
    color: #B3B3B3;
    font-size: 1.7rem;
  }
`;

const SucessMessage = styled.p`
  font-size: 2rem;
  color: #000;
  text-align: center;
  width: 45rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.8rem;


  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export { Form };
