import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import Fetch from "./Test/Fetch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
