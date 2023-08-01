import {useState,useEffect} from 'react'
import { RestaurantList_URLv2 } from '../config';
import { filterData } from './helper';

const useRestaurantCard = (searchText) => {
   //SearchText is a local state variable
  
  // useStae returns the array
  // search functionality
  const [allrestrolist, setAllRestroList] = useState([]);
  const [Filteredrestrolist, setFilteredrestrolist] = useState([]);

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

  return [allrestrolist,Filteredrestrolist]
}

export default useRestaurantCard