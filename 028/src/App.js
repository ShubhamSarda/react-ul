import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TaskList } from "./components/TaskList";
import { AddTask } from "./components/AddTask";

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <AddTask />
      <TaskList />
      <Footer />
    </div>
  );
}

export default App;
