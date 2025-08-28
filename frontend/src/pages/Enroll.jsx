import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';

const Enroll = () => {
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
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 520,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      title: 'Data Science Fundamentals',
      description: 'Learn to analyze and visualize data',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 780,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      title: 'Graphic Design for Beginners',
      description: 'Master the basics of visual communication',
      level: 'Beginner',
      duration: '6 weeks',
      students: 950,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Explore Our Courses
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover a wide range of courses designed to enhance digital literacy and skills across Africa
          </motion.p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Need Help Choosing a Course?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Our education advisors are here to help you find the perfect course for your goals
            </p>
            <Button variant="secondary" size="lg">Contact an Advisor</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Enroll;