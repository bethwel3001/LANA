const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
}

// Basic health check route
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'LANA Server is running',
    timestamp: new Date().toISOString()
  });
});

// Demo API routes
app.get('/api/courses', (req, res) => {
  const courses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      description: 'Learn essential digital skills for the modern world',
      level: 'Beginner',
      duration: '4 weeks',
      students: 1200,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Coding for Kids',
      description: 'Introduce children to the basics of programming',
      level: 'Kids',
      duration: '8 weeks',
      students: 850,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Advanced Web Development',
      description: 'Master full-stack web development techniques',
      level: 'Advanced',
      duration: '12 weeks',
      students: 650,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];
  res.json(courses);
});

app.get('/api/testimonials', (req, res) => {
  const testimonials = [
    {
      id: 1,
      name: 'Aisha Mohammed',
      role: 'Student, Nigeria',
      content: 'LANA helped me transition from basic computer skills to building my first website. The courses are practical and relevant to our African context.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 2,
      name: 'David Ochieng',
      role: 'Teacher, Kenya',
      content: 'As an educator, LANA has given me the tools to bring digital literacy to my students in rural areas. The platform is intuitive and works even with limited internet.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      rating: 5
    }
  ];
  res.json(testimonials);
});

// Demo login endpoint
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Demo authentication - in production, use proper authentication
  if (email === 'demo@lana.org' && password === 'lana@2025') {
    res.json({
      success: true,
      user: {
        id: 1,
        name: 'Demo User',
        email: 'demo@lana.org',
        role: 'student'
      },
      token: 'demo-jwt-token-12345'
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid credentials. Use demo@lana.org / lana@2025'
    });
  }
});

// Serve React app for all other requests in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ 
    success: false, 
    message: 'Endpoint not found' 
  });
});

app.listen(PORT, () => {
  console.log(`LANA Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});

module.exports = app;