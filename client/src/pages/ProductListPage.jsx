import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import EmptyProduct from "../components/EmptyProduct";

const ProductListPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_BASE_URL;

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products`);
      setData(res.data);
      // console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = () => {
    navigate("/addproduct");
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="flex justify-end px-5 py-5 text-blue-800 ">
        <p
          className="bg-amber-400 p-2 rounded hover:bg-amber-600 cursor-pointer"
          onClick={addProduct}
        >
          {" "}
          + Add Product
        </p>
      </div>
      {data.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 px-2 gap-2">
          {data.map((item) => {
            return (
              <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                key={item._id}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    src={item.imgUrl}
                    alt="ImgLogo"
                  />
                </a>
                <div className="p-5">
                  <Link to={`/singleproduct/${item._id}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </Link>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  <p className="text-center py-2">Price $ {item.amount}</p>
                  <Link
                    to={`/singleproduct/${item._id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    view more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <EmptyProduct />
      )}
    </div>
  );
};

export default ProductListPage;
