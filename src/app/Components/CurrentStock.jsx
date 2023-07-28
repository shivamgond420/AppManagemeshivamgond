"use client";
import React from "react";
import { useEffect, useState } from "react";

const CurrentStock = () => {
  const [products, Setprducts] = useState([]);

  useEffect(() => {
    const Fatchproduct = async () => {
      const response = await fetch("http://localhost:3000/Api/Product");
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
                  <tr key={product.Name} className="flex justify-between">
                    <td className="hover:bg-[#eee]">{product.Name}</td>
                    <td className="hover:bg-[#eee]">{product.Description}</td>
                    <td className="hover:bg-[#eee]">{product.Prise}</td>
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
