import React, { useState } from "react";

const Home: React.FC = () => {
  const handleGenerateImage = async () => {
    console.log("Generating Images");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="mb-2 font-bold text-4xl">Image Generation App</h1>
        <p className="mb-4 text-gray-700 text-lg">
          Generate stunning images based on your prompts!
        </p>

        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter your prompt here..."
            className="mb-4 p-3 border border-gray-300 rounded-lg w-full"
          />
          <button
            onClick={handleGenerateImage}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg w-full text-white transition duration-200"
          >
            Generate Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
