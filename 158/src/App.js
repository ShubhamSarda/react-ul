import './App.css';
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { JokePage } from "./pages/JokePage";
import { PageNotFound } from "./pages/PageNotFound";


function App() {
  return (
      <>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="joke" element={<JokePage />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </>
  );
}

export default App;