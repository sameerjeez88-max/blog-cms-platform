const express = require('express');
const { posts } = require('../data/store');

const router = express.Router();

// GET: Retrieve all posts
router.get('/posts', (req, res) => {
  res.status(200).json({ success: true, data: posts });
});

// GET: Retrieve single post by id
router.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found.' });
  }
  res.status(200).json({ success: true, data: post });
});

// POST: Create new blog post (CMS Admin)
router.post('/posts', (req, res) => {
  try {
    const { title, category, content, author } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: 'Title and content are required.' });
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      slug,
      category: category ? category.trim() : 'General',
      content: content.trim(),
      author: author ? author.trim() : 'Rana Yasir Mahy Ud Din',
      publishedAt: new Date().toISOString().replace('T', ' ').substring(0, 16),
      comments: []
    };

    posts.unshift(newPost);
    res.status(201).json({ success: true, message: 'Blog post published successfully!', data: newPost });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE: Remove blog post
router.delete('/posts/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Post not found.' });
    }

    posts.splice(index, 1);
    res.status(200).json({ success: true, message: 'Blog post deleted successfully!' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST: Add comment to a post
router.post('/posts/:id/comments', (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);

    if (!post) {
      return res.status(404).json({ success: false, message: 'Post not found.' });
    }

    const { name, text } = req.body;
    if (!name || !text) {
      return res.status(400).json({ success: false, message: 'Name and comment text are required.' });
    }

    const newComment = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toISOString().replace('T', ' ').substring(0, 16)
    };

    post.comments.push(newComment);
    res.status(201).json({ success: true, message: 'Comment added successfully!', data: newComment });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;