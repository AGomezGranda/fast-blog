const CreatePostButton: React.FC = () => {
  const handleClick = () => {
    // Navigate to the create post page
    // You may need to adjust this based on your routing setup
    window.location.href = "/create-post";
  };

  return (
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Create New Post
    </button>
  );
};

export default CreatePostButton;
