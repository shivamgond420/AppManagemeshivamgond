
import React from "react";
import Nav from "./Components/Nav";
import Display from "./Components/SearchProduct";
import AddProduct from "./Components/AddProduct";
import CurrentStock from "./Components/CurrentStock";
const page = () => {
  return (
    <div>
     <Nav/>
     <Display/>
     <AddProduct/>
     <CurrentStock/>
    </div>
  );
};

export default page;
