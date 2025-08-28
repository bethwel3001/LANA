import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthContext from '../context/AuthContext';
import Button from './Button';
import { useState, useEffect, useContext } from 'react';
import { 
  HiAcademicCap, 
  HiSun, 
  HiMoon, 
  HiMenu, 
  HiX,
  HiSparkles
} from 'react-icons/hi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { isDarkMode, toggleTheme } = useContext(AuthContext);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Partners', path: '/#partners' },
    { name: 'Testimonials', path: '/#testimonials' },
    { name: 'FAQ', path: '/#faq' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Detect scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY && currentScrollY < 50) {
        // Scrolling up near top
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Sticky Glassmorphism Navbar with Scroll Animation */}
      <motion.nav 
          className="fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-transparent border border-white/20 dark:border-gray-700/30 shadow-lg"
          initial={{ y: -100, borderRadius: "9999px" }}
          animate={{ 
            y: 0, 
            borderRadius: isScrolled ? "9999px" : "12px",
            paddingTop: isScrolled ? "0.5rem" : "0.75rem",
            paddingBottom: isScrolled ? "0.5rem" : "0.75rem"
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center justify-between"
            animate={{
              scale: isScrolled ? 0.95 : 1
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                animate={{
                  scale: isScrolled ? 0.9 : 1
                }}
              >
                <HiAcademicCap className="h-7 w-7 text-primary-600 group-hover:text-primary-700 transition-colors" />
              </motion.div>
              <motion.span 
                className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors"
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                  opacity: isScrolled ? 0.9 : 1
                }}
              >
                LANA
              </motion.span>
            </Link>

            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex items-center space-x-4"
              animate={{
                gap: isScrolled ? "0.75rem" : "1rem"
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium transition-colors relative"
                  whileHover={{ y: -2 }}
                  animate={{
                    fontSize: isScrolled ? "0.875rem" : "1rem",
                    padding: isScrolled ? "0.25rem 0.5rem" : "0.5rem 0.75rem"
                  }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300"
                    whileHover={{ width: "100%" }}
                  />
                </motion.a>
              ))}
            </motion.div>

            {/* Right side actions */}
            <motion.div 
              className="hidden md:flex items-center space-x-3"
              animate={{
                gap: isScrolled ? "0.5rem" : "0.75rem"
              }}
            >
              {/* Theme Toggler */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors shadow-sm"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: isScrolled ? 0.9 : 1,
                  padding: isScrolled ? "0.4rem" : "0.5rem"
                }}
              >
                {isDarkMode ? (
                  <HiSun className="h-4 w-4 text-secondary-500" />
                ) : (
                  <HiMoon className="h-4 w-4 text-gray-600" />
                )}
              </motion.button>

              {/* Explore Button */}
              <Link to="/enroll">
                <motion.div
                  animate={{
                    scale: isScrolled ? 0.9 : 1
                  }}
                >
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                    animate={{
                      padding: isScrolled ? "0.4rem 0.8rem" : "0.5rem 1rem",
                      fontSize: isScrolled ? "0.75rem" : "0.875rem"
                    }}
                  >
                    <HiSparkles className="h-3.5 w-3.5 mr-1" />
                    Explore
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Mobile menu button - becomes smaller when scrolled */}
            <motion.button
              className="md:hidden p-2 rounded-md bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{
                scale: isScrolled ? 0.9 : 1,
                padding: isScrolled ? "0.4rem" : "0.5rem"
              }}
            >
              {isMobileMenuOpen ? (
                <HiX className="h-5 w-5" />
              ) : (
                <HiMenu className="h-5 w-5" />
              )}
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu with Glassmorphism */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl z-50 md:hidden border-l border-white/20 dark:border-gray-700/30"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/20 dark:border-gray-700/30">
                  <Link to="/" className="flex items-center space-x-2" onClick={toggleMobileMenu}>
                    <HiAcademicCap className="h-7 w-7 text-primary-600" />
                    <span className="text-lg font-bold text-primary-600">LANA</span>
                  </Link>
                  <button onClick={toggleMobileMenu} className="p-1">
                    <HiX className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-4">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.path}
                        className="block text-base font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 py-2 transition-colors"
                        onClick={toggleMobileMenu}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.a>
                    ))}
                  </div>
                </nav>

                {/* Footer Actions */}
                <div className="p-4 border-t border-white/20 dark:border-gray-700/30 space-y-3">
                  {/* Theme Toggler */}
                  <motion.button
                    onClick={toggleTheme}
                    className="flex items-center w-full p-2 rounded-lg bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {isDarkMode ? (
                      <>
                        <HiSun className="h-4 w-4 text-secondary-500 mr-2" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <HiMoon className="h-4 w-4 text-gray-600 mr-2" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </motion.button>

                  {/* Explore Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Link to="/enroll" onClick={toggleMobileMenu}>
                      <Button 
                        fullWidth 
                        size="sm"
                        className="justify-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-sm"
                      >
                        <HiSparkles className="h-3.5 w-3.5 mr-1" />
                        Explore Courses
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;