import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-500 p-5  text-white flex justify-between">
      <Link to={"/"} className="bg-gray-100 p-1 text-black cursor-pointer">
        Home
      </Link>
      <h1 className="font-semibold">Product Listing Application</h1>
    </div>
  );
};

export default Header;
