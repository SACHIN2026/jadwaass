import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useBlog } from '../redux/useBlog';
import { useAuth } from '../redux/useAuth';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, deletePost } = useBlog();
  const { user } = useAuth();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const currentPost = posts.find(p => p.id === parseInt(id));
    setPost(currentPost);
  }, [id, posts]);

  if (!post) return <div>Loading...</div>;

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const success = await deletePost(post.id);
      if (success) {
        navigate('/');
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <img src={post.imageUrl || '/placeholder.svg'} alt={post.title} className="w-full h-64 object-cover mb-4 rounded-md" />
      <p className="text-gray-600 mb-8">{post.content}</p>
      {user && user.id === post.authorId && (
        <div className="flex space-x-4">
          <Link to={`/edit/${post.id}`} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Edit</Link>
          <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
        </div>
      )}
    </div>
  );
}

export default BlogPost;
