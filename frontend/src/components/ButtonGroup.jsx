import React from 'react';

const ButtonGroup = ({ 
  children, 
  orientation = 'horizontal',
  className = '',
  responsive = true
}) => {
  const baseClasses = 'flex';
  
  const orientationClasses = orientation === 'horizontal' 
    ? 'flex-row' 
    : 'flex-col';
  
  const responsiveClasses = responsive 
    ? 'flex-col sm:flex-row' 
    : orientationClasses;
  
  const classes = `${baseClasses} ${responsiveClasses} ${className}`;

  return (
    <div className={classes}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Add specific classes based on position in group
          let spacingClass = '';
          
          if (responsive) {
            if (orientation === 'horizontal') {
              spacingClass = index !== 0 ? 'mt-2 sm:mt-0 sm:ml-2' : '';
            } else {
              spacingClass = index !== 0 ? 'mt-2' : '';
            }
          } else {
            if (orientation === 'horizontal') {
              spacingClass = index !== 0 ? 'ml-2' : '';
            } else {
              spacingClass = index !== 0 ? 'mt-2' : '';
            }
          }
          
          return React.cloneElement(child, {
            className: `${child.props.className || ''} ${spacingClass}`
          });
        }
        return child;
      })}
    </div>
  );
};

export default ButtonGroup;