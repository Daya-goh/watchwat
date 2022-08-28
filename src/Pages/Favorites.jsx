import LikeButton from "../Components/LikeButton";

const Favorites = ({ favArray, setFavArray }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl underline">Watch-Favorites</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {favArray.map((show) => (
          <div
            key={show.id}
            className="card flex flex-col items-center gap-2 shadow-2xl w-50"
          >
            <img
              src={show.poster}
              alt={`${show.title} poster`}
              className="object-fill w-40 h-60"
            />
            <div className="card-actions mb-2">
              <button className="btn btn-primary">+</button>
              <LikeButton
                showDetails={show}
                favArray={favArray}
                setFavArray={setFavArray}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Favorites;
