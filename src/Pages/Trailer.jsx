import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Trailer = ({ setShowDetails, showDetails }) => {
  const { id } = useParams();
  console.log(id);
  const fetchShowDetailsUrl = `https://api.watchmode.com/v1/title/${id}/details/?apiKey=RHHugJR1qM9DGvMQ7id18NmO42spStnIziU6vwr2`;
  const [showUrl, setShowUrl] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(fetchShowDetailsUrl);

      const data = await response.json();
      setShowDetails(data);
      console.log(data);
    };
    fetchDetails();
  }, []);

  const playVideo = () => {
    //assign url to variable
    const str = showDetails?.trailer;
    //split string
    const res = str?.split("=");
    //www.youtube.com/embed
    const EditedUrl = "https://www.youtube.com/embed/" + res[1];
    console.log(EditedUrl);
    return EditedUrl;
    //take second part of string
    //merge
    //update state -> to set state for this info
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-4xl">{showDetails.title}</h1>
      <iframe
        width="800"
        height="500"
        src={playVideo()}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Trailer;
