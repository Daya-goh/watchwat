import { useLocation, useNavigate } from "react-router-dom";
import dataKorean from "../Data/Data";

const Carousel = () => {
  const navigateShowDetail = useNavigate();
  let location = useLocation();
  console.log(location.hash);

  // const [show, setShow] = useState([]);
  let codeArray = [];
  // const networkUrl =
  //   "https://api.watchmode.com/v1/list-titles/?apiKey=RHHugJR1qM9DGvMQ7id18NmO42spStnIziU6vwr2&network_ids=511";

  // useEffect(() => {
  //   const fetchID = async () => {
  //     codeArray = await fetch(networkUrl)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const showCodes = data?.titles?.map((id) => id.imdb_id);
  //         const show2 = showCodes.slice(0, 5);
  //         return show2;
  //       });

  //     const array = await Promise.all(
  //       codeArray.map((code) =>
  //         fetch(
  //           `https://api.watchmode.com/v1/title/${code}/details/?apiKey=RHHugJR1qM9DGvMQ7id18NmO42spStnIziU6vwr2`
  //         )
  //           .then((response) => response.json())
  //           .then((data) => data)
  //       )
  //     );
  //     setShow([...show, ...array]);
  //   };
  //   fetchID();
  // }, []);

  const handleClick = (id) => {
    console.log("click");
    console.log(id);
    navigateShowDetail(`/detailspage/${id}`);
  };

  return (
    <div className="flex flex-col items-start">
      <div className="text-2xl">
        <h3>Korean</h3>
      </div>
      <div className="flex flex-row items-center">
        <a href="#slide0" className="btn btn-circle  border-none">
          ❮
        </a>

        <div className="carousel max-w-4xl p-4 space-x-8 bg-neutral-200 rounded-box">
          {dataKorean.map((item, index) => (
            <div
              key={`slide${index}`}
              id={`slide${index}`}
              className="carousel-item transition ease-in-out hover:scale-110"
            >
              <img
                src={item.poster}
                className="rounded-box "
                onClick={() => handleClick(item.imdb_id)}
              />
            </div>
          ))}
        </div>
        {/* try changing to Link */}
        <a href="#slide10" className="btn btn-circle  border-none">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Carousel;
