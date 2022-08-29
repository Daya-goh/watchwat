import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Carousel";
import SiteTitle from "../Components/SiteTitle";

const Homepage = ({ setSearchResults }) => {
  const [input, setInput] = useState("");

  const navigateSearch = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //changing search input into a component?

  const handleSubmit = () => {
    console.log(input);
    const searchURL = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=nmHHQa7DASZOcKZoR9Ok3bcbzXbS6ocMNhw1H1FF&search_field=name&search_value=${input}&search_type=2`;
    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data.results);
      });
    navigateSearch("/searchresults");
  };

  return (
    <>
      <SiteTitle />

      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-row gap-2">
          <input
            type="text"
            placeholder="Search Shows"
            value={input}
            onChange={(event) => handleChange(event)}
            className="input input-bordered input-primary w-full max-w-xs h-8 "
          />
          <button
            className="btn btn-sm text-xs text-black h-4 bg-blue-300 border-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Homepage;
