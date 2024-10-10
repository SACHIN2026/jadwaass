import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBlog } from '../redux/useBlog';

function Home() {
  const { posts, loading, error, fetchPosts } = useBlog();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.imageUrl || '/placeholder.svg'} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description.substring(0, 100)}...</p>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">Read more</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
