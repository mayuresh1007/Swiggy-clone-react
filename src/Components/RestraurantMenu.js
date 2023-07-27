import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RestaurantList_URL ,Menu_List} from "../config";

const RestraurantMenu = (props) => {
  // how to make read dynamic URL params
  const params = useParams();
  // console.log(params);
  // console.log(props);
  const { id } = params;

  const [res, setRes] = useState(null);

  // console.log(res)
  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const data = await fetch(Menu_List);
    const json = await data.json();
    // console.log(json)
    console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards)
    // console.log(json.data.cards[2].groupedCard.cardGroupMap)
    setRes(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards?.card?.itemCards);
    // setRes(json?.data?.cards[2]?.data?.data?.cards);
    // console.log(res);
  }
  return (
    <div>
      <h1>Restraurant id:- {id}</h1>

      <div className="card">
        {res?.map((item) => {
          console.log(item.card.card.itemCards);
          return (
            <>
              <div key={item.id}>
              <p>Restraurant id:- {item?.data?.id}</p>
                <img
                  src={IMG_CDN_URL + item?.data?.cloudinaryImageId}
                  alt={res?.name}
                  style={{Height:"150px",width:"150px"}}
                />
                <hr />
                <p>{item?.cuisines?.join(", ")} </p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default RestraurantMenu;
