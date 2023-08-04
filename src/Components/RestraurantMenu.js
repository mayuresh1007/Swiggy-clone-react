import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IMG_CDN_URL, RestaurantList_URL, Menu_List } from "../config";
import Shimmerui from "./ShimmerUI";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import BackButton from "./BackButton";

// redux things
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const RestraurantMenu = () => {
  // how to make read dynamic URL params
  const params = useParams();
  // console.log(params);
  // console.log(props);
  const { id } = params;
  const menulist = useRestaurantMenu(id);

  //redux things
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log(item.card.info);
    dispatch(addItem(item.card.info));
  };
  const handleRemoveItem = (item) => {
    console.log(item.card.info);
    dispatch(removeItem(item.card.info));
  };

  if (!menulist) return null;
  return menulist?.length === 0 ? (
    <>
      <Shimmerui />
    </>
  ) : (
    <>
      <div className="flex justify-center items-center mt-5">
        <h1 className="mr-4 text-2xl font-bold text-logocolor">
          {" "}
          !! Menu Card !!
        </h1>
        {/* <Link to="/">
          <button className="btn">Back</button>
        </Link> */}
        <BackButton />
      </div>

      <div className="flex flex-wrap justify-center">
        {menulist?.map((item) => {
          // console.log(item);
          // console.log(item.card.info);
          const { id, name, price, ratings, imageId } = item.card.info;
          return (
            <div
              key={id}
              // key={item.card.info.id}
              className="card flex flex-col justify-center w-[190px] m-4 shadow-lg text-center"
            >
              <img
                className="rounded"
                src={IMG_CDN_URL + imageId}
                alt={name}
              />

              <p className=" font-bold m-1">{item?.card?.info?.name} </p>
              <hr className="w-46 h-0.5 bg-gray-100 md:my-1 dark:bg-slate-300" />
              <p className=" font-normal ">
                PRICE :- {price / 100} &#8377;{" "}
                {/* PRICE :- {item?.card?.info?.price / 100} &#8377;{" "} */}
              </p>

              <div className=" flex justify-evenly m-2 mb-1">
                <button
                  className="bg-red-300 hover:bg-red-400  outline-slate-300 rounded-md mr-1 p-0.5"
                  onClick={()=>handleRemoveItem(item)}
                >
                  Remove item -
                </button>
                <button
                  className="bg-green-300 hover:bg-green-400  outline-slate-300 rounded-md  "
                  onClick={()=>handleAddItem(item)}
                >
                  Add item +
                </button>
              </div>
              <button className="outline outline-slate-300 rounded-md cursor-not-allowed">
                <span className="text-amber-500">
                  &#9733; {ratings?.aggregatedRating?.rating}{" "}
                  {/* &#9733; {item?.card?.info?.ratings?.aggregatedRating?.rating}{" "} */}
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
