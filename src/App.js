// import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Routing from "./Routing/Routing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <Routing />
      </div>
    </div>
  );
}

export default App;
