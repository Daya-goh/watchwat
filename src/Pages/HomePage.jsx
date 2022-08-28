import { useState } from "react";
import Carousel from "../Components/Carousel";
import SiteTitle from "../Components/SiteTitle";

const Homepage = () => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    console.log(input);
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
