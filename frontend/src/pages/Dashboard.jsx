import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HiBookOpen, 
  HiCalendar, 
  HiChartBar, 
  HiUser, 
  HiBell,
  HiCog,
  HiLogout,
  HiAcademicCap,
  HiSun,
  HiMoon,
  HiX,
  HiLightningBolt,
  HiCollection
} from 'react-icons/hi';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(AuthContext);
  
  // Demo user data
  const user = {
    name: 'Be Tu',
    email: 'demo@lana.org',
    interests: ['Technology', 'Environment', 'Science'],
    enrolledCourses: 5,
    averageProgress: 48,
    upcomingLessons: 3
  };

  const enrolledCourses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      progress: 65,
      nextLesson: 'Internet Basics',
      nextLessonTime: 'Tomorrow, 10:00 AM',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Introduction to Coding',
      progress: 30,
      nextLesson: 'Variables and Data Types',
      nextLessonTime: 'Today, 2:00 PM',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Environmental Conservation',
      progress: 45,
      nextLesson: 'Sustainable Practices',
      nextLessonTime: 'Wednesday, 11:00 AM',
      category: 'Environment'
    },
    {
      id: 4,
      title: 'Data Science Fundamentals',
      progress: 20,
      nextLesson: 'Data Visualization',
      nextLessonTime: 'Friday, 3:00 PM',
      category: 'Science'
    },
    {
      id: 5,
      title: 'Advanced Web Development',
      progress: 80,
      nextLesson: 'API Integration',
      nextLessonTime: 'Thursday, 9:00 AM',
      category: 'Technology'
    }
  ];

  const notifications = []; // Empty array for demo

  const motivationalQuotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Your potential is endless. Go get what's yours. - Unknown",
    "The expert in anything was once a beginner. - Helen Hayes",
    "Learning is not attained by chance, it must be sought for with ardor and diligence. - Abigail Adams"
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <HiAcademicCap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">LANA</span>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors relative"
              >
                <HiBell className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {notifications.length}
                  </span>
                )}
              </button>

              {/* Notifications Dropdown */}
              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                  >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center">
                          <HiBell className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 dark:text-gray-400">No notifications yet</p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                            You're all caught up! Check back later for updates.
                          </p>
                        </div>
                      ) : (
                        notifications.map((notification, index) => (
                          <div key={index} className="p-4 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-750">
                            <p className="text-sm text-gray-800 dark:text-gray-200">{notification.message}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{notification.time}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="h-8 w-8 bg-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span className="text-gray-700 dark:text-gray-300 font-medium">{user.name}</span>
              </button>

              {/* User Menu Dropdown */}
              <AnimatePresence>
                {showUserMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                  >
                    {/* User Info */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            {user.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{user.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      
                      {/* Interests */}
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">INTERESTS</p>
                        <div className="flex flex-wrap gap-1">
                          {user.interests.map((interest, index) => (
                            <span 
                              key={index}
                              className="px-2 py-1 bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <HiUser className="h-5 w-5" />
                        <span>Profile</span>
                      </button>
                      <button className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors">
                        <HiCog className="h-5 w-5" />
                        <span>Settings</span>
                      </button>
                      <button 
                        onClick={toggleTheme}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      >
                        {isDarkMode ? (
                          <>
                            <HiSun className="h-5 w-5" />
                            <span>Light Mode</span>
                          </>
                        ) : (
                          <>
                            <HiMoon className="h-5 w-5" />
                            <span>Dark Mode</span>
                          </>
                        )}
                      </button>
                      <button className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors">
                        <HiLogout className="h-5 w-5" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 italic">"{randomQuote}"</p>
        </motion.div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                <HiCollection className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Courses Enrolled</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.enrolledCourses}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                <HiChartBar className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Average Progress</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.averageProgress}%</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                <HiCalendar className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Upcoming Lessons</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{user.upcomingLessons}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enrolled Courses */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Courses</h3>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {enrolledCourses.length} of {user.enrolledCourses} courses
            </span>
          </div>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{course.title}</h4>
                    <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                      {course.category}
                    </span>
                  </div>
                  <span className="text-sm text-primary-600 font-medium">{course.progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                  <div 
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-600 dark:text-gray-400">
                  <span>Next: {course.nextLesson}</span>
                  <span>{course.nextLessonTime}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;