import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import { fetchPostById } from '../api/api';
import Preview from '../components/Preview';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';


interface Post {
    // uuid: string;
    title: string;
    description: string;
    content: string;
    created_at: string;
}

const ViewPost = () => {
    const { uuid } = useParams<{ uuid: string }>();
    const { token } = useAuth();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const getPost = async () => {
            if (!token) {
                setError('You are not authorized to view this page.');
                return;
            }

            try {
                setLoading(true);
                const data = await fetchPostById(token, uuid);
                setPost(data);
            } catch (err) {
                console.error('Error fetching post:', err);
                setError('Failed to fetch post. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        getPost();
    }, [token, uuid]);

    if (loading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-600 dark:text-red-400 p-4">{error}</div>;
    }

    if (!post) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-serif">
            {/* Header Section */}
            <Header />

            {/* Main Content Section */}
            <main className="container mx-auto px-4 py-6">
                {/* Post Container */}
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">

                    {/* Title and Back Button */}
                    <header className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-gray-700">
                        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {post.title}
                        </h1>
                        <button
                            onClick={() => navigate('/posts')}
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md dark:text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to All Posts
                        </button>
                    </header>

                    {/* Post Metadata */}
                    <section className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-6 shadow-sm">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-600 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-8">
                            <div className="flex items-center">
                                <Calendar className="mr-2 h-5 w-5 text-primary" />
                                <span className="font-medium">{new Date(post.created_at).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock className="mr-2 h-5 w-5 text-primary" />
                                <span className="font-medium">{new Date(post.created_at).toLocaleTimeString()}</span>
                            </div>
                        </div>
                    </section>

                    {/* Post Description */}
                    <section className="p-4 border-l-4 border-primary bg-gray-100 dark:bg-gray-900 rounded-lg shadow-sm mb-6">
                        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                            {post.description}
                        </p>
                    </section>


                    {/* Post Content */}
                    <section className="max-w-none">
                        <Preview content={post.content} />
                    </section>
                </div>
            </main>
        </div>

    );
};

export default ViewPost;