import React, { useState } from 'react';

const Header = ({ isDark, setIsDark }) => {
  const [headerText, setHeaderText] = useState("Jon Catipon's page");

  return (
    <div className="container mx-auto p-3">
      <div className="flex space-x-3 mb-3">
        <button
          onClick={() => setIsDark(!isDark)}
          className="bg-gray-800 text-white p-2 rounded hover:bg-gray-600"
        >
          {isDark ? 'Turn Light Mode' : 'Turn Dark Mode'}
        </button>
        <button
          onClick={() => setHeaderText("Welcome to My React Router Page!")}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700"
        >
          Update Title
        </button>
      </div>

      <header className="text-center p-4 bg-red-400 text-white rounded-t-lg">
        <h1 className="text-3xl font-bold">{headerText}</h1>
      </header>
    </div>
  );
};

export default Header;
