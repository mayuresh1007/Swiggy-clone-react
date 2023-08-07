import { useContext, useState } from "react";
import UserContext from "../context/userConntext";
import { IMG_CDN_URL } from "../config";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";
const Cart = () => {
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // const store = useSelector(store=>store); // bad performance low
  console.log("cartItems--->", cartItems);
  const [cartitems,setCartitems] = useState(cartItems)

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart(cartItems));
  };
  const handleAddItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
    setCartitems(cartItems)
  };
  const handleRemoveItem = (item) => {
    console.log(item);
    dispatch(removeItem(item));
    setCartitems(cartItems)
  };

  const TotalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );
  // console.log(TotalPrice);

  return (
    <>
      <div className="flex m-4 justify-center text-center ">
        <h1 className="text-xl justify-center mt-2">
          {user.name} - {user.email}
        </h1>

        <button
          className="border border-black bg-logocolor rounded m-2 p-1  justify-center"
          onClick={handleClearCart}
        >
          Clear cart
        </button>
      </div>

      <div className="flex flex-wrap m-2 justify-center ">
        {cartItems.map((item, index) => {
          // console.log(item);
          return (
            <div key={index} className=" ">
              <div className="mr-4">
                <img
                  className="w-16 rounded-md"
                  src={IMG_CDN_URL + item.imageId}
                  alt=""
                />
                <ul className="justify-center ">
                  <li className="break-words text-clip overflow-hidden text-sm w-28">
                    {item.name}
                  </li>
                  <li className="font-semibold">&#8377; {item.price / 100}</li>
                  <li>({item.isVeg ? "vegiterian" : "Non-veg"})</li>
                </ul>
                <button
                  className="bg-red-300 p-2 rounded mr-2"
                  onClick={() => {
                    handleRemoveItem(item);
                  }}
                >
                  -
                </button>
                <button
                  className="bg-green-300 p-2 rounded "
                  onClick={() => {
                    handleAddItem(item);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <h1 className="font-bold justify-center text-center mt-16">
          Total Price :- &#8377; {TotalPrice / 100}
        </h1>
      </div>
    </>
  );
};

export default Cart;
