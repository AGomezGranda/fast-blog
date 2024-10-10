import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PostElement from "./PostElement";
import { fetchPostByUser } from "../api/api";
import { useAuth } from "../context/AuthContext";

interface Post {
  uuid: string;
  title: string;
  description: string;
  content: string;
  created_at: string;
  author: string;
  // Add other fields as necessary
}

interface Props {
  token: string;
  user: {
    uuid: string;
  };
}

const Carousel: React.FC<Props> = ({ token, user }) => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      if (!token) {
        setError('You are not authorized to view this page.');
        return;
      }

      try {
        setLoading(true);
        if (!user) {
          setError('User information is missing.');
          return;
        }
        const data = await fetchPostByUser(token, user.uuid);
        setPosts(data);
        console.log('Fetched posts:', data); // Added logging

      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [token, user]);

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-600 dark:text-red-400 p-4">{error}</div>;
  }

  return (
    <section className="relative">
      <div className="overflow-hidden px-8">
        <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {posts.map(post => (
            <div key={post.uuid} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-2">
              <PostElement post={post} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-2 ml-2 rounded-full shadow-lg"
        onClick={() => setCurrentSlide(Math.max(currentSlide - 1, 0))}
      >
        <ChevronLeft />
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 dark:bg-gray-700 text-white p-2 mr-2 rounded-full shadow-lg"
        onClick={() => setCurrentSlide(Math.min(currentSlide + 1, Math.ceil(posts.length / 3) - 1))}
      >
        <ChevronRight />
      </button>
    </section>
  );
};

export default Carousel;