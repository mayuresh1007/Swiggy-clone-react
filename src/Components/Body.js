import RestraurantCard from "./RestaurantCard";
import { RestaurantList_URLv2 } from "../config";

import { useEffect, useState } from "react"; // named import from react library
import Shimmerui from "./ShimmerUI";
import { Link } from "react-router-dom";
import withNetworkCheck from "../utils/withNetworkCheck"; // network error
import { filterData } from "../utils/helper";
import NoSearchFound from "./NotFoundSearch";
import useSearch from "../utils/useSearch";

const AppBody = () => {
  //SearchText is a local state variable
  // const searchtext ;
  // const [searchText, setSearchText] = useState(""); // to create the local state variable // [variable name , function to update the variable]
  // useState returns the array
  // search functionality
  const [allrestrolist, setAllRestroList] = useState([]);
  const [Filteredrestrolist, setFilteredrestrolist] = useState([]);
  const { searchText, handleSearch, filteredData } = useSearch(allrestrolist);
  // UseEffect hook -  to avaiding the rerender at every api call and then update the props / state
  // empty dependancy array then called => once after render called
  //dep array [searchText] => once afetr initial render + everytime after (my search text changes)

  useEffect(() => {
    // console.log("UseEffect");
    // API call
    // getData();
    fetchAndUseData();
    // console.log("getdata");
  }, []);

  // async function for fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(RestaurantList_URLv2);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      // Process the data or return it as needed
      return data;
    } catch (error) {
      // Handle errors here, such as logging or displaying an error message
      console.error("Error fetching data:", error);
      // You might return a default value or an empty array/object in case of an error
      return [];
    }
  };
  // Call the fetchData function and use the data when it's available
  const fetchAndUseData = async () => {
    try {
      const data = await fetchData();
      // Use the fetched data here, for example, update the state with it
      // setState(data) or do something else
      console.log("Fetched data:", data);
      setAllRestroList(
        data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredrestrolist(
        data.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      // Handle errors here, such as logging or displaying an error message
      console.error("Error in fetchAndUseData:", error);
    }
  };

  // async function getData() {
  //   const data = await fetch(RestaurantList_URLv2).then()
  //   const json = await data.json();
  //   setAllRestroList(
  //     json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredrestrolist(
  //     json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // console.log("allrestrolist",allrestrolist)
  // }

  // HandleSearch
  // function handleSearch() {
  //   console.log(searchText);
  //   const filteredData = filterData(searchText, allrestrolist);
  //   console.log("filteredData", filteredData);
  //   setFilteredrestrolist(filteredData);
  //   console.log(Filteredrestrolist);
  // }

  // console.log("render");

  //Early return not render component
  if (!allrestrolist) return null;

  return allrestrolist?.length === 0 ? (
    // return restrolist.length === 0 ? (
    <>
      <Shimmerui />
    </>
  ) : (
    <>
      <div className="flex m-4 justify-center">
        <input
          placeholder="search"
          type="text"
          className="focus:bg-slate-100 p-1 mr-2"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="bg-logocolor p-2 rounded-lg hover:bg-pink-500 text-white"
          onClick={() => handleSearch(searchText)}
        >
          Search
        </button>
      </div>
      <div className="flex ">
        <div className="flex flex-wrap justify-center">
          {Filteredrestrolist?.length === 0 ? (
            <NoSearchFound />
          ) : (
            Filteredrestrolist?.map((restro) => {
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
