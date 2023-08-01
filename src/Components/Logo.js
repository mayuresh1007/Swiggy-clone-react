import logo from "../assets/img/Newlogo.png";
import { useNavigate } from "react-router-dom";
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/")}>
      <img src={logo} alt="logo" className="h-20 cursor-pointer " />
    </div>
  );
};

export default Logo;
