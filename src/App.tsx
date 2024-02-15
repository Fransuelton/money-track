import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./pages/routes";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
    <ToastContainer />
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
  font-family: "Sora", sans-serif;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #009C4A;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

  .deleteBtn {
    background-color: #ce2519;
    color: #fff;
  }
`;

export default App;
