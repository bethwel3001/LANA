import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CourseCard from '../components/CourseCard';
import Button from '../components/Button';
import { HiX, HiCheck, HiSearch, HiAcademicCap, HiSun, HiMoon } from 'react-icons/hi';
import AuthContext from '../context/AuthContext';

const Enroll = () => {
  const [showInterestForm, setShowInterestForm] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const { isDarkMode, toggleTheme } = useContext(AuthContext);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successCourse, setSuccessCourse] = useState(null);

  const interests = [
    'Technology', 'Environment', 'Automotives', 'Arts', 
    'Sports', 'Science', 'Business', 'Health', 'Education'
  ];

  const courses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      description: 'Learn essential digital skills for the modern world',
      level: 'Beginner',
      duration: '4 weeks',
      students: 1200,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Coding for Kids',
      description: 'Introduce children to the basics of programming',
      level: 'Kids',
      duration: '8 weeks',
      students: 850,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Advanced Web Development',
      description: 'Master full-stack web development techniques',
      level: 'Advanced',
      duration: '12 weeks',
      students: 650,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Technology'
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Build native and cross-platform mobile applications',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 520,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Technology'
    },
    {
      id: 5,
      title: 'Environmental Conservation',
      description: 'Learn about sustainable practices and conservation',
      level: 'Intermediate',
      duration: '8 weeks',
      students: 780,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Environment'
    },
    {
      id: 6,
      title: 'Graphic Design for Beginners',
      description: 'Master the basics of visual communication',
      level: 'Beginner',
      duration: '6 weeks',
      students: 950,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Arts'
    },
    {
      id: 7,
      title: 'Business Management',
      description: 'Essential skills for modern business leaders',
      level: 'Intermediate',
      duration: '10 weeks',
      students: 620,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Business'
    },
    {
      id: 8,
      title: 'Health & Wellness',
      description: 'Maintain physical and mental wellbeing',
      level: 'Beginner',
      duration: '6 weeks',
      students: 890,
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      category: 'Health'
    }
  ];

  useEffect(() => {
    // Show interest form after a short delay
    const timer = setTimeout(() => {
      setShowInterestForm(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Hide success animation after 3 seconds
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  const toggleInterest = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(item => item !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleInterestSubmit = (e) => {
    e.preventDefault();
    setShowInterestForm(false);
    // Here you would typically save the interests to the user's profile
  };

  const handleEnroll = (course) => {
    // Check if already enrolled
    if (!enrolledCourses.includes(course.id)) {
      // Add to enrolled courses
      setEnrolledCourses([...enrolledCourses, course.id]);
      
      // Show success animation
      setSuccessCourse(course);
      setShowSuccess(true);
    }
  };

  const isEnrolled = (courseId) => {
    return enrolledCourses.includes(courseId);
  };

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // If interests are selected, filter by them too
    if (selectedInterests.length > 0) {
      return matchesSearch && selectedInterests.includes(course.category);
    }
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Custom Navbar for Enroll Page */}
      <nav className="bg-white dark:bg-gray-800 shadow-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <HiAcademicCap className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">LANA</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <HiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses by title, description, or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white"
                />
              </div>
            </div>

            {/* Theme Toggler */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <HiSun className="h-5 w-5 text-yellow-500" />
              ) : (
                <HiMoon className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Success Animation */}
      <AnimatePresence>
        {showSuccess && successCourse && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 right-4 z-50 bg-green-500 text-white p-4 rounded-lg shadow-lg"
          >
            <div className="flex items-center">
              <HiCheck className="h-6 w-6 mr-2" />
              <span>Successfully enrolled in <strong>{successCourse.title}</strong>!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interest Form Modal */}
      {showInterestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Help us personalize your experience</h3>
              <button 
                onClick={() => setShowInterestForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <HiX className="h-6 w-6" />
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Select your interests to help us recommend the best courses for you
            </p>
            
            <form onSubmit={handleInterestSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-colors ${
                      selectedInterests.includes(interest)
                        ? 'bg-primary-100 border-primary-500 text-primary-700 dark:bg-primary-900/30 dark:border-primary-600 dark:text-primary-300'
                        : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-3">
                <Button type="submit" fullWidth={{ mobile: true, desktop: false }}>
                  Save Interests
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  fullWidth={{ mobile: true, desktop: false }}
                  onClick={() => setShowInterestForm(false)}
                >
                  Skip
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}

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
          
          {selectedInterests.length > 0 && (
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Filtering by interests:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {selectedInterests.map(interest => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
                <button 
                  onClick={() => setSelectedInterests([])}
                  className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Clear all
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <HiSearch className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No courses found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search or interests to find more courses.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Showing {filteredCourses.length} of {courses.length} courses
                </p>
                <button 
                  onClick={() => setShowInterestForm(true)}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                >
                  Edit interests
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <div key={course.id} className="relative">
                    <CourseCard course={course} />
                    
                    {isEnrolled(course.id) ? (
                      <motion.div 
                        className="absolute inset-0 bg-green-500/20 rounded-xl flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg text-center">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                          >
                            <HiCheck className="h-8 w-8 text-green-500 mx-auto mb-2" />
                          </motion.div>
                          <p className="font-semibold text-gray-900 dark:text-white mb-2">Enrolled!</p>
                          <Button 
                            className="mt-2"
                            onClick={() => window.location.href = '/dashboard'}
                          >
                            Go to Dashboard
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button 
                          className="w-full mt-4"
                          onClick={() => handleEnroll(course)}
                        >
                          Enroll Now
                        </Button>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
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