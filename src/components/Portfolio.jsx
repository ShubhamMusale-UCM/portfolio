import React, { useState, useEffect } from 'react';
import { Monitor, Database, Code, Award, ArrowRight, ExternalLink, BookOpen, Palette, Globe, Users, Star, Github, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

// Data Objects
const designExperience = {
  stats: [
    { value: "2023", label: "Started Freelancing", icon: Award },
    { value: "2", label: "Countries Served", icon: Globe },
    { value: "100%", label: "Client Satisfaction", icon: Star },
    { value: "250+", label: "Projects Completed", icon: Users }
  ],
  services: [
    {
      title: "Brand Identity",
      description: "Creating cohesive visual identities that reflect brand values and resonate with target audiences.",
      tools: ["Ideogram", "Figma", "Sketch"],
      icon: Palette
    },
    {
      title: "Marketing Materials",
      description: "Designing engaging promotional content for digital and print campaigns.",
      tools: ["Ideogram", "InDesign", "Canva"],
      icon: Monitor
    },
    {
      title: "Social Media Graphics",
      description: "Crafting eye-catching visuals optimized for various social platforms.",
      tools: ["Canva", "Capcut"],
      icon: ExternalLink
    }
  ]
};

const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Java", level: 85 },
    { name: "C++", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "R", level: 70 }
  ],
  data: [
    { name: "MongoDB", level: 85 },
    { name: "Firebase", level: 80 },
    { name: "SQL", level: 85 },
    { name: "Oracle", level: 75 },
    { name: "MariaDB", level: 70 }
  ],
  aiml: [
    { name: "Scikit-learn", level: 85 },
    { name: "NLP", level: 80 },
    { name: "OpenCV", level: 75 },
    { name: "YOLOv8", level: 80 },
    { name: "Hugging Face", level: 75 }
  ]
};

const certifications = [
  {
    title: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2024",
    topics: ["AI", "Python", "R", "Scikit-learn"],
    icon: BookOpen
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "2024",
    topics: ["ML Fundamentals", "Algorithms"],
    icon: Database
  },
  {
    title: "Java Industrial Training",
    issuer: "Vishwakarma Institute",
    date: "2023",
    topics: ["MVC Architecture", "Eclipse IDE", "GUI Development"],
    icon: Code
  }
];

