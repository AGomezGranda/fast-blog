import React from "react";
import { ArrowRight, Edit3, FileText, Github } from "lucide-react";
import FeatureCard from "../components/FeatureCard";

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 font-serif">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Fast blog</h1>
          <div className="space-x-4">
            <a
              href="/login"
              className="text-gray-800 hover:text-gray-900 transition duration-300"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
            >
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Create Beautiful Blog Posts with Markdown
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Simple, powerful, and flexible - start your blog today!
          </p>
          <a
            href="#"
            className="bg-gray-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Edit3 size={40} color="#4b5563" />}
            title="Write in Markdown"
            description="Create content easily using familiar Markdown syntax."
          />
          <FeatureCard
            icon={<FileText size={40} color="#4b5563" />}
            title="Instant Preview"
            description="See your formatted post as you write with real-time preview."
          />
          <FeatureCard
            icon={<Github size={40} color="#4b5563" />}
            title="Version Control"
            description="Integrate with GitHub for easy versioning and collaboration."
          />
        </div>
      </main>
    </div>
  );
}

export default LandingPage;
