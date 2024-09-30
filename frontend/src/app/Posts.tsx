// src/pages/Posts.tsx
import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Importa el contexto de autenticación

const Posts: React.FC = () => {
  const { token, logout } = useAuth(); // Obtén el token del contexto
  const [posts, setPosts] = useState<any[]>([]); // Estado para las publicaciones
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      console.log("Token:", token);

      if (!token) {
        setError("You are not authorized to view this page."); // Mensaje de error si no hay token
        return; // Detén la ejecución si no hay token
      }

      try {
        setLoading(true); // Inicia la carga
        const response = await fetch("http://127.0.0.1:8000/api/posts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Incluye el token en la cabecera
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch posts"); // Lanza un error si la respuesta no es ok
        }

        const data = await response.json(); // Convierte la respuesta en JSON
        setPosts(data); // Almacena las publicaciones en el estado
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to fetch posts. Please try again."); // Manejo de errores
        logout(); // Cierra sesión si hay un error
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData(); // Llama a la función para obtener publicaciones
  }, [token, logout]); // Dependencias del useEffect

  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; // Muestra el mensaje de error si hay uno
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Posts</h1>
      <ul className="mt-4">
        {posts.length === 0 ? (
          <li>No posts available.</li>
        ) : (
          posts.map((post) => (
            <li key={post.uuid} className="border-b py-2">
              <h2 className="font-semibold">{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Posts;
