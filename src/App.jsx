import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import DetailsPage from "./Pages/DetailsPage";
import Favorites from "./Pages/Favorites";
import SearchPage from "./Pages/SearchPage";
import Trailer from "./Pages/Trailer";

function App() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  const [favArray, setFavArray] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const [addShow, setAddShow] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("favArray", JSON.stringify(favArray));
  // }, [favArray]);

  // useEffect(() => {
  //   const favArray = JSON.parse(localStorage.getItem("favArray"));
  //   if (favArray) {
  //     setItems(favArray);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout addShow={addShow} />}>
          <Route
            index
            element={<Homepage setSearchResults={setSearchResults} />}
          />
          <Route
            path="/detailspage/:id"
            element={
              <DetailsPage
                setFavArray={setFavArray}
                favArray={favArray}
                showDetails={showDetails}
                setShowDetails={setShowDetails}
                addShow={addShow}
                setAddShow={setAddShow}
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
          <Route
            path="/searchresults"
            element={
              <SearchPage
                searchResults={searchResults}
                favArray={favArray}
                setFavArray={setFavArray}
                addShow={addShow}
                setAddShow={setAddShow}
              />
            }
          />
          <Route
            path="/trailers/:id"
            element={
              <Trailer
                setShowDetails={setShowDetails}
                showDetails={showDetails}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
