
import './App.css';
import Users from "./components/Users";
import Rockets from "./components/Space/Rockets";

function App() {
  return (
    <div>
        <Users/>
        <hr/>
        <h2>Rockets</h2>
        <Rockets/>
    </div>
  );
}

export default App;
