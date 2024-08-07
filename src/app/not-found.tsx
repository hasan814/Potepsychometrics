"use client";

import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-8">Page Not Found</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
