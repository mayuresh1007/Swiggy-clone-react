// Props ==> properties >> way to send data with destructuring=>{name,price,image,rating,cuisine}
import {IMG_CDN_URL} from "../config";

const RestraurantCard = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <img
        src={IMG_CDN_URL + props?.cloudinaryImageId}
        alt={props?.name}
      />
      <hr />
      {/* <h3>{props?.id}</h3> */}
      <h3>{props?.name}</h3>
      <hr />
      <span>
        <strong>Delivery Time:- </strong>
        {props?.sla?.deliveryTime} &#x1F550;Minutes
      </span>
      <h4>{props?.veg}</h4>
      <span>&#9733; {props?.avgRating} </span>
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
