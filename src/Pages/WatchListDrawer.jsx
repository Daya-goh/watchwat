import { useNavigate } from "react-router-dom";

const WatchList = ({ addShow }) => {
  console.log(addShow);
  const navigateVideo = useNavigate();
  const handleClick = (id) => {
    console.log(id);
    navigateVideo(`/trailers/${id}`);
  };

  return (
    <ul className="flex flex-col gap-2 items-center">
      <h3>Watch List</h3>
      {addShow.map((show) => (
        <div
          key={show.id}
          className="flex flex-row gap-4 items-center card bg-base-100 shadow-xl w-full"
        >
          <div className="avatar">
            <div className="w-20 rounded-xl w-20">
              <img
                src={show.poster || show.image_url}
                onClick={() => handleClick(show.id)}
              />
            </div>
          </div>
          <p>{show.title || show.name}</p>
        </div>
      ))}
    </ul>
  );
};
export default WatchList;
