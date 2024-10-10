// src/redux/useBlog.js
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, createPost, updatePost, deletePost } from './blogSlice';

export const useBlog = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.blog);

  // Function to fetch all posts
  const fetchAllPosts = () => {
    dispatch(fetchPosts());
  };

  // Function to handle creating a new post
  const createNewPost = async (postData) => {
    try {
      const resultAction = await dispatch(createPost(postData)).unwrap();
      return resultAction; // Returns the created post
    } catch (err) {
      console.error('Create post failed:', err);
      return null;
    }
  };

  // Function to handle updating an existing post
  const updateExistingPost = async (id, postData) => {
    try {
      const resultAction = await dispatch(updatePost({ id, postData })).unwrap();
      return resultAction; // Returns the updated post
    } catch (err) {
      console.error('Update post failed:', err);
      return null;
    }
  };

  // Function to handle deleting a post
  const deleteExistingPost = async (id) => {
    try {
      await dispatch(deletePost(id)).unwrap();
      return true;
    } catch (err) {
      console.error('Delete post failed:', err);
      return false;
    }
  };

  return {
    posts,
    loading,
    error,
    fetchPosts: fetchAllPosts,
    createPost: createNewPost,
    updatePost: updateExistingPost,
    deletePost: deleteExistingPost,
  };
};