// Updated Projects Array
const projects = [
  {
    title: "StudyGears",
    category: "Educational Platform",
    description: "A comprehensive learning management system featuring custom courses, task management, referral system, and reward system.",
    image: "src/publicImages/studygears.png" ,
    tags: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-blue-500 to-cyan-500",
    githubLink: "https://github.com/ShubhamMusale-UCM/StudyGears_ForU"
  },
  {
    title: "Vaccine Management System",
    category: "Desktop Application",
    description: "The system features user management, vaccine tracking, and a desktop application with role-based access and inventory management.",
    image: "src/publicImages/VMS.png",
    tags: ["Eclipse", "Java", "MVC Architecture"],
    gradient: "from-purple-500 to-pink-500",
    githubLink: "https://github.com/ShubhamMusale-UCM/VMS"
  },
  {
    title: "Student Behavior Detection",
    category: "AI/ML Application",
    description: "Real-time abnormal behavior detection system using YOLOv8 and custom data training for exam monitoring.",
    image: "src/publicImages/abnormal studenet.png",
    tags: ["Python", "OpenCV", "YOLOv8", "CNN"],
    gradient: "from-purple-500 to-pink-500"
  },

  {
    title: "Cafe Management System",
    category: "Desktop Application",
    description: "Cafe management system with live order tracking, food preparation progress updates, and automated billing.",
    image: "src/publicImages/CAFE management.png",
    tags: ["Eclipse", "Java", "MVC"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Steganography Calculator",
    category: "Security Application",
    description: "Android calculator with hidden encryption capabilities, featuring text steganography and planned image/audio features.",
    image: "src/publicImages/CAlculator.png",
    tags: ["Android", "Java", "Encryption"],
    gradient: "from-green-500 to-teal-500"
  }
];

// Helper function to get skill tags
const getSkillTags = (skillName) => {
  const skillTags = {
    Python: ['Data Science', 'AI/ML'],
    JavaScript: ['Frontend', 'Node.js', 'React'],
    Java: ['Backend', 'Android', 'WindowBuilder '],
    'C++': ['Systems', 'Algorithms', 'Performance'],
    'Node.js': ['Backend', 'API', 'Express'],
    R: ['Statistics', 'Data Analysis', 'Visualization'],
    MongoDB: ['NoSQL', 'Database', 'Backend'],
    Firebase: ['Android', 'Real-time', 'Cloud'],
    SQL: ['Database', 'Query', 'RDBMS'],
    Oracle: ['Enterprise', 'Database', 'PL/SQL'],
    MariaDB: ['Database', 'MySQL'],
    'Scikit-learn': ['ML', 'Data Science', 'Python'],
    NLP: ['Sentiment Analysis', 'AI', 'Processing'],
    OpenCV: ['Computer Vision', 'Image Processing', 'AI'],
    YOLOv8: ['Object Detection', 'Computer Vision', 'Deep Learning'],
    'Hugging Face': ['Transformers', 'NLP', 'ML Models']
  };
  return skillTags[skillName] || ['General'];
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Card Components
const Card = ({ children, className = "" }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className={`bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
  >
    {children}
  </motion.div>
);

const CardHeader = ({ children, className = "" }) => (
  <motion.div
    variants={fadeInUp}
    className={`p-6 border-b border-gray-100 ${className}`}
  >
    {children}
  </motion.div>
);
// Modified Project Card
// ProjectCard Component
const ProjectCard = ({ project }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="relative overflow-hidden">
      <img
  src={import.meta.env.BASE_URL + project.image} // Fix the concatenation here
  alt={project.title}
  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
/>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="p-6">
      <span className="text-sm text-gray-500">{project.category}</span>
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="px-3 py-1 bg-green-50 text-green-600 text-sm rounded-full transform transition-transform hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all"
        >
          View Project <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </div>
  </motion.div>
);

// Skill Card
const SkillCard = ({ skill }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="group bg-white p-4 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
  >
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <span className="font-medium text-gray-800">{skill.name}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {getSkillTags(skill.name).map((tag, tagIndex) => (
          <span
            key={tagIndex}
            className="inline-block px-3 py-1 text-sm bg-white text-blue-600 rounded-full border border-blue-200 hover:border-blue-400 transition-colors transform hover:scale-105"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Certification Card
const CertificationCard = ({ cert }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
        <cert.icon className="w-6 h-6 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-lg">{cert.title}</h3>
        <p className="text-sm text-gray-500">{cert.issuer} • {cert.date}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-2">
      {cert.topics.map((topic, topicIndex) => (
        <span
          key={topicIndex}
          className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full transform transition-transform hover:scale-105"
        >
          {topic}
        </span>
      ))}
    </div>
  </motion.div>
);

// Service Card
const ServiceCard = ({ service }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="group relative transform hover:-translate-y-1"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-indigo-50 rounded-xl group-hover:bg-indigo-100 transition-colors">
          <service.icon className="w-6 h-6 text-indigo-600" />
        </div>
        <h3 className="text-xl font-semibold">{service.title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <div className="flex flex-wrap gap-2">
        {service.tools.map((tool, toolIndex) => (
          <span
            key={toolIndex}
            className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full transform transition-transform hover:scale-105"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

// Stat Card
const StatCard = ({ stat }) => (
  <motion.div
    variants={fadeInUp}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
    className="relative group transform hover:-translate-y-1"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="flex items-center gap-4 mb-3">
        <stat.icon className="w-6 h-6 text-indigo-600" />
        <h4 className="font-bold text-3xl text-gray-800">{stat.value}</h4>
      </div>
      <p className="text-gray-600">{stat.label}</p>
    </div>
  </motion.div>
);
const CardTitle = ({ children, className = "" }) => (
  <motion.h3
    variants={fadeInUp}
    className={`text-2xl font-bold text-gray-800 ${className}`}
  >
    {children}
  </motion.h3>
);

const CardContent = ({ children, className = "" }) => (
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className={`p-6 ${className}`}
  >
    {children}
  </motion.div>
);

// Section Title Component
const SectionTitle = ({ title, subtitle, color }) => (
  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="text-center mb-12"
  >
    <motion.div
      variants={scaleIn}
      className="flex items-center justify-center gap-2 mb-4"
    >
      <div className={`h-1 w-12 ${color} rounded-full`} />
      <span className={`${color.replace('bg-', 'text-')} font-semibold`}>{subtitle}</span>
      <div className={`h-1 w-12 ${color} rounded-full`} />
    </motion.div>
    <motion.h2
      variants={fadeInUp}
      className="text-4xl font-bold text-gray-800"
    >
      {title}
    </motion.h2>
  </motion.div>
);

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState({});
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-lg"
        >
          <ul className="flex space-x-8 text-sm">
            {['About', 'Skills', 'Projects', 'Experience'].map((item) => (
              <li key={item}>
                <button
                  className={`relative font-medium transition-colors duration-300
                    ${activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                  onClick={() => {
                    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.toLowerCase());
                  }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>

      {/* Hero Section */}
<section id="about" className="min-h-screen flex items-center justify-center py-20 px-4">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="container mx-auto"
  >
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
      <div className="w-full md:w-1/2 space-y-6 order-2 md:order-1">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2" />
            <span className="text-sm text-blue-600 font-medium">Available for opportunities</span>
          </div>

          <h1 className="text-4xl md:text-8xl font-bold flex flex-wrap justify-center md:justify-start">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mr-4 text-5xl md:text-8xl">
              Shubham
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-5xl md:text-8xl">
              Musale
            </span>
          </h1>
        </motion.div>

        {/* Mobile Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-60 mx-auto md:hidden flex flex-col items-center justify-center text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-2xl rounded-full" />
            </div>
            <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square">
              <img
                src={import.meta.env.BASE_URL + "src/publicImages/IMG_20240511_172116~2.jpg" }
                alt="Profile"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-600 leading-relaxed"
        >
          Highly motivated IT professional with expertise in AI, data science, software development, and graphic designing, skilled in Backend and proficient in various tools.
        </motion.p>

        {/* New Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col space-y-3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="group px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            >
              <span className="flex items-center gap-2">
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <div className="flex gap-4">
              <a
                href="https://github.com/ShubhamMusale-UCM"
                className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-musale-a1425722a"
                className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-700" />
              </a>
            </div>
            
            {/* Contact Button */}
            <div className="group relative inline-block">
              <button
                onClick={() => setIsContactVisible(!isContactVisible)}
                className="px-6 py-2 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200 transition-colors duration-300 flex items-center gap-2"
              >
                <span>Contact Me</span>
                <motion.span
                  animate={{ rotate: isContactVisible ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ↓
                </motion.span>
              </button>

              {/* Contact Info */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: isContactVisible ? "auto" : 0,
                  opacity: isContactVisible ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {isContactVisible && (
                  <div className="mt-2 px-6 py-3 bg-white rounded-lg shadow-md border border-purple-100">
                    <p className="text-gray-700 font-medium">+91 8485856618</p>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Desktop Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden md:block w-5/12 order-1 md:order-2"
      >
        <div className="relative mx-auto">
          <div className="absolute -inset-4">
            <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-2xl rounded-full" />
          </div>
          <div className="relative rounded-full overflow-hidden border-4 border-white shadow-xl aspect-square">
            <img
              src="src/publicImages/IMG_20240511_172116~2.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </motion.div>
    </div>
  </motion.div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-6"
        >
          <SectionTitle
            title="Technical Skills"
            subtitle="My Expertise"
            color="bg-blue-600"
          />

          <Card>
            <CardContent>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(skills).map(([category, skillSet], index) => (
                  <motion.div
                    key={category}
                    variants={fadeInUp}
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                      {category.toUpperCase()}
                    </h3>
                    <div className="grid gap-4">
                      {skillSet.map((skill, skillIndex) => (
                        <SkillCard key={skillIndex} skill={skill} />

                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>


      {/* Certifications Section */}
      <section id="certifications" className="py-16 md:py-20 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-6"
        >
          <SectionTitle
            title="Certifications"
            subtitle="Professional Development"
            color="bg-purple-600"
          />

          <Card>
            <CardContent>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <CertificationCard key={index} cert={cert} />

                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-6"
        >
          <SectionTitle
            title="Recent Projects"
            subtitle="Featured Work"
            color="bg-green-600"
          />

          <Card>
            <CardContent>
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-6"
        >
          <SectionTitle
            title="Design Experience"
            subtitle="Professional Journey"
            color="bg-indigo-600"
          />

          <Card>
            <CardContent className="space-y-16">
              {/* Stats Grid */}
              <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {designExperience.stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} />

                ))}
              </motion.div>

              {/* Services Grid */}
              <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {designExperience.services.map((service, index) => (
                  <ServiceCard key={index} service={service} />
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
