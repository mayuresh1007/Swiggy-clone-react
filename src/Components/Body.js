import RestraurantCard from "./RestaurantCard";
import { restraurantList } from "./config";

import { useState } from "react"; // named import from react library

function filterData(searchText, restrolist) {
  const FilertData = restrolist.filter((restro) =>
    restro.name.includes(searchText)
  );
  return FilertData;
}

const AppBody = () => {
  //SearchText is a local state variable
  // const searchtext ;
  const [searchText, setSearchText] = useState(""); // to create the local state variable // [variable name , function to update the variable]
  // useStae returns the array

  // search functionality
  const [restrolist, setRestroList] = useState(restraurantList);

  // toggle example
  // const [toggle, setToggle] = useState("Toggle Me");

  return (
    <>
      <div className="search-container">
        <input
          placeholder="search"
          type="text"
          className="search-input"
          value={searchText}
          // onChange={(e) => console.log( e.target.value )}
          onChange={(e) => {
            // e.target.value // what ever writing in input
            setSearchText(e.target.value);
          }}
        />
        <button
          className="btn"
          onClick={
            // fetch the data and filter it
            // update the data
            () => {
              const data = filterData(searchText, restrolist);
              setRestroList(data);
            }
          }
        >
          Search
        </button>
      </div>
      <div className="restro-list">
        {/* {RestraurantCard(restraurantList[0])} method 1 same the functions passing the arguments */}
        {/* <RestraurantCard restraurant={restraurantList[0]} /> method 2 <RestraurantCard restraurant={restraurantList[1]} />
        <RestraurantCard restraurant={restraurantList[2]} />*/}
        {/* <RestraurantCard {...restraurantList[0]} />
        <RestraurantCard {...restraurantList[1]} />
        <RestraurantCard {...restraurantList[2]} /> */}
        {restrolist.map((restro) => {
          return <RestraurantCard {...restro} key={restro.id} />;
        })}
        {/* {restraurantList.map((restro) => {
          return <RestraurantCard {...restro} key={restro.id} />;
        })} */}
      </div>
      {/* <h1
        onClick={() => {
          if (toggle === "Toggle Me") {
            setToggle("yes");
          } else {
            setToggle("Toggle Me");
          }
        }}
      >
        {toggle}
      </h1> */}
    </>
  );
};

export default AppBody;
