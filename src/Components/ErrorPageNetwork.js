// ErrorPage.js

import React from "react";

const ErrorPageNetwork = () => {
  return (
    <div className="flex flex-col m-4 mt-14 text-center">
      <h1 className="font-bold justify-center">Network Connection Issue Oops! </h1>
      <p className=" justify-center">
        It appears that you are currently not
        connected to the internet.
      </p>
    </div>
  );
};

export default ErrorPageNetwork;
