"use client";
import React, { useState } from "react";
// import darkModeIcon from "./dark_mode_icon.svg"; // Replace this with your dark mode icon image

const AboutPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    // Toggle the darkMode state
    setDarkMode(!darkMode);

    // Apply dark mode styles to the document body
    const body = document.body;
    if (darkMode) {
      body.classList.remove("dark");
    } else {
      body.classList.add("dark");
    }
  };

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleDarkModeToggle}
            className={`rounded-full w-12 h-12 p-2 ${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
          >
            {/* <img
              src={darkModeIcon}
              alt="Dark Mode Icon"
              className="w-8 h-8 mx-auto"
              style={{ filter: darkMode ? "invert(1)" : "invert(0)" }}
            /> */}
          </button>
        </div>
        <h2 className="text-3xl font-semibold mb-4">
          About Our Stock Management App
        </h2>
        <p className="text-gray-600 mb-8">
          Welcome to our Stock Management App! We strive to provide an efficient
          and user-friendly solution for managing your inventory and
          stock-related tasks. Our app aims to simplify the process of stock
          tracking, order management, and inventory control.
        </p>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-gray-600 mb-8">
          Our mission is to empower businesses with an effective stock
          management tool that streamlines their operations and helps them make
          informed decisions regarding their inventory. We are committed to
          delivering a reliable and feature-rich app that addresses the unique
          needs of each business.
        </p>
        <h3 className="text-xl font-semibold mb-2">Meet the Team</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="avatar1.jpg"
              alt="User 1"
            />
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-gray-600">Lead Developer</p>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="avatar2.jpg"
              alt="User 2"
            />
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <p className="text-gray-600">Designer</p>
          </div>
          <div className="text-center">
            <img
              className="w-24 h-24 rounded-full mx-auto mb-4"
              src="avatar3.jpg"
              alt="User 3"
            />
            <h4 className="text-lg font-semibold">Michael Johnson</h4>
            <p className="text-gray-600">Marketing Specialist</p>
          </div>
        </div>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-4">Image Section</h2>
            <div className="grid grid-cols-3 gap-4">
              <img src="image1.jpg" alt="Image 1" className="rounded-lg" />
              <img src="image2.jpg" alt="Image 2" className="rounded-lg" />
              <img src="image3.jpg" alt="Image 3" className="rounded-lg" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
