import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/Layout";
import Fetch from "./Test/Fetch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
