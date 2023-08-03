import { useContext } from "react"
import UserContext from "../context/userConntext"

const Cart = () => {
  const {user} = useContext(UserContext)
  return (
    <div className="m-10 p-10 ">
      <h1 className="font-bold text-xl">{user.name} - {user.email}</h1>
    </div>

  )
}

export default Cart;