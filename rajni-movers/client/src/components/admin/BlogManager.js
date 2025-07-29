import React, { useState, useEffect } from 'react';
import axios from 'axios';

function BlogManager({ token }) {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', image: '' });
  const [editId, setEditId] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(res.data);
    } catch (err) {
      console.error('Failed to fetch blogs:', err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      await axios.post('http://localhost:5000/api/blogs', form, {
        headers: { 'x-auth-token': token }
      });
      setForm({ title: '', content: '', image: '' });
      fetchBlogs();
    } catch (err) {
      alert('Error creating blog');
    }
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/blogs/${editId}`, form, {
        headers: { 'x-auth-token': token }
      });
      setForm({ title: '', content: '', image: '' });
      setEditId(null);
      fetchBlogs();
    } catch (err) {
      alert('Error updating blog');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`, {
        headers: { 'x-auth-token': token }
      });
      fetchBlogs();
    } catch (err) {
      alert('Error deleting blog');
    }
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, content: blog.content, image: blog.image || '' });
    setEditId(blog._id);
  };

  const handleCancelEdit = () => {
    setForm({ title: '', content: '', image: '' });
    setEditId(null);
  };

  return (
    <div>
      <h3>📝 {editId ? 'Edit Blog' : 'Add New Blog'}</h3>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL (optional)" />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Content" />
      
      {editId ? (
        <>
          <button onClick={handleUpdate}>Update Blog</button>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={handleCreate}>Add Blog</button>
      )}

      <ul style={{ marginTop: '20px' }}>
        {blogs.map((b) => (
          <li key={b._id} style={{ marginBottom: '10px' }}>
            <strong>{b.title}</strong> &nbsp;
            <button onClick={() => handleEdit(b)}>✏️ Edit</button>
            <button onClick={() => handleDelete(b._id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogManager;
