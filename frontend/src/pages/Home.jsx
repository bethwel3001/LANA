import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard';
import { 
  HiGlobe, 
  HiChevronDown,
  HiDeviceMobile,
  HiLightningBolt,
  HiBookOpen,
  HiArrowRight,
  HiStar,
  HiQuestionMarkCircle,
  HiHand,
  HiCheck,
  HiHeart,
  HiX,
  HiMail} from 'react-icons/hi';
import { HiLockClosed } from "react-icons/hi";
const Counter = ({ value, duration = 1 }) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    let start = 0;
    const end = numericValue;
    if (start === end) return;
    let incrementTime = 90; // 90 milliseconds between increments
    let incrementValue = Math.ceil(end / (duration * 1000 / incrementTime));
    let timer = setInterval(() => {
      start += incrementValue;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [numericValue, duration]);

  return <span>{value.includes('%') ? `${count}%` : count.toLocaleString() + value.replace(/[0-9]/g, '')}</span>;
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    // Demo credentials check
    if (loginData.email === 'demo@lana.org' && loginData.password === 'lana@2025') {
      // Successful login
      setIsLoginModalOpen(false);
      setLoginError('');
      // Redirect to enroll page
      window.location.href = '/enroll';
    } else {
      setLoginError('Invalid credentials. Use demo@lana.org / lana@2025');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleStartLearning = () => {
    setIsLoginModalOpen(true);
  };
  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    message: "",
    rating: 0,
  });
  const courses = [
    {
      id: 1,
      title: 'Digital Literacy Fundamentals',
      description: 'Learn essential digital skills for the modern world',
      level: 'Beginner',
      duration: '4 weeks',
      students: 1200,
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      title: 'Coding for Kids',
      description: 'Introduce children to the basics of programming',
      level: 'Kids',
      duration: '8 weeks',
      students: 850,
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      title: 'Advanced Web Development',
      description: 'Master full-stack web development techniques',
      level: 'Advanced',
      duration: '12 weeks',
      students: 650,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const features = [
    {
      icon: <HiLightningBolt className="h-8 w-8 text-primary-600" />,
      title: 'Fast Learning',
      description: 'Bite-sized lessons designed for quick comprehension'
    },
    {
      icon: <HiGlobe className="h-8 w-8 text-primary-600" />,
      title: 'Accessible Anywhere',
      description: 'Learn from any device, even with low bandwidth'
    },
    {
      icon: <HiBookOpen className="h-8 w-8 text-primary-600" />,
      title: 'Rich Content',
      description: 'Videos, quizzes, and interactive exercises'
    },
    {
      icon: <HiDeviceMobile className="h-8 w-8 text-primary-600" />,
      title: 'Mobile Friendly',
      description: 'Optimized for smartphones and tablets'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'Students Enrolled' },
    { value: '200+', label: 'Expert Tutors' },
    { value: '15', label: 'African Countries' },
    { value: '98%', label: 'Satisfaction Rate' }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: 'Aisha Mohammed',
      role: 'Student, Nigeria',
      content: 'LANA helped me transition from basic computer skills to building my first website. The courses are practical and relevant to our African context.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 2,
      name: 'David Ochieng',
      role: 'Teacher, Kenya',
      content: 'As an educator, LANA has given me the tools to bring digital literacy to my students in rural areas. The platform is intuitive and works even with limited internet.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      rating: 5
    },
    {
      id: 3,
      name: 'Fatima Ndiaye',
      role: 'Parent, Senegal',
      content: 'My children are learning coding skills that I never had access to. LANA makes education fun and accessible for the next generation of African innovators.',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80',
      rating: 4
    }
  ];
  
    const handleStarClick = (rating) => {
      setNewTestimonial({ ...newTestimonial, rating });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // I want a nice responsive notification , not an alert!!
      alert(
        `Thank you ${newTestimonial.name}! Your testimonial with ${newTestimonial.rating} stars has been submitted.`
      );
      setIsOpen(false);
      setNewTestimonial({ name: "", message: "", rating: 0 });
    };
  // Partners data
  const partners = [
    {
      id: 1,
      name: 'African Union',
      logo: 'https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      description: 'Supporting digital education initiatives across Africa'
    },
    {
      id: 2,
      name: 'Tech4Africa',
      logo: 'https://images.unsplash.com/photo-1563014959-7aaa83350992?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      description: 'Promoting technology adoption in African communities'
    },
    {
      id: 3,
      name: 'EduFund',
      logo: 'https://images.unsplash.com/photo-1573164574230-db1d5e960238?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      description: 'Funding educational opportunities for African youth'
    },
    {
      id: 4,
      name: 'Digital Africa',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
      description: 'Building digital infrastructure for education'
    }
  ];

  // FAQ data
  const faqs = [
    {
      id: 1,
      question: 'How much does it cost to use LANA?',
      answer: 'LANA offers both free and premium courses. Our basic digital literacy courses are completely free, while specialized courses have affordable pricing options for African students.'
    },
    {
      id: 2,
      question: 'Do I need prior experience to start learning?',
      answer: 'No prior experience is needed! We offer courses for all levels - from complete beginners to advanced learners. Our platform is designed to guide you step by step.'
    },
    {
      id: 3,
      question: 'Can I access courses on my mobile phone?',
      answer: 'Absolutely! LANA is optimized for mobile devices and works well even with limited internet connectivity. You can download lessons for offline access too.'
    },
    {
      id: 4,
      question: 'How do I become a tutor on LANA?',
      answer: 'We welcome African educators to join our platform! You can apply through our Tutor Program page, and our team will guide you through the onboarding process.'
    },
    {
      id: 5,
      question: 'Are certificates provided after course completion?',
      answer: 'Yes, you receive a digital certificate upon completing any course. These certificates can be shared on professional networks and added to your resume.'
    }
  ];
  return (
    <div className="pt-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Sign In to LANA</h3>
              <button 
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1"
              >
                <HiX className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
            
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              {loginError && (
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-400 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm">
                  {loginError}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <div className="relative">
                  <HiMail className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
                <div className="relative">
                  <HiLockClosed className="absolute left-3 top-3 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-9 sm:pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white text-sm sm:text-base"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              
              <div className="text-xs sm:text-sm text-center">
                <p className="text-gray-600 dark:text-gray-400">
                  Demo credentials= Mail: demo@lana.org | Pass: lana@2025
                </p>
              </div>
            <Button type="submit" fullWidth={{ mobile: false, desktop: false }} className="justify-center max-w-[200px] mx-auto shadow-lg hover:shadow-xl transition-all duration-300">
                 Sign In
               </Button>
              
              <div className="text-center">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account?{' '}
                  <button type="button" className="text-primary-600 hover:text-primary-700 font-medium">
                    Sign up
                  </button>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      )}
{/* Hero Section - Full Screen with Background Image */}
<section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
  {/* Background Image with Overlay */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
      alt="Students learning together" 
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="flex flex-col items-center justify-center text-center min-h-[80vh] py-12">
      <motion.div 
        className="w-full max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Digital Education for <span className="text-primary-300">Africa's Future</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-100 mb-10 px-4 sm:px-0">
          LANA provides accessible, sustainable digital education to youth, kids, and tutors across Africa.
        </p>
        
        {/* Stacked Button Group for Mobile */}
        <div className="flex flex-col gap-4 w-full max-w-xs mx-auto sm:max-w-md">
          <Button 
            size={{ mobile: "lg", desktop: "xl" }}
            fullWidth={true}
            className="justify-center bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 py-3 sm:py-4"
            onClick={handleStartLearning}
          >
            Start Learning Now
          </Button>
          <a href="#about" className="w-full">
            <Button 
              variant="outline" 
              size={{ mobile: "lg", desktop: "xl" }}
              fullWidth={true}
              className="justify-center border-white text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 py-3 sm:py-4"
            >
              Learn More
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  </div>
  
  {/* Scroll Indicator */}
  <motion.div 
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.5 }}
  >
    <div className="flex flex-col items-center">
      <span className="text-sm mb-2">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <HiChevronDown className="h-6 w-6" />
      </motion.div>
    </div>
  </motion.div>
</section>
{/* Stats Section - Animated Counters */}
<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              See how LANA is transforming digital education across Africa
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-4 sm:p-6"
              >
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary-600 mb-2">
                  <Counter value={stat.value} duration={2} />
                </p>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="About LANA Education" 
                  className="rounded-lg shadow-xl w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
                About LANA
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6">
                LANA is an edtech platform dedicated to advancing Sustainable Development Goal 4 (Quality Education) 
                by providing digital literacy and skills training to youth, children, and educators across Africa.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <HiHand className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">To make quality digital education accessible to every African</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiHeart className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">An Africa where digital literacy empowers every community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiCheck className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Our Approach</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Contextualized learning designed for African challenges and opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose LANA?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              We're committed to sustainable education and digital literacy across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-3 sm:mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Collaborating with organizations that share our vision for digital education in Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md text-center flex flex-col items-center hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-2 sm:p-3">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Courses
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Explore our most popular courses designed for African learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-8 sm:mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/enroll">
              <Button 
                 size="lg"
                 icon={HiArrowRight}
                 iconPosition="right"
                 fullWidth={{ mobile: false, desktop: false }}
                 className="max-w-[200px] mx-auto justify-center"
               >
                 View All Courses
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              What Our Students Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Real stories from Africans who have transformed their lives through
              digital learning
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      className={`h-4 w-4 sm:h-5 sm:w-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic text-sm sm:text-base">
                  "{testimonial.content}"
                </p>
              </motion.div>
            ))}
          </div>

          {/* Testify Button */}
          <div className="text-center mt-8 sm:mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-xl bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-600 transition text-sm sm:text-base"
            >
              Share Your Testimony
            </motion.button>
          </div>

        {/* Popup Modal */}
        {isOpen && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 w-full max-w-md shadow-lg max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">
                Leave a Testimonial
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-sm sm:text-base"
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      name: e.target.value,
                    })
                  }
                  required
                />

                {/* Star Rating */}
                <div className="flex justify-center sm:justify-start space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      onClick={() => handleStarClick(i + 1)}
                      className={`h-6 w-6 sm:h-7 sm:w-7 cursor-pointer ${
                        i < newTestimonial.rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                    />
                  ))}
                </div>

                {/* Message */}
                <textarea
                  placeholder="Your message..."
                  rows="4"
                  className="w-full p-2 sm:p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 text-sm sm:text-base"
                  value={newTestimonial.message}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      message: e.target.value,
                    })
                  }
                  required
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3 sm:px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-3 sm:px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600 text-sm sm:text-base"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Find answers to common questions about LANA and our digital education platform
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                className="bg-neutral-50 dark:bg-gray-900 p-4 sm:p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <HiQuestionMarkCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/image.jpg"  
            alt="Background" 
            className="w-full h-full object-cover rounded-3xl"
          />
          {/* Enhanced overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/70 rounded-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/15 dark:bg-gray-900/25 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 border border-white/30 dark:border-gray-700/40 shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 drop-shadow-md">
              Join thousands of students across Africa who are advancing their digital skills with LANA
            </p>
            <Link to="/enroll">
              <Button 
                variant="secondary" 
                size="lg"
                fullWidth={{ mobile: false, desktop: false }}
                className="max-w-[200px] mx-auto justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;