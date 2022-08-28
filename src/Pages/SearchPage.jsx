import LikeButton from "../Components/LikeButton";
const SearchPage = ({ searchResults, favArray, setFavArray }) => {
  console.log(searchResults);
  return (
    <div className="flex flex-col items-center gap-8">
      <div>
        <h1 className="font-bold text-3xl ">Your Search Results</h1>
      </div>
      {searchResults ? (
        <div className="flex flex-row flex-wrap gap-4 w-200 justify-center">
          {searchResults?.map((item) => (
            <div
              key={item.id}
              className="card flex flex-col items-center gap-2 shadow-2xl w-50"
            >
              <img
                src={item.image_url}
                alt={`${item.name} poster`}
                className="object-fill w-40 h-60"
              />
              <div className="card-actions mb-2">
                <button className="btn btn-primary">+</button>
                <LikeButton
                  showDetails={item}
                  favArray={favArray}
                  setFavArray={setFavArray}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default SearchPage;
