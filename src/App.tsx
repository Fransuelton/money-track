import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
*,
*:after,
*:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Sora", sans-serif;
  background-color: #009C4A;
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
`;

export default App;
