import { GlobalStyle } from "./globalStyles";
import { AppWrapper } from "./ui";
import { Display, Panel } from "./components";

export function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper>
        <Display />
        <Panel />
      </AppWrapper>
    </>
  );
}
