import { useNavigate } from "react-router-dom";
import animeData from "../Data/AnimeData";
const AnimeCarousel = () => {
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
        <a href={`#slideA${x}`} className="btn btn-circle  border-none">
          ❮
        </a>
        <div className="carousel max-w-4xl p-4 space-x-8 bg-neutral-200 rounded-box">
          {animeData.map((item, index) => (
            <div
              key={`slide${index}`}
              id={`slideA${index}`}
              className="carousel-item transition ease-in-out hover:scale-110"
            >
              <img
                src={item.poster}
                className="rounded-box w-16 md:w-28 lg:w-36"
                onClick={() => handleAnimeClick(item.imdb_id)}
              />
            </div>
          ))}
        </div>
        {/* try changing to Link */}
        <a href={`#slideA${x + 6}`} className="btn btn-circle  border-none">
          ❯
        </a>
      </div>
    </div>
  );
};
export default AnimeCarousel;
