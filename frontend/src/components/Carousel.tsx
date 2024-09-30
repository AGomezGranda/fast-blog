import { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const response = await axios.get("/api/posts");
        setPosts(response.data);
        console.log("User posts:", posts);
      } catch (error) {
        console.error("Error fetching user posts:", error);
      }
    };
    fetchUserPosts();
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="overflow-hidden"></div>
    </div>
  );
};

export default Carousel;
