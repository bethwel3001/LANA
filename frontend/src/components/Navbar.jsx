import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AuthContext from '../context/AuthContext';
import { useState, useEffect, useContext } from 'react';
import { 
  HiAcademicCap, 
  HiSun, 
  HiMoon, 
  HiMenu, 
  HiX
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

  // Close mobile menu when route changes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [window.location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Sticky Glassmorphism Navbar with Scroll Animation */}
      <motion.nav 
          className="fixed top-4 left-4 right-4 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/30 shadow-lg"
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
            {/* Logo - Hidden when mobile menu is open */}
            <motion.div
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
                scale: isMobileMenuOpen ? 0.8 : (isScrolled ? 0.9 : 1)
              }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/" className="flex items-center space-x-2 group">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <HiAcademicCap className="h-7 w-7 text-primary-600 group-hover:text-primary-700 transition-colors" />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors"
                >
                  LANA
                </motion.span>
              </Link>
            </motion.div>

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
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiX className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <HiMenu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Glassmorphism Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileMenu}
            />
            
            {/* Mobile Menu Content */}
            <motion.div
              className="fixed inset-4 z-50 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-md">
                {/* Glassmorphism Container */}
                <motion.div
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  {/* Close Button */}
                  <motion.button
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300"
                    onClick={toggleMobileMenu}
                    aria-label="Close menu"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <HiX className="h-6 w-6" />
                  </motion.button>
                  
                  {/* Navigation Items */}
                  <nav className="flex flex-col space-y-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ 
                          delay: 0.2 + (index * 0.1),
                          duration: 0.4 
                        }}
                      >
                        <a
                          href={item.path}
                          className="block text-2xl font-medium text-center text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 transition-colors"
                          onClick={toggleMobileMenu}
                        >
                          {item.name}
                        </a>
                      </motion.div>
                    ))}
                    
                    {/* Theme Toggler for Mobile */}
                    <motion.div
                      className="flex justify-center pt-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.2 + (navItems.length * 0.1),
                        duration: 0.4 
                      }}
                    >
                      <motion.button
                        onClick={toggleTheme}
                        className="p-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-700/80 transition-colors shadow-sm"
                        aria-label="Toggle theme"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {isDarkMode ? (
                          <HiSun className="h-6 w-6 text-secondary-500" />
                        ) : (
                          <HiMoon className="h-6 w-6 text-gray-600" />
                        )}
                      </motion.button>
                    </motion.div>
                  </nav>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;