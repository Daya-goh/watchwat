import { useNavigate } from "react-router-dom";
import comedyData from "../Data/ComedyData";
const ComedyCarousel = () => {
  let x = 0;

  const navigateShowDetail = useNavigate();
  const handleAnimeClick = (id) => {
    console.log("click");
    console.log(id);
    navigateShowDetail(`/detailspage/${id}`);
  };
  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl">
        <h3>Anime</h3>
      </div>
      <div className="flex flex-row items-center">
        <a href={`#slideC${x}`} className="btn btn-circle  border-none">
          ❮
        </a>
        <div className="carousel max-w-4xl p-4 space-x-8 bg-neutral-200 rounded-box">
          {comedyData.map((item, index) => (
            <div
              key={`slide${index}`}
              id={`slideC${index}`}
              className="carousel-item transition ease-in-out hover:scale-110"
            >
              <img
                src={item.poster}
                className="rounded-box "
                onClick={() => handleAnimeClick(item.imdb_id)}
              />
            </div>
          ))}
        </div>
        {/* try changing to Link */}
        <a href={`#slideC${x + 6}`} className="btn btn-circle  border-none">
          ❯
        </a>
      </div>
    </div>
  );
};
export default ComedyCarousel;
