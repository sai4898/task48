import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-800">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center">
          <Link
            className="text-xl font-bold text-white hover:text-gray-200"
            to="/"
          >
            Contact Manager
          </Link>
         
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
