import Fetch from "../Test/Fetch";
import dataKorean from "../Components/Data";
import Carousel from "../Components/Carousel";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Search Shows"
          className="input input-bordered input-primary w-full max-w-xs h-8 "
        />
        <button className="btn btn-sm text-xs text-black h-4 bg-blue-300 border-blue-800">
          Submit
        </button>
      </div>
      <Carousel />
    </div>
  );
};

export default Homepage;
