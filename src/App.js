import logo from "./logo.svg";
import "./App.css";
import Helmet from "react-helmet";
import Card from "./components/Card";
import Context from "./components/Context";
import Reducer from "./components/Reducer";
import Effect from "./components/Effect";


function App() {
  return (
    <div className="App">
      <h1>app</h1>
      <Card />
      <br />
      <Context />
      <br />
      <Reducer />
      <br />
      <Effect/>
      <br/>
    </div>
  );
}

export default App;
