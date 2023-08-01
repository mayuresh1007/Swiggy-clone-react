import truckload from "../assets/img/truckload.gif";

const Shimmerui = () => {
  return (
    <>
      {/* <div className="spinner">
        <img src={truckload} alt="loading" />
      </div> */}

      <div className="search-container flex items-center ">
        <div className="search-shimmer "></div>
      </div>

      <div className="restro-list flex flex-wrap justify-center">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div className="shimmer" key={index}>
              <p></p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Shimmerui;
