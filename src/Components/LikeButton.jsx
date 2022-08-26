const LikeButton = ({ showDetails, favArray, setFavArray }) => {
  const handleLike = () => {
    console.log("like!");
    storeFavShow(showDetails);

    console.log(favArray);
  };

  const storeFavShow = (showDetails) => {
    if (!favArray.find((showId) => showId.id === showDetails.id)) {
      setFavArray([...favArray, showDetails]);
    } else {
      setFavArray(favArray.filter((showId) => showId.id !== showDetails.id));
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleLike}>
        ♥️
      </button>
    </div>
  );
};
export default LikeButton;
