const LikeButton = ({ showDetails, favArray, setFavArray }) => {
  const handleLike = (id) => {
    console.log("like!");
    storeFavShow();
    console.log(showDetails.id);
  };

  const storeFavShow = () => {
    if (!favArray.find((showId) => showId.id === showDetails.id)) {
      setFavArray([...favArray, showDetails]);
    } else {
      setFavArray(favArray.filter((showId) => showId.id !== showDetails.id));
    }
  };

  const status = favArray?.find((showId) => showId.id === showDetails?.id)
    ? "pink"
    : " ";
  console.log(`this ${status}`);
  console.log(favArray);

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: status, border: status }}
        onClick={handleLike}
      >
        ♥️
      </button>
    </div>
  );
};
// export default LikeButton;

{
  /* <button
            data-toggle-theme="dracula"
            data-act-class="pl-4"
            className="btn btn-primary h-4 w-4"
          >
            {" "}
            💡
          </button> */
}
