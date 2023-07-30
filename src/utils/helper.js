export function filterData(searchText, allrestrolist) {
  console.log(searchText)
    const FData = allrestrolist.filter((restro) => {
      console.log(restro)
      const name = restro.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log("called filterdata",searchText)
    console.log("called FData",FData)
    return FData
  }