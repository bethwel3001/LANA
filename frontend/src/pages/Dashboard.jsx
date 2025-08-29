import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {  
  HiCalendar, 
  HiChartBar, 
  HiUser, 
  HiBell,
  HiCog,
  HiLogout,
  HiAcademicCap,
  HiSun,
  HiMoon,
  HiCollection,
  HiX,
  HiBookOpen,
  HiLightningBolt,
  HiClock,
  HiArrowRight,
  HiHome,
  HiUserGroup,
  HiChat
} from 'react-icons/hi';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [activePopup, setActivePopup] = useState(null);
  const { isDarkMode, toggleTheme } = useContext(AuthContext);
  
  // Demo user data
  const user = {
    name: 'Be Tu',
    email: 'demo@lana.org',
    interests: ['Science', 'Technology', 'Engineering', 'Mathematics'],
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
      category: 'Technology',
      totalLessons: 12,
      completedLessons: 8,
      instructor: 'Dr. Sarah Johnson',
      startDate: '2024-01-15',
      estimatedCompletion: '2024-02-26'
    },
    {
      id: 2,
      title: 'Advanced Web Development',
      progress: 80,
      nextLesson: 'API Integration',
      nextLessonTime: 'Thursday, 9:00 AM',
      category: 'Technology',
      totalLessons: 15,
      completedLessons: 12,
      instructor: 'Prof. Michael Chen',
      startDate: '2024-01-10',
      estimatedCompletion: '2024-03-01'
    },
    {
      id: 3,
      title: 'Data Science Fundamentals',
      progress: 20,
      nextLesson: 'Data Visualization',
      nextLessonTime: 'Friday, 3:00 PM',
      category: 'Science',
      totalLessons: 10,
      completedLessons: 2,
      instructor: 'Dr. Emily Rodriguez',
      startDate: '2024-02-01',
      estimatedCompletion: '2024-04-15'
    }
  ];

  const upcomingLessons = [
    {
      id: 1,
      course: 'Digital Literacy Fundamentals',
      title: 'Internet Basics',
      time: 'Tomorrow, 10:00 AM',
      duration: '45 minutes',
      instructor: 'Dr. Sarah Johnson'
    },
    {
      id: 2,
      course: 'Advanced Web Development',
      title: 'API Integration',
      time: 'Thursday, 9:00 AM',
      duration: '60 minutes',
      instructor: 'Prof. Michael Chen'
    },
    {
      id: 3,
      course: 'Data Science Fundamentals',
      title: 'Data Visualization',
      time: 'Friday, 3:00 PM',
      duration: '75 minutes',
      instructor: 'Dr. Emily Rodriguez'
    }
  ];

  const notifications = [];

  const motivationalQuotes = [
    "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
    "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
    "Your potential is endless. Go get what's yours. - Unknown",
    "The expert in anything was once a beginner. - Helen Hayes",
    "Learning is not attained by chance, it must be sought for with ardor and diligence. - Abigail Adams"
  ];

  const randomQuote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

  const handleQuitCourse = (courseId) => {
    // Logic to quit course would go here
    setActivePopup(null);
    // This would typically send a notification and update the backend
  };

  const ProgressChart = ({ progress }) => {
    const circumference = 2 * Math.PI * 40;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="text-gray-200 dark:text-gray-700"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
          <circle
            className="text-primary-600"
            strokeWidth="8"
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{progress}%</span>
        </div>
      </div>
    );
  };

  const Sidebar = () => {
    const menuItems = [
      { id: 'me', label: 'Me', icon: HiUser },
      { id: 'notifications', label: 'Notifications', icon: HiBell },
      { id: 'settings', label: 'Settings', icon: HiCog },
      { id: 'book-courses', label: 'Book Courses', icon: HiBookOpen },
      { id: 'mentor', label: 'Mentor', icon: HiUserGroup },
      { id: 'theme', label: 'Theme', icon: isDarkMode ? HiSun : HiMoon, action: toggleTheme },
      { id: 'logout', label: 'Log out', icon: HiLogout, className: 'text-red-600 dark:text-red-400' }
    ];

    return (
      <div className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 h-screen fixed left-0 top-0 overflow-y-auto">
        {/* Logo */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <HiAcademicCap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">LANA</span>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={item.action}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${item.className || ''}`}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-6 py-3 flex justify-between items-center">
            {/* Welcome */}
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
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
        <main className="p-6">
          {/* Welcome Section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome back, {user.name}!
            </h2>
            <p className="text-gray-600 dark:text-gray-300 italic">"{randomQuote}"</p>
          </motion.div>

          {/* Progress Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Courses Enrolled */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setActivePopup('courses')}
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

            {/* Average Progress */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onClick={() => setActivePopup('progress')}
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

            {/* Upcoming Lessons */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md cursor-pointer hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => setActivePopup('upcoming')}
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

      {/* Popup Modals */}
      <AnimatePresence>
        {/* Courses Enrolled Popup */}
        {activePopup === 'courses' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Enrolled Courses</h3>
                <button onClick={() => setActivePopup(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <HiX className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{course.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Instructor: {course.instructor}</p>
                        </div>
                        <span className="text-sm text-primary-600 font-medium">{course.progress}% Complete</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-3">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                        <div>
                          <p>Lessons: {course.completedLessons}/{course.totalLessons}</p>
                          <p>Started: {course.startDate}</p>
                        </div>
                        <div>
                          <p>Estimated completion: {course.estimatedCompletion}</p>
                          <p>Category: {course.category}</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Button className="flex-1">Continue Learning</Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => handleQuitCourse(course.id)}
                        >
                          Quit Course
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Progress Popup */}
        {activePopup === 'progress' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Your Learning Progress</h3>
                <button onClick={() => setActivePopup(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <HiX className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">Overall Progress</p>
                  <div className="flex justify-center">
                    <ProgressChart progress={user.averageProgress} />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Progress by Category</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">Technology</span>
                          <span className="font-medium">72%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600 dark:text-gray-400">Science</span>
                          <span className="font-medium">20%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Weekly Activity</h4>
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600 dark:text-gray-400">This Week</span>
                        <span className="font-medium">8.5 hours</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600 dark:text-gray-400">Last Week</span>
                        <span className="font-medium">6.2 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full">View Detailed Analytics</Button>
              </div>
            </motion.div>
          </div>
        )}

        {/* Upcoming Lessons Popup */}
        {activePopup === 'upcoming' && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Upcoming Lessons</h3>
                <button onClick={() => setActivePopup(null)} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <HiX className="h-6 w-6" />
                </button>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingLessons.map((lesson) => (
                    <div key={lesson.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{lesson.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.course}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Instructor: {lesson.instructor}</p>
                        </div>
                        <span className="text-sm text-primary-600 font-medium">{lesson.time}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600 dark:text-gray-400">Duration: {lesson.duration}</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <HiClock className="h-4 w-4 mr-1" />
                            Set Reminder
                          </Button>
                          <Button size="sm">
                            Join Class
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center">
                    <HiLightningBolt className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                    <span className="text-sm text-blue-700 dark:text-blue-300">
                      Reminders are set 30 minutes before each lesson
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Button component (if not already imported)
const Button = ({ children, variant = 'primary', size = 'base', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    outline: 'border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700'
  };
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    base: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Dashboard;