import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RestaurantList_URL, Menu_List } from "../config";
import Shimmerui from "./ShimmerUI";

const RestraurantMenu = (props) => {
  // how to make read dynamic URL params
  const params = useParams();
  // console.log(params);
  // console.log(props);
  const { id, name } = params;

  const [menulist, setMenuList] = useState();

  // console.log(res)
  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    // console.log(id);
    const data = await fetch(
      // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      `${Menu_List}${id}`
    );
    const json = await data.json();
    // console.log(json)
    console.log(json);
    setMenuList(
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
  }
  if (!menulist) return null;
  return menulist?.length === 0 ? (
    <>
      <Shimmerui />
    </>
  ) : (
    <>
      <h1 className="restro-list"> !! Menu Card !!</h1>
      <div className="restro-list">
        {menulist?.map((item) => {
          // console.log(item);
          // console.log(item.card.info);
          return (
            <div key={item.card.info.id} className="card ">
              <img
                src={IMG_CDN_URL + item?.card.info?.imageId}
                alt={item?.card.info?.name}
              />
              <hr />
              <p>{item?.card?.info?.name} </p>
              <p>{item?.card?.info?.price / 100} &#8377; </p>
              {/* <p>{item?.card?.info?.finalPrice} &#8377;</p> */}
              <button disabled className="btn">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestraurantMenu;
