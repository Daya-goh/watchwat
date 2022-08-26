import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Moment from "moment";

const DetailsPage = () => {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://api.watchmode.com/v1/title/${id}/details/?apiKey=kNWi3tZZezuOie6laejFBpvlyeFcEcTtlxr9WRND`
      );

      const data = await response.json();
      console.log(data);
      setShowDetails(data);
    };
    fetchDetails();
  }, []);

  return (
    <div className="flex flex-row">
      <div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <a href={showDetails.trailer}>
              <img src={showDetails.backdrop} />
            </a>
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl">{showDetails.title}</h2>
            <p>Rating: {showDetails.user_rating}</p>
            <p>{showDetails.genre_names}</p>
            <p>
              Release date:{" "}
              {Moment(showDetails.release_date).format("DD-MM-YYYY")}
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">+</button>
              <button className="btn btn-primary">♥️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
