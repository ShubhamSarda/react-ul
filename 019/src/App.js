import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import './App.css';

function App() {
  const concept = "Prop Drilling";

  return (
    <div className="App">
      <Header />
      <TaskList concept={concept} />
    </div>
  );
}

export default App;
