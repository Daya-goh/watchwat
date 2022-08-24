import Fetch from "../Test/Fetch";
import data from "../Components/Data";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-row gap-2">
        <input
          type="text"
          placeholder="Search Shows"
          class="input input-bordered input-primary w-full max-w-xs h-8 "
        />
        <button class="btn btn-sm text-xs h-4 bg-blue-300 border-blue-800">
          Submit
        </button>
      </div>
      <div className="flex flex-row items-center">
        <a href="#slide0" class="btn btn-circle bg-blue-200 border-none">
          ❮
        </a>
        <div class="carousel carousel-center max-w-4xl p-4 space-x-8 bg-neutral-200 rounded-box">
          {data.map((item, index) => (
            <div id={`slide${index}`} class="carousel-item">
              <img src={item.poster} class="rounded-box" />
            </div>
          ))}
        </div>
        <a href="#slide10" class="btn btn-circle bg-blue-200 border-none">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Homepage;
