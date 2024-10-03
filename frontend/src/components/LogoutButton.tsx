import React from "react";
import { useAuth } from "../context/AuthContext";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();

    window.location.href = "/";
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-800 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
