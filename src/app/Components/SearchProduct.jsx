"use client";
import React from "react";
import { useState } from "react";
import Loading from "./Loading";

const Display = () => {
  const [Droupdown, setDroupdown] = useState([]);
  const [query, setquery] = useState("");
  const [loading, setloading] = useState(false);
  const onchangeText = async (e) => {
    setquery(e.target.value);
    if (!loading) {
      setloading(true);
      const response = await fetch(
        `Api/Search?query=${query}`
      );

      let rjson = await response.json();

      setDroupdown(rjson.AllProduct);
      setloading(false);
    }
  };

  const buttonAction = async (Action, Name, initalQuantity) => {
    let index = Droupdown.findIndex((item) => item.Name == Name);
    let newProducts = JSON.parse(JSON.stringify(Droupdown));
    if (Action == "plus") {
      newProducts[index].Description = parseInt(initalQuantity) + 1;
    } else {
      newProducts[index].Description = parseInt(initalQuantity) - 1;
    }
    setDroupdown(newProducts);
    setloadingAction(true);
    const response = await fetch("/Api/Action", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Action, Name, initalQuantity }),
    });
    console.log(response.json());
    setloadingAction(false);
  };

  const [loadingAction, setloadingAction] = useState();
  return (
    <div>
      <div className="mx-auto container  my-4">
        <label
          htmlFor="search"
          className="block text-gray-700 text-3xl font-bold mb-2"
        >
          Search Products
        </label>
        <input
          id="search"
          onChange={onchangeText}
          type="text"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Search products..."
        />
      </div>
      {loading && (
        <div className="flex justify-center items-center">
          <Loading />
        </div>
      )}
      {Droupdown.map((item) => {
        return (
          <div
            className="flex justify-between container mx-auto my-3"
            key={item.id}
          >
            <span>
              {item.Name} {item.Description} Ablable for ₹{item.Prise}
            </span>
            <div className="flex w-1/3 items-center justify-center gap-2">
              <button
                onClick={() => {
                  buttonAction("plus", item.Name, item.Description);
                }}
                disabled={loadingAction}
                className=" px-2 py-1 bg-blue-600 hover:bg-blue-800 rounded disabled:bg-blue-50"
              >
                +
              </button>
              <span>{item.Description}</span>
              <button
                disabled={loadingAction}
                onClick={() => {
                  buttonAction("mins", item.Name, item.Description);
                }}
                className=" px-2 py-1 bg-blue-600 hover:bg-blue-800 rounded disabled:bg-blue-50"
              >
                -
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Display;
