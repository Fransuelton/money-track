import { useForm, ValidationError } from "@formspree/react";
import { styled } from "styled-components";
import { Button } from "../../components/Button";

const Form = () => {
  const [state, handleSubmit] = useForm("xyyrelar");

  if (state.succeeded) {
    return <SucessMessage>Sua Mensagem foi enviada com sucesso!</SucessMessage>;
  } else
    return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          id="name"
          type="text"
          name="name"
          placeholder="Digite seu nome aqui (ex: João da Silva)"
        />
        <StyledTextArea
          id="message"
          name="message"
          placeholder="Deixe sua mensagem aqui (ex: Adorei o MoneyTrack, mas seria ótimo ter mais opções de personalização nos cofrinhos)"
        />

        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button
          type="submit"
          disabled={state.submitting}
          content="Enviar Mensagem"
          className="form-button"
        />
      </StyledForm>
    );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5rem;
  margin-top: 2rem;

  .form-button {
    border: 0.1rem solid #fff;
    color: #fff;
    background: transparent;
    transition: 0.2s;

    &:hover {
      background: #fff;
      color: #009c4a;
    }
  }
`;

const StyledInput = styled.input`
  height: 5rem;
  padding: 1rem;
  border-radius: 0.8rem;
  outline: none;
  background-color: #fff;
  border: none;
  font-size: 1.6rem;

  &::placeholder {
    color: #b3b3b3;
    font-size: 1.6rem;
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
  font-size: 1.6rem;

  &::placeholder {
    color: #b3b3b3;
    font-size: 1.6rem;
  }
`;

const SucessMessage = styled.p`
  font-size: 2rem;
  color: #000;
  text-align: center;
  width: 45rem;
  padding: 1rem;
  border-radius: 0.8rem;
`;

export { Form };
