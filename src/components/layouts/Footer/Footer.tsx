"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <h2 className="text-xl font-bold">Potepsychometrics</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
