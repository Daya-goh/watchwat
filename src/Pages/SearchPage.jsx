const SearchPage = ({ searchResults }) => {
  console.log(searchResults);
  return (
    <div>
      <h1>Your Search Results</h1>
      <div className="flex flex-row flex-wrap gap-2">
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
              {/* <LikeButton
                  showDetails={show}
                  favArray={favArray}
                  setFavArray={setFavArray}
                /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
