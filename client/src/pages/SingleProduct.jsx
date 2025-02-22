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
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products/${id}`);
      setData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleUpdate = (data) => {
    setOpenModal(true);
    setName(data.name);
    setDescription(data.description);
    setAmount(data.amount);
    setImgUrl(data.setImgUrl);
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

  const updateProductDetails = async (e) => {
    e.preventDefault();
    try {
      const updatedProduct = {
        name,
        description,
        amount,
        imgUrl,
      };
      const res = await axios.put(`${apiUrl}/products/${id}`, updatedProduct);
      //console.log(res.data);

      fetchData();
      setOpenModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <div>
      {openModal ? (
        <div>
          <div className="py-5 max-w-md mx-auto justify-center px-3">
            <div>
              <h1 className="text-center  p-2  text-white font-serif  bg-yellow-500 my-2">
                Update Product
              </h1>
            </div>
            <div>
              <form
                className="max-w-md mx-auto"
                onSubmit={updateProductDetails}
              >
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label
                    htmlFor="name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Product Name
                  </label>
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <label
                      htmlFor="Description"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Discription
                    </label>
                  </div>
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      required
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                    <label
                      htmlFor="amount"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Amount
                    </label>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="text"
                      name="imgUrl"
                      id="imgUrl"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                    />
                    <label
                      htmlFor="floating_phone"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Img Url
                    </label>
                  </div>
                </div>
                <div className=" flex justify-between space-x-2">
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setOpenModal(false)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
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
                  <div
                    className="flex justify-between py-4"
                    onClick={() => handleUpdate(data)}
                  >
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
      )}
    </div>
  );
};

export default SingleProduct;
