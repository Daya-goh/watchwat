import { useParams } from "react-router-dom";

const LikeButton = ({ showDetails, favArray, setFavArray }) => {
  const { showId } = useParams();
  const id = showId ? showId : showDetails.id;

  const handleLike = (id) => {
    storeFavShow(id);
  };

  const storeFavShow = (id) => {
    if (!favArray.find((showId) => id.id === showId.id)) {
      setFavArray([...favArray, showDetails]);
    } else {
      setFavArray(favArray.filter((showId) => id.id !== showId.id));
    }
  };

  const likeStatus = favArray?.find((showId) => showId.id === showDetails?.id)
    ? "pink"
    : " ";

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: likeStatus, border: likeStatus }}
        onClick={() => handleLike({ id })}
      >
        ♥️
      </button>
    </div>
  );
};
export default LikeButton;
