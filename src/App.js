import './style/variables.scss';
import Routers from "./Routers";
import Header from "./views/_shared/header";

function App() {
  return (
      <>
        <Header/>
        <Routers/>
      </>
);
}

export default App;
