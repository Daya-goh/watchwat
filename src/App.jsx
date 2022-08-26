import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import Fetch from "./Test/Fetch";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import DetailsPage from "./Pages/DetailsPage";
import Favorites from "./Pages/Favorites";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [favArray, setFavArray] = useState([]);
  const [showDetails, setShowDetails] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route
            path="/detailspage/:id"
            element={
              <DetailsPage
                setFavArray={setFavArray}
                favArray={favArray}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favArray={favArray}
                showDetails={showDetails}
                setFavArray={setFavArray}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
