import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { useState } from 'react';
import ButtonGroup from '../components/ButtonGroup';
import CourseCard from '../components/CourseCard';
import { 
  HiAcademicCap, 
  HiUsers, 
  HiGlobe, 
  HiDeviceMobile,
  HiLightningBolt,
  HiBookOpen,
  HiArrowRight,
  HiStar,
  HiQuestionMarkCircle,
  HiHand,
  HiChat,
  HiCheck,
  HiUserGroup,
  HiOfficeBuilding,
  HiHeart
} from 'react-icons/hi';

const Home = () => {
  // Sample courses data
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
    const [isOpen, setIsOpen] = useState(false);
    const [newTestimonial, setNewTestimonial] = useState({
      name: "",
      message: "",
      rating: 0,
    });
  
    const handleStarClick = (rating) => {
      setNewTestimonial({ ...newTestimonial, rating });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
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
      {/* Hero Section */}
    <div className="pt-20"> 
      {/* Hero Section */}
      <section id="home" className="relative py-16 md:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Digital Education for <span className="text-primary-600">Africa's Future</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                LANA provides accessible, sustainable digital education to youth, kids, and tutors across Africa.
              </p>
              
              {/* Responsive Button Group */}
              <ButtonGroup responsive={true} className="gap-3 sm:gap-4">
                <Link to="/enroll" className="flex-1 sm:flex-none">
                  <Button 
                    size={{ mobile: 'base', desktop: 'lg' }} 
                    fullWidth={{ mobile: true, desktop: false }}
                    className="justify-center"
                  >
                    Start Learning
                  </Button>
                </Link>
                <a href="#about">
                  <Button 
                    variant="outline" 
                    size={{ mobile: 'base', desktop: 'lg' }} 
                    fullWidth={{ mobile: true, desktop: false }}
                    className="justify-center"
                  >
                    Learn More
                  </Button>
                </a>
              </ButtonGroup>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Students learning together" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-600">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="About LANA Education" 
                className="rounded-lg shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                About LANA
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                LANA is an edtech platform dedicated to advancing Sustainable Development Goal 4 (Quality Education) 
                by providing digital literacy and skills training to youth, children, and educators across Africa.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HiHand className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Our Mission</h3>
                    <p className="text-gray-600 dark:text-gray-400">To make quality digital education accessible to every African</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiHeart className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Our Vision</h3>
                    <p className="text-gray-600 dark:text-gray-400">An Africa where digital literacy empowers every community</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <HiCheck className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Our Approach</h3>
                    <p className="text-gray-600 dark:text-gray-400">Contextualized learning designed for African challenges and opportunities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose LANA?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to sustainable education and digital literacy across Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-5 md:p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-100 dark:bg-primary-900/30 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 md:py-20 bg-neutral-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Partners
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Collaborating with organizations that share our vision for digital education in Africa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <motion.div 
                key={partner.id}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center p-3">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {partner.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Courses
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our most popular courses designed for African learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {courses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>

          <motion.div 
            className="text-center mt-10 md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/enroll">
              <Button 
                size={{ mobile: 'base', desktop: 'lg' }}
                icon={HiArrowRight}
                iconPosition="right"
                fullWidth={{ mobile: true, desktop: false }}
                className="max-w-xs mx-auto justify-center"
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
      className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real stories from Africans who have transformed their lives through
            digital learning
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <HiStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testify Button */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 rounded-xl bg-yellow-500 text-white font-semibold shadow-md hover:bg-yellow-600 transition"
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
              className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md shadow-lg"
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
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
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
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <HiStar
                      key={i}
                      onClick={() => handleStarClick(i + 1)}
                      className={`h-7 w-7 cursor-pointer ${
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
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
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
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-yellow-500 text-white font-semibold hover:bg-yellow-600"
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
      <section id="faq" className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about LANA and our digital education platform
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={faq.id}
                className="bg-neutral-50 dark:bg-gray-900 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <HiQuestionMarkCircle className="h-6 w-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Learning Journey?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-6 md:mb-8 max-w-3xl mx-auto">
              Join thousands of students across Africa who are advancing their digital skills with LANA
            </p>
            <Link to="/enroll">
              <Button 
                variant="secondary" 
                size={{ mobile: 'lg', desktop: 'xl' }}
                fullWidth={{ mobile: true, desktop: false }}
                className="max-w-xs mx-auto justify-center"
              >
                Enroll Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;