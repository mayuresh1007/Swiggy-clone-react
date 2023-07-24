import RestraurantCard from "./RestaurantCard";
// import { restraurantList } from "../config";

import { useEffect, useState } from "react"; // named import from react library
import Shimmerui from "./ShimmerUI";

function filterData(searchText, allrestrolist) {
  const FData = allrestrolist.filter((restro) =>
    restro?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return FData;
}

const AppBody = () => {
  //SearchText is a local state variable
  // const searchtext ;
  const [searchText, setSearchText] = useState(""); // to create the local state variable // [variable name , function to update the variable]
  // useStae returns the array
  // search functionality
  const [allrestrolist, setAllRestroList] = useState([]);
  const [Filteredrestrolist, setFilteredrestrolist] = useState([]);

  // toggle example
  // const [toggle, setToggle] = useState("Toggle Me");
  // console.log("render()")

  // UseEffect hook -  to avaiding the rerender at every api call and then update the props / state
  // empty dependancy array then called => once after render called
  //dep array [searchText] => once afetr initial render + everytime after (my search text changes)

  useEffect(() => {
    console.log("UseEffect");
    // API call
    getData();
    console.log("getdata");
  }, []);

  // async function for fetch data

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestroList(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredrestrolist(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(restrolist)
  }
  console.log("render");

  //Early return not render component
  if (!allrestrolist) return null;

  // when filetr is not found
  // if (Filteredrestrolist?.length === 0) return <h3>Not Found by filter!!!</h3>;
  
  return allrestrolist?.length === 0 ? (
    // return restrolist.length === 0 ? (
    <>
        <Shimmerui />
    </>
  ) : (
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
              const data = filterData(searchText, allrestrolist);
              setFilteredrestrolist(data);
            }
          }
        >
          Search
        </button>
      </div>
      <div className="container">
        <div className="restro-list">
          {Filteredrestrolist?.length === 0 ? (
            <h3>Not Found by filter!!!</h3>
          ) : (
            Filteredrestrolist.map((restro) => {
              return <RestraurantCard {...restro} key={restro?.data?.id} />;
            })
          )}
          {/* {RestraurantCard(restraurantList[0])} method 1 same the functions passing the arguments */}
          {/* <RestraurantCard restraurant={restraurantList[0]} /> method 2 <RestraurantCard restraurant={restraurantList[1]} />
          <RestraurantCard restraurant={restraurantList[2]} />*/}
          {/* <RestraurantCard {...restraurantList[0]} />
          <RestraurantCard {...restraurantList[1]} />
          <RestraurantCard {...restraurantList[2]} /> */}
        </div>
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
