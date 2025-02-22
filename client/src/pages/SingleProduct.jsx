import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const apiUrl = import.meta.env.VITE_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/${id}`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`${apiUrl}/products/${id}`);
      console.log(res.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      <div>
        {data ? (
          <div className="mx-auto pt-10" key={data._id}>
            <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 space-y-4">
              <img
                className="rounded-t-lg mx-auto"
                src={data.imgUrl}
                alt={data.name}
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {data.description}
                </p>
                <p className="text-center py-2 bg-amber-400">
                  {" "}
                  Price ${" "}
                  <span className="texy-blue-800 font-semibold">
                    {data.amount}
                  </span>
                </p>
                <div className="flex justify-between py-4">
                  <button className="bg-orange-500 p-2 rounded text-white">
                    Update
                  </button>

                  <button
                    className="bg-red-500 p-2 rounded text-white"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </button>
                  <Link
                    to={"/"}
                    className="bg-yellow-500 p-2 rounded text-white"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center py-5">Loading...</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
