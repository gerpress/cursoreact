import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div classname="App">
      <NavBar />
      <ItemListContainer greeting={"Bienvenidos"} />
    </div>
  );
}

export default App;
