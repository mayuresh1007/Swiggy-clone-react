import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <button onClick={handleGoBack}  className=" bg-logocolor p-2 rounded-lg hover:bg-pink-500 text-white ">
      Back
    </button>
  );
};

export default BackButton;
