import "./App.css";
import Home from "./Components/Home";
import Jumbotron from "./Components/Jumbotron";
function App() {
  return (
    <>
      <Jumbotron />
      <div className="App">
        <Home />
      </div>
    </>
  );
}

export default App;
