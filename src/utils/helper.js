export function filterData(searchText, allrestrolist) {
    const FData = allrestrolist.filter((restro) => {
      const name = restro.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    return FData;
  }