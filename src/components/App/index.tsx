import "@/assets/style.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Body } from "@/components/Body";
import { Menubar } from "@/components/Menubar";
import { Statusbar } from "@/components/Statusbar";
import { AppWrapper, GlobalStyles, theme } from "./style";

const App = () => {
  return (
    <AppWrapper>
      <Menubar />
      <Body />
      <Statusbar />
    </AppWrapper>
  );
};

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <ul>
        {Object.keys(names).map((name, idx) => (
          <li key={idx}>
            <Icon name={name} />
          </li>
        ))}
      </ul> */}
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
