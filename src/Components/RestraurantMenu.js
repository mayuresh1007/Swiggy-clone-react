import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL, RestaurantList_URL, Menu_List } from "../config";
import Shimmerui from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestraurantMenu = (props) => {
  // how to make read dynamic URL params
  const params = useParams();
  // console.log(params);
  // console.log(props);
  const { id } = params;
  const menulist = useRestaurantMenu(id);

  if (!menulist) return null;
  return menulist?.length === 0 ? (
    <>
      <Shimmerui />
    </>
  ) : (
    <>
      <div className="container">
        <h1> !! Menu Card !!</h1>
        <Link to="/">
          <button className="btn">Back</button>
        </Link>
      </div>

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
