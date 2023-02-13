import { useState } from "react";
import AppRoutes from "./routes/routes";
import GlobalStyle from "./styles/global";
import { StyledApp } from "./styles/style";

function App() {
  const [count, setCount] = useState(0);
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <AppRoutes />
    </StyledApp>
  );
}

export default App;
