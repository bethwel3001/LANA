import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../context/AuthContext';
import { 
  HiX, 
  HiAcademicCap, 
  HiUserCircle,
  HiSun,
  HiMoon
} from 'react-icons/hi';
import Button from './Button';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { user, logout, isDarkMode, toggleTheme } = useContext(AuthContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Overview', path: '/#overview' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
    { name: 'Partners', path: '/#partners' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            onClick={toggleMenu}
          />
          
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg z-50 md:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
                <Link to="/" className="flex items-center space-x-2" onClick={toggleMenu}>
                  <HiAcademicCap className="h-8 w-8 text-primary-600" />
                  <span className="text-xl font-bold text-primary-600">LANA</span>
                </Link>
                <button onClick={toggleMenu} className="p-1">
                  <HiX className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="block py-2 text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t dark:border-gray-700 space-y-4">
                {/* Theme Toggler */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center w-full p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {isDarkMode ? (
                    <>
                      <HiSun className="h-5 w-5 text-secondary-500 mr-3" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <HiMoon className="h-5 w-5 text-gray-600 mr-3" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>

                {/* Auth buttons */}
                {user ? (
                  <div className="space-y-2">
                    <Link to="/dashboard" onClick={toggleMenu}>
                      <Button variant="outline" className="w-full justify-center">
                        <HiUserCircle className="h-5 w-5 mr-1" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full" onClick={logout}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button className="w-full">Sign Up</Button>
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;