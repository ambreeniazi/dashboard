import React, { useState } from "react";

const AddProduct = () => {
  const [info, setInfo] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const productadded = async () => {
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const product = await fetch("http://localhost:5001/add-product", {
      method: "POST",
      body: JSON.stringify({
        name: info.name,
        price: info.price,
        category: info.category,
        userId,
        company: info.company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await product.json();
    console.log(response);
  };
  return (
    <div className="flex justify-center p-10">
      <div className="">
        <div>
          <h1>Add Product</h1>
        </div>
        <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
          <div className="mb-4">
            <div className="mb-2">
              Product Name:
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setInfo({ ...info, name: e.target.value })}
                value={info.name}
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-2">
              Product Price:
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setInfo({ ...info, price: e.target.value })}
                value={info.price}
                placeholder="Price"
              />
            </div>
            <div className="mb-2">
              Product Category:
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setInfo({ ...info, category: e.target.value })}
                value={info.category}
                placeholder="Category"
              />
            </div>
            {/* <div className="mb-2">
              User Id:
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setInfo({ ...info, userId: e.target.value })}
                value={info.userId}
                placeholder="UserId"
              />
            </div> */}
            <div className="mb-2">
              Company Name:
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => setInfo({ ...info, company: e.target.value })}
                value={info.company}
                placeholder="Company"
              />
            </div>
          </div>
          <div>
            <button
              onClick={productadded}
              className="w-full px-3 py-2 border rounded-md bg-blue-500 text-white focus:outline-none focus:ring focus:border-blue-300"
              type="button"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
