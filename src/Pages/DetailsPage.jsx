import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Moment from "moment";
import LikeButton from "../Components/LikeButton";
import AddButton from "../Components/AddButton";

const DetailsPage = ({
  favArray,
  setFavArray,
  showDetails,
  setShowDetails,
  addShow,
  setAddShow,
}) => {
  const { id } = useParams();
  const navigateVideo = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigateVideo(`/trailers/${id}`);
  };

  const fetchDetailsUrl = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=RHHugJR1qM9DGvMQ7id18NmO42spStnIziU6vwr2`;

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(fetchDetailsUrl);

      const data = await response.json();
      setShowDetails(data);
      console.log(data);
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
            <img
              src={showDetails.backdrop}
              onClick={() => handleClick(showDetails.id)}
            />
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
            <p>{showDetails.plot_overview}</p>
            {/* buttons */}
            <div className="card-actions">
              {/* <button className="btn btn-primary">+</button> */}
              <AddButton
                showDetails={showDetails}
                addShow={addShow}
                setAddShow={setAddShow}
              />
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
