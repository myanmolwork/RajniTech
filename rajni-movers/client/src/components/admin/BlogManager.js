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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCancelEdit = () => {
    setForm({ title: '', content: '', image: '' });
    setEditId(null);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm border-0 rounded-4">
        <h3 className="mb-3">{editId ? '✏️ Edit Blog' : '📝 Add New Blog'}</h3>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter blog title"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            name="image"
            className="form-control"
            value={form.image}
            onChange={handleChange}
            placeholder="Enter image URL (optional)"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            name="content"
            className="form-control"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your blog content..."
            rows="5"
          />
        </div>

        {editId ? (
          <div className="d-flex gap-2">
            <button className="btn btn-success" onClick={handleUpdate}>✅ Update</button>
            <button className="btn btn-outline-secondary" onClick={handleCancelEdit}>❌ Cancel</button>
          </div>
        ) : (
          <button className="btn btn-primary" onClick={handleCreate}>➕ Add Blog</button>
        )}
      </div>

      <div className="mt-5">
        <h4 className="mb-3">📃 All Blogs</h4>
        {blogs.length === 0 ? (
          <p className="text-muted">No blogs available.</p>
        ) : (
          <ul className="list-group">
            {blogs.map((b) => (
              <li key={b._id} className="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <strong>{b.title}</strong>
                  <br />
                  <small className="text-muted">{new Date(b.createdAt).toLocaleDateString()}</small>
                </div>
                <div className="btn-group btn-group-sm mt-2 mt-md-0" role="group">
                  <button className="btn btn-outline-primary" onClick={() => handleEdit(b)}>Edit</button>
                  <button className="btn btn-outline-danger" onClick={() => handleDelete(b._id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BlogManager;
