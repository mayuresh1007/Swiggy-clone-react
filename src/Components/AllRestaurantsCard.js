import React from 'react'
import { Link } from "react-router-dom";
import RestraurantCard from './RestaurantCard';
import useSearch from '../utils/useSearch';

const AllRestaurantsCard = ({allrestrolist}) => {
    const { searchText, handleSearch, filteredData } = useSearch(allrestrolist)
 
  return (
    allrestrolist?.map((restro) => {
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
  )
}

export default AllRestaurantsCard;