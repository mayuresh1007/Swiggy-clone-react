import { useEffect, useState } from "react";
// import { filterData } from "../utils/helper";

const useSearch = (initialData) => {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    filtered();
  }, [searchText, initialData]);

  const filtered = (searchText, filteredData) => {
    // console.log("searchText step -3", searchText);
    // console.log("initialData step -3", initialData);
    const FData = filteredData?.filter((restro) => {
      return (
        filteredData &&
        restro &&
        restro.info.name &&
        restro?.info?.name.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setFilteredData(FData);
    console.log("step 5->", filteredData);
    console.log("step 7->", FData);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
    // console.log("step 1", searchText);
    filtered(searchText, initialData);
  };

  return { searchText, handleSearch, filteredData };
};

export default useSearch;

// useEffect(() => {
//   // console.log("mayu 4->", initialData);
//   // const filteredData = filterData(searchText, initialData);
//   filtered();
//   //  handleSearch();
//   //  console.log("step 2->");
//   // const filteredData = (searchText, Filteredrestrolist) => {
//   //   console.log(searchText);
//   //   const FData = Filteredrestrolist?.filter((restro) => {
//   //     // console.log(restro)
//   //     const name = restro?.info.name
//   //       .toLowerCase()
//   //       .includes(searchText.toLowerCase());
//   //   });
//   //   // console.log("called filterdata",searchText)
//   //   console.log("called FData", FData);
//   //   // return FData
//   //   setFilteredData(filteredData);
//   //
//   // };
//   // }, [searchText, initialData]);
// }, []);
