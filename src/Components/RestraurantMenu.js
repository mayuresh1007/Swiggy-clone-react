import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestraurantMenu = () => {
  // how to react the dynamic URL

  const params = useParams();
  console.log(params);
  const { id } = params;

  const [res,setRes] = useState();
  useEffect(() => {
    getData();
  }, []);

  async function getData(){
    const dataapi = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const json= await dataapi.json()
    return json;
  }
  return (
    <div>
      <h1>Restraurant id:- {id}</h1>
      <p>hus</p>
    </div>
  );
};

export default RestraurantMenu;

