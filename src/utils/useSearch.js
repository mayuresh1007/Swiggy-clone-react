import { useEffect, useState } from "react";
import { filterData } from "../utils/helper";

const useSearch = (initialData) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    const filteredData = filterData(searchText, initialData);
    setFilteredData(filteredData);
  }, [searchText, initialData]);

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };
// function handleSearch(searchText) {
//     console.log(searchText);
//     const filteredData = filterData(searchText, initialData);
//     console.log("filteredData", filteredData);
//     setFilteredrestrolist(filteredData);
//     console.log(Filteredrestrolist);
//   }
  return { searchText, handleSearch, filteredData };
};

export default useSearch;
