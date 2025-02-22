import Routing from "./Routes/Routing";
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import { PrimeReactProvider, PrimeReactContext} from 'primereact/api';
import "./App.css";


function App() {
  return (
    <PrimeReactProvider>
    <>
      <Routing />
      
    </>
    </PrimeReactProvider>
  );
}

export default App;
