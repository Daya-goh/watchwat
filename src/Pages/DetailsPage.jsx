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
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure class="px-10 pt-10">
            <img src={showDetails.backdrop} />
            {/* <div>
              <iframe
                src={showDetails.trailer_thumbnail}
                frameborder="0"
                width="335"
                height="200"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />{" "}
            </div> */}
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl">{showDetails.title}</h2>
            <p>Rating: {showDetails.user_rating}</p>
            <p>{showDetails.genre_names}</p>
            <p>
              Release date:{" "}
              {Moment(showDetails.release_date).format("DD-MM-YYYY")}
            </p>
            <div class="card-actions">
              <button class="btn btn-primary">+</button>
              <button class="btn btn-primary">♥️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
