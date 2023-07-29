import { Menu_List } from "../config";
import {useState,useEffect} from 'react'
const useRestaurantMenu = (id) => {
  // getting the data from api in useEffect
  const [menulist, setMenuList] = useState(null);
  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const data = await fetch(
      `${Menu_List}${id}`
    );
    const json = await data.json();
    setMenuList(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  }
  // return
  return menulist;
};

export default useRestaurantMenu;
