import React from 'react';
import { motion } from 'framer-motion';
import { HiUsers, HiClock, HiAcademicCap } from 'react-icons/hi';

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="h-48 overflow-hidden">
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
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {course.description}
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
            <HiAcademicCap className="h-4 w-4 mr-1" />
            {course.level}
          </span>
          <span className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400">
            <HiClock className="h-4 w-4 mr-1" />
            {course.duration}
          </span>
        </div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <HiUsers className="h-4 w-4 mr-1" />
          {course.students.toLocaleString()} students enrolled
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;