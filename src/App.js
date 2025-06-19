import Routing from "./Routes/Routing";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { ParentProvider } from "./APIContext/ParentContext";
import { LoginProvider } from "./APIContext/LoginContext";
import { PlayerAccountProvider } from "./APIContext/PlayerAccountContext";
import "./App.css";

function App() {
  return (
    <PrimeReactProvider>
      <LoginProvider>
        <ParentProvider>
          <PlayerAccountProvider>
            <Routing />
          </PlayerAccountProvider>
        </ParentProvider>
      </LoginProvider>
    </PrimeReactProvider>
  );
}

export default App;
