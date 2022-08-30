const AddButton = ({ showDetails, addShow, setAddShow }) => {
  const handleAdd = (show) => {
    storeWatchList(show);
    console.log(addShow);
    const shows = {
      shows: addShow,
      hi: "hello",
    };
    const shows1 = JSON.stringify(addShow);
    localStorage.setItem("shows", JSON.stringify(shows1));
    console.log(JSON.stringify(shows));
  };

  const storeWatchList = (show) => {
    if (!addShow?.find((showId) => show.id === showId.id)) {
      setAddShow([...addShow, show]);
    } else {
      setAddShow(addShow?.filter((showId) => show.id !== showId.id));
    }
  };

  const addStatus = addShow?.find((showId) => showDetails.id === showId?.id)
    ? "#A7C7E7"
    : "";

  const added = addStatus ? "✔️" : " + ";

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: addStatus, border: addStatus }}
        onClick={() => handleAdd(showDetails)}
      >
        {added}
      </button>
    </div>
  );
};

export default AddButton;
