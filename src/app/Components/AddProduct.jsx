"use client";

import { useState } from "react";

const AddProduct = () => {
  async function handleChange(formData) {
    const response = await submitt({
      Name: formData.get("name"),
      Description: formData.get("Quantity"),
      Prise: formData.get("prise"),
    });
  }
  const [Wait, setWait] = useState(false);
  const submitt = async (data) => {
    try {
      const response = await fetch("/Api/Product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        console.log("product added succesfully");
      } else {
        console.log("Error Adding Product");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      <h1 className="container mx-auto font-extrabold text-3xl">
        Add products
      </h1>
      {Wait && <div className="">your product add now</div>}
      <form
        action={handleChange}
        onSubmit={() => {
          setWait(true);
        }}
        className="container mx-auto my-4"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Product Name
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Enter product name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Quantity
          </label>
          <input
            name="Quantity"
            id="description"
            type="number"
            placeholder="Enter product Quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Product Price
          </label>
          <input
            name="prise"
            id="price"
            type="text"
            placeholder="Enter product price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
