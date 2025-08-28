import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
  return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for saved preferences on initial load
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('lana_user'));
    const savedTheme = localStorage.getItem('lana_theme') === 'dark';
    
    if (savedUser) setUser(savedUser);
    setIsDarkMode(savedTheme);
    setIsLoading(false);
  }, []);

  // Update theme when isDarkMode changes
  useEffect(() => {
    localStorage.setItem('lana_theme', isDarkMode ? 'dark' : 'light');
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('lana_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('lana_user');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const value = {
    user,
    login,
    logout,
    isDarkMode,
    toggleTheme,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

// Export the context as default
export default AuthContext;