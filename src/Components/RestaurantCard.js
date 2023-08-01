// Props ==> properties >> way to send data with destructuring=>{name,price,image,rating,cuisine}
import { IMG_CDN_URL } from "../config";

const RestraurantCard = (props) => {
  // console.log(props);
  return (
    <div className="card flex flex-col justify-center w-[190px] m-4 shadow-lg ">
      <img src={IMG_CDN_URL + props?.cloudinaryImageId} alt={props?.name} />
      <hr className="w-46 h-0.5 bg-gray-100 md:my-1 dark:bg-slate-950" />

      {/* <h3>{props?.id}</h3> */}
      <h3 className="font-bold">{props?.name}</h3>
      <hr className="w-46 h-0.5 bg-gray-100 md:my-1 dark:bg-slate-950" />
      <span>
        <p>Delivery Time:- </p>
        {props?.sla?.deliveryTime} &#x1F550;Minutes
      </span>
      <h4 className="my-1">{props?.veg}</h4>
      <button className="outline outline-slate-300 rounded-md "><span className="text-amber-500">&#9733; {props?.avgRating} </span></button>
      
      {/* <p>{props?.data?.cuisines?.join(", ")} </p> */}
    </div>
  );
};
// old
// const RestraurantCard = ({name,price,image,rating,cuisine})=>{
//     return (
//       <div className="card">
//       <img src={image} alt="panner kadhai" />
//       <hr />
//       <h3>{"Menu -" + name}</h3>
//       <hr />
//       <h4>
//         {"Price -" + price} <span>&#8377;</span>{" "}
//       </h4>
//       <h4>{rating} Stars</h4>
//       {/* <p><strong>Cuisine -</strong>{cuisine.join(", ")} </p> */}
//     </div>
//     )
//   }

export default RestraurantCard;
