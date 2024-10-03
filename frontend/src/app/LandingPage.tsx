import { ArrowRight, Edit3, FileText, Github } from "lucide-react";
import FeatureCard from "../components/FeatureCard";
import Header from "../components/Header";

function LandingPage() {


  return (
    <div className="min-h-screen flex flex-col font-serif dark:bg-gray-700 ">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 dark:text-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Create Beautiful Blog Posts with Markdown
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-200 mb-8">
            Simple, powerful, and flexible - start your blog today!
          </p>
          <a
            href="/posts"
            className="bg-gray-500 dark:bg-gray-800 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-600 transition duration-300 inline-flex items-center"
          >
            Get Started
            <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<FileText size={40} color="#4b5563" />}
            title="Instant Preview"
            description="See your formatted post as you write with real-time preview."
          />
          <FeatureCard
            icon={<Edit3 size={40} color="#4b5563" />}
            title="Easy Editing"
            description="Edit your posts with a simple and intuitive interface."
          />
          <FeatureCard
            icon={<Github size={40} color="#4b5563" />}
            title="Open Source"
            description="Fork the project on GitHub and customize it to your needs."
          />
        </div>
      </main>
      <footer className="bg-white dark:bg-gray-800 py-4 mt-auto">
        <div className="container mx-auto px-4 flex justify-center items-center">
          <a
            href="https://github.com/AGomezGranda/fast-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-gray-600 transition duration-300 flex items-center"
          >
            <Github size={20} className="inline-block mr-2" />
            View on GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

