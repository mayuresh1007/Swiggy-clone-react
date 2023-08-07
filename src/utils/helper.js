export function filterData(searchText, Filteredrestrolist) {
  console.log(searchText)
    const FData = Filteredrestrolist?.filter((restro) => {
      // console.log(restro)
      const name = restro?.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    // console.log("called filterdata",searchText)
    console.log("called FData",FData)
    return FData
  }