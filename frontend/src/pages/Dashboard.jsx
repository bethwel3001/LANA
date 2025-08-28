import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import AuthContext from '../context/AuthContext';
import { HiBookOpen, HiClock, HiAcademicCap, HiUserCircle } from 'react-icons/hi';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const enrolledCourses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      progress: 65,
      nextLesson: 'Internet Safety',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      progress: 30,
      nextLesson: 'React Native Basics',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Continue your learning journey
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-primary-50 dark:bg-primary-900/30 rounded-lg p-4">
              <HiUserCircle className="h-12 w-12 text-primary-600" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">{user?.email}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Student</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-100 dark:bg-primary-900/30 mr-4">
                  <HiBookOpen className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">5</p>
                  <p className="text-gray-600 dark:text-gray-400">Courses</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-secondary-100 dark:bg-secondary-900/30 mr-4">
                  <HiClock className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
                  <p className="text-gray-600 dark:text-gray-400">Hours Learned</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mr-4">
                  <HiAcademicCap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">2</p>
                  <p className="text-gray-600 dark:text-gray-400">Certificates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Your Courses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((course, index) => (
              <motion.div 
                key={course.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-40 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary-600 h-2 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Next: {course.nextLesson}
                  </p>

                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                    Continue Learning
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;