import LikeButton from "../Components/LikeButton";

const Favorites = ({ favArray, showDetails, setFavArray }) => {
  console.log(favArray);

  return (
    <div>
      <h1>Favorites</h1>
      <div className="flex flex-row flex-wrap gap-2">
        {favArray.map((show, index) => (
          <div
            className=" card flex flex-col items-center gap-2 shadow-2xl w-50"
            key={index}
          >
            <img
              src={show.poster}
              alt={`${show.title} poster`}
              className="object-fill w-40 h-60"
            />
            <div className="card-actions mb-2">
              <button className="btn btn-primary">+</button>
              <LikeButton
                showDetails={showDetails}
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
