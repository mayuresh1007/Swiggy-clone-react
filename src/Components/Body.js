import RestraurantCard from "./RestaurantCard";
import { RestaurantList_URLv2 } from "../config";

import { useEffect, useState } from "react"; // named import from react library
import Shimmerui from "./ShimmerUI";
import { Link } from "react-router-dom";
import withNetworkCheck from "../utils/withNetworkCheck"; // network error
// import { filterData } from "../utils/helper";
import NoSearchFound from "./NotFoundSearch";
import useSearch from "../utils/useSearch";
import AllRestaurantsCard from "./AllRestaurantsCard";

const AppBody = () => {
  //SearchText is a local state variable
  // const searchtext ;
  // const [searchText, setSearchText] = useState(""); // to create the local state variable // [variable name , function to update the variable]
  // useState returns the array
  // search functionality
  const [allrestrolist, setAllRestroList] = useState([]);
  const [Filteredrestrolist, setFilteredrestrolist] = useState([]);
  const { searchText, handleSearch, filteredData } = useSearch(Filteredrestrolist);
  console.log(filteredData);
  console.log(Filteredrestrolist);
  // UseEffect hook -  to avaiding the rerender at every api call and then update the props / state
  // empty dependancy array then called => once after render called
  //dep array [searchText] => once afetr initial render + everytime after (my search text changes)

  useEffect(() => {
    fetchData();
  }, []);

  // async function for fetch data
  const fetchData = async () => {
    try {
      const response = await fetch(RestaurantList_URLv2);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      // console.log("Fetched data:", data);
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
      console.error("Error fetching data:", error);
      // You might return a default value or an empty array/object in case of an error
      return [];
    }
  };
  // function handleSearchList() {
  //   console.log("called the function ");
  //   setFilteredrestrolist(filteredData);
  //   console.log("called the function -->", Filteredrestrolist);
  // }
  //Early return not render component
  if (!allrestrolist) return null;

  return allrestrolist?.length === 0 ? (
    <>
      <Shimmerui />
    </>
  ) : (
    <>
      <div className="flex m-4 justify-center">
        <input
          placeholder="Search a restaurant..."
          type="text"
          className="focus:bg-slate-100 p-1 mr-2 border-2 rounded-md"
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="bg-logocolor p-2 rounded-lg hover:bg-pink-500 text-white"
          // onClick={() => handleSearchList()}
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
            <AllRestaurantsCard allrestrolist={Filteredrestrolist} />
            // Filteredrestrolist?.map((restro) => {
            //   return (
            //     <Link
            //       to={"/restro/" + restro?.info?.id}
            //       key={restro?.info?.id}
            //       className="link"
            //     >
            //       <RestraurantCard {...restro?.info} />
            //     </Link>
            //   );
            // })
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
