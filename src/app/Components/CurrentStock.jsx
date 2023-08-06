"use client";
import React from "react";
import { useEffect, useState } from "react";

const CurrentStock = () => {
  const [products, Setprducts] = useState([]);

  useEffect(() => {
    const Fatchproduct = async () => {
      const response = await fetch("Api/Product", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let rjson = await response.json();
      Setprducts(rjson.AllProduct);
     
 
    };
    Fatchproduct();
  }, []);
  return (
    <div className="container my-8 mx-auto">
      <h1 className="text-3xl font-semibold mb-6">Display Current Stock</h1>

      <div>
        <table>
          <thead>
            <tr className="flex justify-between">
              <th>Name</th>
              <th>Quantity</th>
              <th>Prise</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <tr
                    key={product.Name}
                    className="flex justify-between border-b border-gray-300"
                  >
                    <td className="hover:bg-[#eee] p-4">{product.Name}</td>
                    <td className="hover:bg-[#eee] p-4">
                      {product.Description}
                    </td>
                    <td className="hover:bg-[#eee] p-4">{product.Prise}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentStock;
