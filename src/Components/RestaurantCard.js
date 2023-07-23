// Props ==> properties >> way to send data with destructuring=>{name,price,image,rating,cuisine}
const RestraurantCard = (props) => {
  console.log(props)
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          props?.data?.cloudinaryImageId
        }
        alt={props?.data?.name}
      />
      <hr />
      <h3>{ props?.data?.name}</h3>
      <hr />
      <span>
      <strong>Delivery Time:- </strong>{ props?.data?.deliveryTime} &#x1F550;Minutes
      </span>
      <h4>{props?.data?.veg}</h4>
      <span>&#9733; {props?.data?.avgRating} </span>
      <p>{props?.data?.cuisines?.join(", ")} </p>
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
