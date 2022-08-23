import { useState } from "react";

const Fetch = () => {
  const codeArray = [];
  const networkUrl =
    "https://api.watchmode.com/v1/list-titles/?apiKey=Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F&network_ids=511";

  fetch(networkUrl)
    .then((response) => response.json())
    .then((data) => {
      for (const title of data.titles) {
        codeArray.push(title.tmdb_id);
      }
    });
  /* -------------------------------------------------- */
  const [image, setImage] = useState({});
  const titleUrl =
    "https://api.watchmode.com/v1/title/3186566/details/?apiKey=Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F&title_id=3186566";

  fetch(titleUrl)
    .then((response) => response.json())
    .then((data) => {
      setImage(data.poster);
    });

  /* ------------------------------------------------------ */
  const [show, setShow] = useState({});

  const handleClick = () => {
    fetch(titleUrl)
      .then((response) => response.json())
      .then((data) => {
        setShow(data);
      });
  };

  return (
    <div>
      <h1>test</h1>
      <h1>{show.title}</h1>
      <img src={image} alt="extraordinary woo" />
      <button onClick={handleClick}> click</button>
    </div>
  );
};

export default Fetch;
