const WatchList = ({ addShow }) => {
  console.log(addShow);
  return (
    <ul className="flex flex-col gap-2 items-center">
      <h3>Watch List</h3>
      {addShow.map((show) => (
        <div
          key={show.id}
          className="flex flex-row gap-4 items-center card w-50 bg-base-100 shadow-xl"
        >
          <div className="avatar">
            <div className="w-20 rounded-xl">
              <a href={addShow.trailer} target="_blank">
                <img src={show.poster || show.image_url} />
              </a>
            </div>
          </div>
          <p>{show.title || show.name}</p>
        </div>
      ))}
    </ul>
  );
};
export default WatchList;
