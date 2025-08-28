import React from 'react';
import { motion } from 'framer-motion';

const IconButton = ({ 
  icon: Icon, 
  size = 'base', 
  variant = 'primary',
  className = '',
  label,
  ...props 
}) => {
  // Base classes
  const baseClasses = 'inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant classes
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 active:bg-primary-800',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-gray-900 focus:ring-secondary-400 active:bg-secondary-700',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800 focus:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:ring-gray-500',
    text: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 focus:ring-primary-500 bg-transparent hover:bg-primary-50 dark:hover:bg-gray-800'
  };
  
  // Size classes - optimized for touch targets on mobile
  const sizes = {
    xs: 'p-1.5 min-w-[32px] min-h-[32px]',
    sm: 'p-2 min-w-[36px] min-h-[36px]',
    base: 'p-2.5 min-w-[40px] min-h-[40px]',
    lg: 'p-3 min-w-[48px] min-h-[48px]',
    xl: 'p-3.5 min-w-[52px] min-h-[52px]'
  };
  
  // Icon sizes
  const iconSizes = {
    xs: 'h-3.5 w-3.5',
    sm: 'h-4 w-4',
    base: 'h-5 w-5',
    lg: 'h-6 w-6',
    xl: 'h-6 w-6'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={classes}
      aria-label={label}
      {...props}
    >
      <Icon className={iconSizes[size]} />
    </motion.button>
  );
};

export default IconButton;