import { useEffect, useState } from "react";

const Fetch = () => {
  const [show, setShow] = useState([]);

  let codeArray = [];
  const networkUrl =
    "https://api.watchmode.com/v1/list-titles/?apiKey=kNWi3tZZezuOie6laejFBpvlyeFcEcTtlxr9WRND&network_ids=511";

  useEffect(() => {
    const fetchID = async () => {
      codeArray = await fetch(networkUrl)
        .then((response) => response.json())
        .then((data) => {
          const showCodes = data?.titles?.map((id) => id.imdb_id);
          const show2 = showCodes.slice(0, 4);
          return show2;
        });
      console.log(codeArray);

      const array = await Promise.all(
        codeArray.map((code) =>
          fetch(
            `https://api.watchmode.com/v1/title/${code}/details/?apiKey=kNWi3tZZezuOie6laejFBpvlyeFcEcTtlxr9WRND`
          )
            .then((response) => response.json())
            .then((data) => data)
        )
      );
      console.log(array);
      setShow([...show, ...array]);
    };
    fetchID();
  }, []);

  /* ------------------------------------------------------ */

  return (
    <div>
      <h1>Testing</h1>
      {show.map((detail) => (
        <>
          <h1>{detail.title}</h1>
          <img src={detail.poster} alt="poster" />
        </>
      ))}
    </div>
  );
};

export default Fetch;
