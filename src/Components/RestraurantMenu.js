import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL, RestaurantList_URL, Menu_List } from "../config";
import Shimmerui from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import BackButton from "./BackButton";
const RestraurantMenu = () => {
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
      <div className="flex justify-center items-center mt-5">
        <h1 className="mr-4 text-2xl font-bold text-logocolor"> !! Menu Card !!</h1>
        {/* <Link to="/">
          <button className="btn">Back</button>
        </Link> */}
        <BackButton />
      </div>

      <div className="flex flex-wrap justify-center">
        {menulist?.map((item) => {
          // console.log(item);
          // console.log(item.card.info);
          return (
            <div
              key={item.card.info.id}
              className="card flex flex-col justify-center w-[190px] m-4 shadow-lg "
            >
              <img
                src={IMG_CDN_URL + item?.card.info?.imageId}
                alt={item?.card.info?.name}
              />

              <p className=" font-bold m-1">{item?.card?.info?.name} </p>
              <hr className="w-46 h-0.5 bg-gray-100 md:my-1 dark:bg-slate-300" />
              <p className=" font-normal my-1">
                PRICE :- {item?.card?.info?.price / 100} &#8377;{" "}
              </p>
              {/* <p>{item?.card?.info?.finalPrice} &#8377;</p> */}
              {/* <button
                disabled
                className="bg-logocolor p-2 rounded-lg hover:bg-pink-500 text-white"
              >
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </button> */}
              <button className="outline outline-slate-300 rounded-md cursor-not-allowed">
                <span className="text-amber-500">
                  &#9733; {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "}
                </span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RestraurantMenu;
