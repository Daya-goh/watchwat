import { useParams } from "react-router-dom";

const LikeButton = ({ showDetails, favArray, setFavArray }) => {
  const { showId } = useParams();
  const id = showId ? showId : showDetails.imdb_id;

  const handleLike = (id) => {
    storeFavShow(id);
  };

  const storeFavShow = (id) => {
    if (
      !favArray.find(
        (showId) => id.id === showId.imdb_id || id.id === showId.tmdb_id
      )
    ) {
      setFavArray([...favArray, showDetails]);
    } else {
      setFavArray(
        favArray.filter(
          (showId) => id.id !== showId.imdb_id || id.id !== showId.tmdb_id
        )
      );
    }
  };

  const status = favArray?.find((showId) => showId.id === showDetails?.id)
    ? "pink"
    : " ";

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: status, border: status }}
        onClick={() => handleLike({ id })}
      >
        ♥️
      </button>
    </div>
  );
};
export default LikeButton;
