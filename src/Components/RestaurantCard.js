// Propes ==> properties >> way to send data with destructuring=>{name,price,image,rating,cuisine}
const RestraurantCard = ({name,price,image,rating,cuisine})=>{
    return (
      <div className="card">
      <img src={image} alt="panner kadhai" />
      <h3>{"Menu -" + name}</h3>
      <h4>
        {"Price -" + price} <span>&#8377;</span>{" "}
      </h4>
      <h4>{rating} Stars</h4>
      <p><strong>Cuisine -</strong>{cuisine.join(", ")} </p>
    </div>
    )
  }

  export default RestraurantCard;