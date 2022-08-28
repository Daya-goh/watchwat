import { useNavigate } from "react-router-dom";
import dataKorean from "./Data";
const Carousel = () => {
  let x = 5; //for scrolling the carousel

  const navigateShowDetail = useNavigate();

  const handleClick = (id) => {
    console.log("click");
    console.log(id);
    navigateShowDetail(`/detailspage/${id}`);
  };

  return (
    <div>
      <h3>Korean</h3>
      <div className="flex flex-row items-center">
        <a
          href={`#slide${x - 5}`}
          className="btn btn-circle bg-blue-200 hover:bg-blue-400 border-none"
        >
          ❮
        </a>
        <div className="carousel carousel-center max-w-4xl p-4 space-x-8 bg-neutral-200 rounded-box">
          {dataKorean.map((item, index) => (
            <div
              key={`slide${index}`}
              id={`slide${index}`}
              className="carousel-item"
            >
              <img
                src={item.poster}
                className="rounded-box "
                onClick={() => handleClick(item.imdb_id)}
              />
            </div>
          ))}
        </div>
        {/* try changing to Link */}
        <a
          href={`#slide${x + 5}`}
          className="btn btn-circle bg-blue-200 hover:bg-blue-400 border-none"
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;