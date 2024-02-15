import { styled } from "styled-components";

import { Header, Footer } from "../../components/layout";
import { Form } from "../../components";

const About = () => {
  return (
    <>
      <Header />
      <StyledSection>
        <h2>O que é o MoneyTrack? 🤔</h2>
        <p>
          É uma aplicação web que transforma a arte de economizar em uma jornada
          cativante e recompensadora. Com cofrinhos virtuais personalizados e
          uma abordagem gamificada, nosso aplicativo não apenas simplifica o
          controle financeiro, mas também transforma o ato de poupar dinheiro em
          uma experiência divertida. Alcance seus objetivos financeiros de forma
          mais eficiente, enquanto se diverte no processo. Com o MoneyTrack,
          você molda seu caminho para o sucesso financeiro, passo a passo.
        </p>

        <h2>O Futuro 🚀</h2>
        <p>
          Está é a versão de MVP (Mínimo Produto Viável) onde estão disponíveis
          as funcionalidades mais básicas como criar, excluir, fazer depósitos e
          retiradas. Novas versões e funcionalidades chegaram em breve de acordo
          com a evolução do projeto.
        </p>

        <h2>Compartilhe sua Opinião ✨</h2>

        <p>
          Queremos tornar o MoneyTrack ainda melhor e precisamos da sua ajuda.
          Compartilhe seus comentários, sugestões e ideias para aprimorar sua
          experiência com o aplicativo. Sua contribuição é fundamental para
          moldar o futuro do MoneyTrack e garantir que atenda às suas
          necessidades financeiras da melhor maneira possível. Agradecemos por
          dedicar um momento para compartilhar sua valiosa opinião!
        </p>

        <Form />
      </StyledSection>
      <Footer />
    </>
  );
};

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 1rem;
  gap: 2rem;
  width: 91rem;

  h2 {
    font-size: 4rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    h2 {
      font-size: 3rem;
    }

    p {
      font-size: 1.6rem;
    }
  }
`;

export { About };
