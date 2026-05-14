"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, Variants } from "framer-motion";
import { 
  Mail, 
  Phone, 
  ExternalLink, 
  Calendar,
  Briefcase,
  GraduationCap,
  Trophy,
  Code2,
  Sun,
  Moon
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// --- Theme Toggle Component ---
function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-6 right-6 z-50 p-3 rounded-full glass-card hover:scale-110 transition-transform duration-200 text-slate-800 dark:text-slate-200"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}

// --- Data ---
const experienceData = [
  {
    role: "Backend Developer",
    company: "LIVE2.AI",
    date: "April 2025 -- Present",
    points: [
      "Architected a scalable end-to-end content curation pipeline backend integrating 8+ AI/ML modules (VLM, OCR, sentiment analysis, music classification, language detection) with Temporal-based concurrency control and LLM EVALS framework, cutting manual curation effort by 60%.",
      "Engineered a multitenant Microsoft SSO login system with seamless backend and frontend integration, enabling secure and frictionless login for 500+ users across multiple organizations, reducing login friction by 45%.",
      "Developed and optimized the Live2AI admin analytics dashboard with real-time data rendering, live state management, and efficient pagination, reducing data load time by 35% and improving efficiency by 40%.",
      "Built an intelligent hashtag recommendation engine with post-volume classification and developed several RESTful APIs powering the AI Social Wall on Live2.ai dashboard, enabling brands to curate real-time UGC content and boosting audience engagement by 30%.",
    ],
    stack: "Typescript, NextJS, FastAPI, Kafka, MongoDB, Redis, Temporal, Docker, LM Studio, Git",
  },
  {
    role: "Backend Developer",
    company: "NYUN AI",
    date: "May 2024 -- November 2024",
    points: [
      "Designed and developed a scalable backend architecture, enhancing request handling efficiency by 30% and supporting 100+ model compression and fine-tuning operations daily.",
      "Implemented and secured authentication & authorization using JWT, ensuring 99.9% uptime, protecting 100% of user sessions, and enabling role-based access control for 500+ concurrent users.",
      "Engineered and optimized RESTful APIs, reducing API response time by 25%, improving model upload speed by 40%, and integrating Google Cloud Storage for seamless model storage and retrieval.",
    ],
    stack: "NodeJS, ExpressJS, JWT, Google Cloud Platform (GCP), Docker, RESTful API, Git",
  },
  {
    role: "Full Stack Developer",
    company: "CREATOR CLUB",
    date: "January 2024 -- April 2024",
    points: [
      "Spearheaded the integration of key backend features including Instagram and Facebook login, mobile number verification, and Canny setup, resulting in a 30% increase in user registration efficiency.",
      "Implemented a subscription management system using RevenueCat, leading to a 25% growth in recurring revenue within the first month.",
      "Developed a robust recommendation system and designed an intuitive UI for new screens, enhancing user engagement by 50% and contributing to a 20% improvement in user retention.",
      "Contributed to a 40% increase in the user base through strategic feature enhancements and optimizations that enriched app functionality and user experience.",
    ],
    stack: "Flutter, Dart, NodeJS, Firebase, Google Cloud Platform, Cloud Functions, Codemagic",
  },
  {
    role: "Software Engineer Intern",
    company: "ARV|BIND SYSTEMS",
    date: "July 2023 -- December 2023",
    points: [
      "Developed and maintained the front end of a comprehensive KYC application using React and Redux, optimizing user experience and performance, resulting in a 40% faster load time and supporting 10K+ daily users.",
      "Designed and implemented intuitive UI components, including dynamic data capture forms with text and image uploads, reducing form submission errors by 35% and increasing user input efficiency by 50%.",
      "Integrated front-end components with backend APIs, enabling efficient data transfer and reducing API response time by 25%, ensuring seamless operation for 100K+ transactions monthly.",
      "Collaborated with cross-functional teams to refine project requirements, streamlining workflows and accelerating feature deployment by 30%, while maintaining 99.9% uptime.",
    ],
    stack: "JavaScript, TypeScript, ReactJS, TailwindCSS, Redux, Git",
  }
];

const educationData = [
  {
    degree: "Integrated Master of Technology in Mathematics and Computing",
    institution: "Indian Institute of Technology Dhanbad",
    date: "July 2019 -- May 2024",
    details: "Admission through JEE Advanced | CGPA - 7.44"
  },
  {
    degree: "CBSE - 12th",
    institution: "CHINMAYA VIDYALAYA, Bokaro Steel City",
    date: "April 2016 -- April 2018",
    details: "Percentage - 88.4%"
  }
];

const projectsData = [
  {
    title: "ClipVault: Secure & Efficient Video and Tweet Management",
    link: "https://github.com/ROYSANAL/Clipvault",
    points: [
      "Developed a RESTful backend API for Clipvault, enabling seamless user registration, login, video, and tweet management, resulting in a 30% increase in user engagement.",
      "Implemented secure authentication and authorization protocols, enhancing platform security and protecting over 10,000 user accounts and tweets.",
      "Engineered robust video and tweet management features, facilitating efficient upload and retrieval, leading to a 25% reduction in server response time.",
    ],
    stack: "NodeJS, ExpressJS, MongoDB, Mongoose, JWT, Multer, bcryptjs, POSTMAN, Cloudinary",
  },
  {
    title: "BlogEase: A Seamless Blogging Experience on Mobile",
    link: "https://github.com/ROYSANAL/my_blog_app",
    points: [
      "Developed a responsive bottom navigation bar with modern UI standards, enhancing user navigation efficiency by 30%.",
      "Implemented the 'My Blogs' page with Firebase, streamlining real-time blog edits and updates, increasing user interaction by 50%.",
      "Created an intuitive 'Upload Blog' interface, boosting user content submission rates by 40% and improving submission quality.",
      "Leveraged Firebase for robust data storage and real-time updates, improving app performance across devices.",
    ],
    stack: "Android Studio, Flutter, Dart, XCode, Firebase, Cloud Firestore, bloc",
  },
  {
    title: "IoT based Soil Monitoring , Auto- Irrigation System",
    link: "https://github.com/ROYSANAL/AgroPro",
    points: [
      "Project Funded by IEEE. Developed and implemented a sensor-based data collection system for soil and atmosphere analysis; enabled real-time monitoring and activation/deactivation of motors, resulting in a 40% reduction in water usage.",
      "Engineered an application to continuously monitor sensor readings from slave devices and adjust threshold values for the IEEE soil monitoring project.",
      "Facilitates Microcontroller connectivity via hotspot and seamlessly retrieves data through RestAPI in the app.",
      "Published the app on the Google Play Store, accumulating over 50+ downloads and a 4-star rating from users.",
    ],
    stack: "Android Studio, Kotlin, Jetpack Compose, IoT, PlatformIO, EASYEDA",
  }
];

const skillsData = [
  { category: "Languages", items: "C++, C, JavaScript, Typescript, Python, HTML, CSS" },
  { category: "Libraries/Frameworks", items: "NodeJS, ExpressJS, ReactJS, NextJS, FastAPI, Kafka, tailwindCSS, Prisma, Redux, Flutter" },
  { category: "Tools", items: "Git, GitHub, RestAPI, POSTMAN, Docker, GCP, Redis, Ollama, LM Studio" },
  { category: "Databases", items: "MongoDB, Firebase Firestore, MySQL, ClickHouse" },
  { category: "Course Work", items: "Data Structures and Algorithms, DBMS, Operating Systems, Computer Networks, OOPs, HLD" },
];

const honorsData = [
  "The IoT-based Soil Monitoring, Auto-Irrigation System project was recognized by the Ministry of Education-Govt. Of India and got Patent on Nov 2022 with Ref No - IN202231069215.",
  "Solved over 500+ questions on various coding platforms (Leetcode, GeeksForGeeks, Codeforces).",
  "Secured 4th position in INTER-IIT Canvas Painting.",
  "Participated as the representative for Jharkhand in the 101st Indian Science Congress hosted at Jammu University.",
  "Club Coordinator at Artfreaks - The official fine arts club IIT (ISM) Dhanbad (2021-22).",
  "Event Coordinator for Art of Muggles - An art gallery cum face painting event by Art Club (April 2022).",
  "Secretary at SIAM - Society for Industrial and Applied Mathematics at IIT (ISM) Dhanbad.",
  "Head of Sponsorship for Pixels (Online digital art event) held at IIT ISM Dhanbad (Aug 2021)."
];

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 100, damping: 20 } 
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// --- Components ---
export default function Portfolio() {
  return (
    <main className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      
      <ThemeToggle />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="mb-32 text-center md:text-left pt-10"
      >
        <motion.div variants={fadeInUp} className="inline-block mb-4">
          <span className="glass px-4 py-2 rounded-full text-sm font-medium text-violet-700 dark:text-violet-300 tracking-wide border-violet-200 dark:border-violet-500/30">
            Welcome to my portfolio
          </span>
        </motion.div>
        
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-slate-900 dark:text-white">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-gradient">Sanal Roy</span>
        </motion.h1>
        
        <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-10 max-w-3xl leading-relaxed">
          A passionate <span className="text-slate-900 dark:text-white font-semibold">Backend & Full Stack Developer</span> specializing in scalable architectures, AI integrations, and seamless user experiences.
        </motion.p>
        
        <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <motion.a 
            href="mailto:sanalroy12345@gmail.com" 
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 glass-card hover:bg-white dark:hover:bg-slate-800 transition-colors px-6 py-3 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 hover:shadow-2xl dark:hover:shadow-violet-500/20 hover:border-violet-300 dark:hover:border-violet-500/50"
          >
            <Mail size={18} className="text-violet-600 dark:text-violet-400" /> Email Me
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/sanal-roy-607594ab/" target="_blank" rel="noreferrer" 
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 glass-card hover:bg-white dark:hover:bg-slate-800 transition-colors px-6 py-3 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 hover:shadow-2xl dark:hover:shadow-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50"
          >
            <FaLinkedin size={18} className="text-blue-600 dark:text-blue-400" /> LinkedIn
          </motion.a>
          <motion.a 
            href="https://github.com/ROYSANAL" target="_blank" rel="noreferrer" 
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 glass-card hover:bg-white dark:hover:bg-slate-800 transition-colors px-6 py-3 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 hover:shadow-2xl dark:hover:shadow-slate-500/20 hover:border-slate-400 dark:hover:border-slate-500/50"
          >
            <FaGithub size={18} className="text-slate-800 dark:text-slate-300" /> GitHub
          </motion.a>
          <motion.a 
            href="tel:+919472791899" 
            whileHover={{ y: -5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center gap-2 glass-card hover:bg-white dark:hover:bg-slate-800 transition-colors px-6 py-3 rounded-full text-sm font-medium text-slate-800 dark:text-slate-200 hover:shadow-2xl dark:hover:shadow-green-500/20 hover:border-green-300 dark:hover:border-green-500/50"
          >
            <Phone size={18} className="text-green-600 dark:text-green-400" /> +91 9472791899
          </motion.a>
        </motion.div>
      </motion.section>

      {/* Experience Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-32 relative"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-violet-100 dark:bg-violet-500/20 rounded-xl">
            <Briefcase className="text-violet-600 dark:text-violet-400" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h2>
        </motion.div>
        
        <div className="space-y-8 border-l-2 border-slate-300 dark:border-slate-700/50 ml-6 pl-8 relative">
          {experienceData.map((exp, idx) => (
            <motion.div variants={fadeInUp} key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-2 border-violet-500 group-hover:bg-violet-500 transition-colors" />
              
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-card p-6 md:p-8 rounded-2xl group-hover:border-violet-300 dark:group-hover:border-violet-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-violet-700 dark:text-violet-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg w-fit">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{exp.date}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
                      <span className="text-violet-500 mt-1.5 text-xs">●</span>
                      <span dangerouslySetInnerHTML={{__html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 dark:text-white font-medium">$1</strong>')}} />
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-slate-300 dark:border-slate-700/50 flex flex-wrap gap-2">
                  <span className="text-sm text-slate-500 dark:text-slate-400 mr-2 py-1">Tech Stack:</span>
                  {exp.stack.split(', ').map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="mb-32"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-fuchsia-100 dark:bg-fuchsia-500/20 rounded-xl">
            <Code2 className="text-fuchsia-600 dark:text-fuchsia-400" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Projects</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, idx) => (
            <motion.div 
              variants={fadeInUp} 
              key={idx} 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col h-full hover:border-fuchsia-300 dark:hover:border-fuchsia-500/40 transition-colors group"
            >
              <div className="flex justify-between items-start mb-6 gap-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-fuchsia-700 dark:group-hover:text-fuchsia-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noreferrer" className="p-2 bg-slate-200 dark:bg-slate-800 rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors flex-shrink-0">
                  <ExternalLink size={20} className="text-slate-700 dark:text-slate-300" />
                </a>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {project.points.map((point, i) => (
                  <li key={i} className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
                    <span className="text-fuchsia-500 mt-1.5 text-xs">●</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.split(', ').map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-fuchsia-50 dark:bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300 rounded-full text-xs font-medium border border-fuchsia-200 dark:border-fuchsia-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills & Education Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
        {/* Skills Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-100 dark:bg-blue-500/20 rounded-xl">
              <Code2 className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Skills & Expertise</h2>
          </motion.div>
          
          <div className="space-y-4">
            {skillsData.map((skill, idx) => (
              <motion.div 
                variants={fadeInUp} 
                key={idx} 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass-card p-5 rounded-2xl hover:border-blue-300 dark:hover:border-blue-500/40 transition-colors"
              >
                <h3 className="text-sm uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.split(', ').map((item, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white dark:bg-slate-800 rounded-lg text-sm text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/50 hover:border-blue-400 dark:hover:border-blue-500/50 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-green-100 dark:bg-green-500/20 rounded-xl">
              <GraduationCap className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Education</h2>
          </motion.div>
          
          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <motion.div 
                variants={fadeInUp} 
                key={idx} 
                whileHover={{ x: 5 }}
                className="glass-card p-6 rounded-2xl border-l-4 border-l-green-500 hover:border-l-green-400 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors"
              >
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h3>
                <p className="text-green-700 dark:text-green-400 font-medium mb-3">{edu.institution}</p>
                <div className="flex flex-wrap justify-between items-center text-sm text-slate-600 dark:text-slate-400 gap-2">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {edu.date}</span>
                  <span className="px-2 py-1 bg-slate-200 dark:bg-slate-800 rounded text-slate-700 dark:text-slate-300">{edu.details}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Honors & Awards Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-10">
          <div className="p-3 bg-amber-100 dark:bg-amber-500/20 rounded-xl">
            <Trophy className="text-amber-600 dark:text-amber-400" size={28} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Honors & Responsibilities</h2>
        </motion.div>
        
        <div className="glass-card p-6 md:p-10 rounded-3xl">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {honorsData.map((honor, idx) => (
              <motion.li 
                variants={fadeInUp} 
                key={idx} 
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-start gap-3 text-slate-700 dark:text-slate-300 p-3 hover:bg-white dark:hover:bg-slate-800/60 hover:shadow-lg rounded-xl transition-all"
              >
                <Trophy size={18} className="text-amber-600 dark:text-amber-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">{honor}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-32 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p>© {new Date().getFullYear()} Sanal Roy. All rights reserved.</p>
      </motion.footer>

    </main>
  );
}
