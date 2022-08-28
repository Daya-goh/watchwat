import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";
import LikeButton from "../Components/LikeButton";

const DetailsPage = ({
  favArray,
  setFavArray,
  showDetails,
  setShowDetails,
}) => {
  const { id } = useParams();

  const fetchDetailsUrl = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=kNWi3tZZezuOie6laejFBpvlyeFcEcTtlxr9WRND`;
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(fetchDetailsUrl);

      const data = await response.json();
      setShowDetails(data);
    };
    fetchDetails();
  }, []);
  /* ------------------------------------------------------ */
  return (
    <div className="flex flex-row">
      <div>
        {/* image */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <a href={showDetails.trailer} target="_blank">
              <img src={showDetails.backdrop} />
            </a>
          </figure>
          {/* text body */}
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{showDetails.title}</h2>
            <p>Rating: {showDetails.user_rating}</p>
            <p>{showDetails.genre_names}</p>
            <p>
              Release date:{" "}
              {Moment(showDetails.release_date).format("DD-MM-YYYY")}
            </p>
            {/* buttons */}
            <div className="card-actions">
              <button className="btn btn-primary">+</button>
              {/* <button className="btn btn-primary">♥️</button> */}
              <LikeButton
                showDetails={showDetails}
                favArray={favArray}
                setFavArray={setFavArray}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
