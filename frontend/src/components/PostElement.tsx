import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { format } from 'date-fns';


interface PostProps {
    post: {
        title: string;
        description: string;
        content: string;
        created_at: string;
        uuid: string;
        author: string;
    };
}


function PostElement({ post}: PostProps) {

    const { token } = useAuth();
    const navigate = useNavigate();

    const formattedDate = format(new Date(post.created_at), 'MMMM dd, yyyy');

    const handleViewPost = () => {
        navigate(`/posts/${post.uuid}`);
    };

    return (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mx-4">
            <h2 className="dark:text-white text-2xl font-bold mb-2">{post.title}</h2>
            <p className="dark:text-gray-200 text-gray-600 mb-4">Publicado el: {formattedDate}</p>
            <p className="dark:text-gray-100 text-gray-800 mb-4">{post.description}</p>
            {token && (
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={handleViewPost}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        View
                    </button>
                    <button
                        // onClick={() => onDelete(post.uuid)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default PostElement;