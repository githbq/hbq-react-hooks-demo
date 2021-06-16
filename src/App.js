import logo from "./logo.svg";
import "./App.css";
import Helmet from "react-helmet";
import Status from "./components/Status";
import Context from "./components/Context";
import Reducer from "./components/Reducer";
import Effect from "./components/Effect";
import UseContext1 from "./components/useContext-1";

function App() {
  return (
    <div className="App">
      <h1>Status</h1>
      <Status />
      <br />
      <h1>Context</h1>
      <Context />
      <br />
      <h1>Reducer</h1>
      <Reducer />
      <br />
      <h1>Effect</h1>
      <Effect />
      <br />
      <h1>UseContenxt1</h1>
      <UseContext1/>
    </div>
  );
}

export default App;
