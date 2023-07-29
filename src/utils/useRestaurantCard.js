import {useState,useEffect} from 'react'
import { RestaurantList_URLv2 } from '../config';

const useRestaurantCard = () => {
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
    const data = await fetch(RestaurantList_URLv2);
    const json = await data.json();
    // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    // setAllRestroList(json?.data?.cards[2]?.data?.data?.cards);
    // // setFilteredrestrolist(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestroList(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestrolist(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log("allrestrolist",allrestrolist)
  }

  return allrestrolist,Filteredrestrolist ,searchText
}

export default useRestaurantCard