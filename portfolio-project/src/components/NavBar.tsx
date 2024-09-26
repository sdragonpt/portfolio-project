// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="p-8 pt-16 text-white px-[28%] text-lg">
      <div className="space-x-4">
        <Link to="/" className="hover:underline">
          home
        </Link>
        <Link to="/projects" className="hover:underline">
          projects
        </Link>
        <Link to="/work" className="hover:underline">
          work
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
