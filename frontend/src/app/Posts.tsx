import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext"; // Importa el contexto de autenticación
import Header from "../components/Header";
import { fetchPosts } from "../api/api";
import Post from "../components/Post";

const Posts: React.FC = () => {
  const { token, logout } = useAuth(); // Obtén el token del contexto
  const [posts, setPosts] = useState<any[]>([]); // Estado para las publicaciones
  const [loading, setLoading] = useState<boolean>(true); // Estado de carga
  const [error, setError] = useState<string | null>(null); // Estado para manejar errores

  const getPosts = async () => {
    if (!token) {
      setError('You are not authorized to view this page.');
      return;
    }

    try {
      setLoading(true);
      const data = await fetchPosts(token);
      setPosts(data);
    } catch (err) {
      console.error('Error fetching posts:', err);
      setError('Failed to fetch posts. Please try again.');
      logout();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [token, logout]);


  const handleEdit = (postId: string) => {
    // Handle edit logic here
    console.log('Edit post:', postId);
  };

  const handleDelete = async (postId: string) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete post');
      }

      setPosts(posts.filter(post => post.uuid !== postId));
    } catch (err) {
      console.error('Error deleting post:', err);
      setError('Failed to delete post. Please try again.');
    }
  };



  if (loading) {
    return <div>Loading...</div>; // Muestra un mensaje de carga
  }

  if (error) {
    return <div className="text-red-600">{error}</div>; // Muestra el mensaje de error si hay uno
  }

  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      <Header/>
      <main className="container mx-auto px-4 py-8">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-semibold text-gray-800">Your Posts</h2>
          <div>
            <a
              href="/posts/create"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create Post
            </a>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6">
          {posts.map(post => (
            <Post key={post.uuid} post={post} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      </main>
    </div>

  );
};

export default Posts;
