const Fetch = () => {
  const codeArray = [];
  const networkUrl =
    "https://api.watchmode.com/v1/list-titles/?apiKey=Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F&network_ids=511";

  const array = fetch(networkUrl)
    .then((response) => response.json())
    .then((data) => {
      for (const title of data.titles) {
        codeArray.push(title.tmdb_id);
      }
    });
  //   console.log(data.titles[0].tmdb_id);
  console.log("-------------------");
  console.log(codeArray);
  return (
    <div>
      <h1>test</h1>
    </div>
  );
};

export default Fetch;
