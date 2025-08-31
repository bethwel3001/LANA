import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'base', 
  className = '', 
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  animate,
  ...props 
}) => {
  // Base classes that apply to all buttons
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant classes
  const variants = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white focus:ring-primary-500 active:bg-primary-800',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-gray-900 focus:ring-secondary-400 active:bg-secondary-700',
    outline: 'border border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800 focus:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:ring-gray-500',
    text: 'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 focus:ring-primary-500 bg-transparent hover:bg-primary-50 dark:hover:bg-gray-800'
  };
  
  // Handle responsive size configuration
  const getSizeClass = (sizeConfig) => {
    if (typeof sizeConfig === 'string') {
      // Single size for all devices
      return sizes[sizeConfig] || sizes.base;
    } else if (typeof sizeConfig === 'object') {
      // Responsive sizes: { mobile: 'base', desktop: 'lg' }
      const mobileSize = sizeConfig.mobile || 'base';
      const desktopSize = sizeConfig.desktop || mobileSize;
      return `${sizes[mobileSize]} sm:${sizes[desktopSize].replace(/\s+/g, ' sm:')}`;
    }
    return sizes.base;
  };
  
  // Handle responsive fullWidth configuration
  const getWidthClass = (widthConfig) => {
    if (typeof widthConfig === 'boolean') {
      return widthConfig ? 'w-full' : '';
    } else if (typeof widthConfig === 'object') {
      // Responsive width: { mobile: true, desktop: false }
      const mobileWidth = widthConfig.mobile ? 'w-full' : '';
      const desktopWidth = widthConfig.desktop ? 'sm:w-full' : 'sm:w-auto';
      return `${mobileWidth} ${desktopWidth}`;
    }
    return '';
  };
  
  // Size classes - optimized for mobile with touch-friendly sizes
  const sizes = {
    xs: 'px-2 py-1 text-xs min-h-[28px]',
    sm: 'px-2.5 py-1.5 text-xs min-h-[32px]',
    base: 'px-3 py-2 text-sm min-h-[36px]',
    lg: 'px-4 py-2.5 text-sm min-h-[40px]',
    xl: 'px-5 py-3 text-base min-h-[44px]'
  };
  
  // Get the appropriate size class
  const sizeClass = getSizeClass(size);
  
  // Get the appropriate width class
  const widthClass = getWidthClass(fullWidth);
  
  // Icon size classes based on button size
  const getIconSizeClass = (sizeConfig) => {
    let baseSize = 'base';
    if (typeof sizeConfig === 'string') {
      baseSize = sizeConfig;
    } else if (typeof sizeConfig === 'object') {
      baseSize = sizeConfig.mobile || 'base';
    }
    
    const iconSizes = {
      xs: 'h-3.5 w-3.5',
      sm: 'h-4 w-4',
      base: 'h-4 w-4',
      lg: 'h-5 w-5',
      xl: 'h-5 w-5'
    };
    
    return iconSizes[baseSize] || iconSizes.base;
  };
  
  const iconSizeClass = getIconSizeClass(size);
  const iconClass = `${iconSizeClass} ${iconPosition === 'left' ? 'mr-1.5' : 'ml-1.5'}`;
  
  const classes = `${baseClasses} ${variants[variant]} ${sizeClass} ${widthClass} ${className}`;

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
      {...(animate && { animate })}
    >
      {Icon && iconPosition === 'left' && <Icon className={iconClass} />}
      <span className="truncate">{children}</span>
      {Icon && iconPosition === 'right' && <Icon className={iconClass} />}
    </motion.button>
  );
};

export default Button;