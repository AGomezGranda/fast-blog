import React, { useEffect, useState } from "react";

const RecommendedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from API or load from state management
    // This is a placeholder. Replace with actual data fetching logic
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>Recent Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className="post-item">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <span>{post.date}</span>
        </div>
      ))}
    </div>
  );
};

export default RecommendedPosts;
