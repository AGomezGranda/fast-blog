import React from "react";
import Carousel from "../components/Carousel";
import RecommendedPosts from "../components/RecommendedPosts";
import CreatePostButton from "../components/CreatePostButton";

const Posts: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Welcome to Our App
      </h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Latest Posts
        </h2>
        {/* <Carousel /> */}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Recommended Posts
        </h2>
        {/* <RecommendedPosts /> */}
      </section>

      <CreatePostButton />
    </div>
  );
};

export default Posts;
