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
    onEdit: (postId: string) => void;
    onDelete: (postId: string) => void;
}

function Post({ post, onEdit, onDelete }: PostProps) {
    const { token } = useAuth();

    const formattedDate = format(new Date(post.created_at), 'MMMM dd, yyyy');

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">Publicado el: {formattedDate}</p>
            <p className="text-gray-800 mb-4">{post.description}</p>
            {token && (
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={() => onEdit(post.uuid)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(post.uuid)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
                    >
                        Delete
                    </button>
                </div>
            )}
        </div>
    );
}

export default Post;