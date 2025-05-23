import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { create_presentation } from '../api/endpoints';

function CustomPPT() {
  const nav = useNavigate();
  const [pname, setPname] = useState('');

  const handleCreatePresentation = async () => {
    const response = await create_presentation(pname);
    console.log(response);
    // You can navigate somewhere after successful creation if you want
    // nav('/your-next-page');
  };

  return (
    <div className="min-h-screen w-full p-8 bg-gray-50 flex flex-col items-center">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-pink-600">Create Custom PPT with SlideGenie</h1>
        <p className="text-gray-600 mt-2">Fill in the details below to generate your presentation</p>
      </div>

      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-md">
        <label htmlFor="pptName" className="block text-sm font-semibold text-gray-700 mb-2">
          Presentation Name
        </label>
        <input
          onChange={(e) => setPname(e.target.value)}
          value={pname}
          type="text"
          id="pptName"
          placeholder="Enter presentation name"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <button onClick={handleCreatePresentation} className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition duration-200">
          Create
        </button>
      </div>
    </div>
  );
}

export default CustomPPT;
