import RestraurantCard from "./RestaurantCard";
import { RestaurantList_URL, RestaurantList_URLv2 } from "../config";

import { useEffect, useState } from "react"; // named import from react library
import Shimmerui from "./ShimmerUI";
import { Link } from "react-router-dom";
import withNetworkCheck from "../utils/withNetworkCheck"; // network error
import { filterData } from "../utils/helper";

const AppBody = () => {
  //SearchText is a local state variable
  // const searchtext ;
  const [searchText, setSearchText] = useState(""); // to create the local state variable // [variable name , function to update the variable]
  // useStae returns the array
  // search functionality
  const [allrestrolist, setAllRestroList] = useState([]);
  const [Filteredrestrolist, setFilteredrestrolist] = useState([]);

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
    const data = await fetch(RestaurantList_URLv2);
    const json = await data.json();
    setAllRestroList(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestrolist(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("allrestrolist",allrestrolist)
  }

  // HandleSearch
  function handleSearch() {
    console.log(searchText);
    const filteredData = filterData(searchText, allrestrolist);
    console.log("filteredData", filteredData);
    setFilteredrestrolist(filteredData);
    console.log(Filteredrestrolist);
  }

  console.log("render");

  //Early return not render component
  if (!allrestrolist) return null;

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
            const word = e.target.value; // what ever writing in input
            // console.log(word);
            setSearchText(word);
          }}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="container">
        <div className="restro-list">
          {console.log(Filteredrestrolist)}
          {Filteredrestrolist?.length === 0 ? (
            <>
              <h3>Not Found by filter!!!</h3>
              <Link to="/">
                <button className="btn">Back</button>
              </Link>
            </>
          ) : (
            Filteredrestrolist.map((restro) => {
              // console.log(restro);
              // const{cloudinaryImageId}=restro.info
              return (
                <Link
                  to={"/restro/" + restro?.info?.id}
                  key={restro?.info?.id}
                  className="link"
                >
                  <RestraurantCard {...restro?.info} />
                </Link>
              );
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
    </>
  );
};

// export default AppBody;
export default withNetworkCheck(AppBody); // for network error
