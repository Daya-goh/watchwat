const AddButton = ({ showDetails, addShow, setAddShow }) => {
  const handleAdd = (show) => {
    console.log(show);
    storeWatchList(show);
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
    : " ";

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ backgroundColor: addStatus, border: addStatus }}
        onClick={() => handleAdd(showDetails)}
      >
        +
      </button>
    </div>
  );
};

export default AddButton;
