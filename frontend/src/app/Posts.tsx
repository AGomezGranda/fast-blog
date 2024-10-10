import React, { useState } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { useAuth } from "../context/AuthContext";

const Posts: React.FC = () => {
  const { token, user, logout } = useAuth(); // Obtén el token y el usuario del contexto
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  if (error) {
    return <div className="text-red-600 dark:text-red-400 p-4">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-serif">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          {user ? `${user.username} posts:` : "Welcome to Fast Blog"}
        </h1>
        {user ? (
          <Carousel token={token || ""} user={user} />
        ) : (
          <div>No user data available, please login or register</div>
        )}
      </main>
    </div>
  );
};

export default Posts;
