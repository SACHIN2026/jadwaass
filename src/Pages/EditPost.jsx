import React, { useState, useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { useBlog } from '../redux/useBlog';

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, updatePost } = useBlog();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const post = posts.find(p => p.id === parseInt(id));
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setImageUrl(post.imageUrl);
    }
  }, [id, posts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = await updatePost({ id: parseInt(id), postData: { title, content, imageUrl } });
    if (updatedPost) {
      navigate(`/post/${id}`);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="content" className="block mb-1">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md h-40"
          ></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl" className="block mb-1">Image URL</label>
          <input
            type="url"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Update Post</button>
      </form>
    </div>
  );
}

export default EditPost;
