"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  ExternalLink,
  MapPin,
  GraduationCap,
  Briefcase,
  Award,
  Code2,
  Sparkles,
  FolderGit2,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Download,
  FileText,
  Menu,
  X,
  Copy,
  Check,
  Globe,
  Terminal,
  Database,
  Cloud,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

// Crisp SVG Icons for Brand Logos
function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "web" | "ai" | "automation">("all");
  const [showResumeModal, setShowResumeModal] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("sapnassm62062@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const skillsData = [
    {
      category: "Programming & Development",
      icon: <Terminal className="w-5 h-5 text-purple-400" />,
      skills: ["Java", "Python", "JavaScript (ES6+)", "PHP", "HTML5", "CSS3"],
    },
    {
      category: "Frontend Engineering",
      icon: <Layers className="w-5 h-5 text-sky-400" />,
      skills: ["React 19", "Next.js", "Vite 8", "Tailwind CSS", "Responsive Design", "UI/UX Components"],
    },
    {
      category: "Backend & APIs",
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      skills: ["Node.js", "Express.js", "RESTful APIs", "Brevo REST API", "CRUD Architecture"],
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 text-amber-400" />,
      skills: ["MongoDB", "Supabase", "Firebase Firestore", "SQL", "Local Storage"],
    },
    {
      category: "File & Cloud Storage",
      icon: <Cloud className="w-5 h-5 text-blue-400" />,
      skills: ["ImageKit", "Cloudinary", "Cloudflare", "Cloud Storage Management"],
    },
    {
      category: "Auth & Security",
      icon: <ShieldCheck className="w-5 h-5 text-rose-400" />,
      skills: ["JWT (JSON Web Tokens)", "Clerk Auth", "Supabase Auth", "Firebase Auth"],
    },
    {
      category: "Core Engineering & AI",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Deep Learning", "Computer Vision (OpenCV)"],
    },
    {
      category: "Testing & Tools",
      icon: <FolderGit2 className="w-5 h-5 text-teal-400" />,
      skills: ["Git & GitHub", "Selenium WebDriver", "Page Object Model (POM)", "PyTest", "Postman", "Linux", "Windows"],
    },
  ];

  const projects = [
    {
      id: "cloudvault",
      title: "CloudVault – File Storage Platform",
      category: "web",
      badge: "Full Stack & Cloud",
      description:
        "Developed a robust cloud-based file storage and management platform with a Next.js frontend, Node.js backend, authenticated file uploads, and high-performance ImageKit CDN integration.",
      tech: ["Next.js", "Node.js", "ImageKit", "Tailwind CSS", "REST API"],
      github: "https://github.com/mauryasapna/imageKit",
      live: null,
      featured: true,
    },
    {
      id: "mithaas-bakery",
      title: "Mithaas Bakery – E-Commerce Website",
      category: "web",
      badge: "E-Commerce",
      description:
        "Designed and built a delightful e-commerce bakery web application with React 19, responsive modern UI, interactive product catalogs, seamless cart management, and Brevo REST API email triggers.",
      tech: ["React 19", "Vite 8", "CSS3", "Brevo REST API", "JavaScript"],
      github: "https://github.com/mauryasapna/mithas_bakery",
      live: null,
      featured: true,
    },
    {
      id: "react-todo",
      title: "React Firebase Task Manager",
      category: "web",
      badge: "Full Stack",
      description:
        "Engineered a real-time To-Do application featuring complete Create, Read, Update, and Delete (CRUD) operations, persistent cloud synchronization, and responsive state architecture via React & Firebase.",
      tech: ["React", "Firebase", "Firestore", "Authentication", "CSS"],
      github: "https://github.com/mauryasapna/react-firebase-todo-app",
      live: null,
      featured: true,
    },
    {
      id: "parinda",
      title: "Parinda – Modern Web Platform",
      category: "web",
      badge: "TypeScript & Web",
      description:
        "Developed a modern, responsive web application utilizing TypeScript and modern frontend architecture, featuring clean component hierarchies, dynamic routing, and fluid user interactions.",
      tech: ["TypeScript", "React", "Next.js", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/mauryasapna/Parinda",
      live: null,
      featured: true,
    },
    {
      id: "orangehrm",
      title: "OrangeHRM Test Automation Framework",
      category: "automation",
      badge: "Automation QA",
      description:
        "Architected an end-to-end automated testing suite utilizing the Page Object Model (POM) design pattern, automated regression suites, assertion logging, and cross-browser test runs.",
      tech: ["Python", "Selenium WebDriver", "PyTest", "Page Object Model", "HTML Reports"],
      github: "https://github.com/mauryasapna",
      live: null,
      featured: false,
    },

  ];

  const filteredProjects =
    activeTab === "all" ? projects : projects.filter((p) => p.category === activeTab);

  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "OneSpider",
      period: "Internship Program",
      type: "Internship",
      highlights: [
        "Developed scalable backend APIs, database models, and web components for client applications.",
        "Collaborated with engineering teams to design clean, maintainable software architectures and unit tests.",
        "Implemented automated workflows, code optimization, and responsive user interfaces.",
        "Delivered production-ready features adhering to agile software engineering practices.",
      ],
    },
    {
      role: "Python Programming Intern",
      company: "ELEKTRO LABS TECHNOLOGIES PVT. LTD.",
      period: "May 2025 – July 2025",
      type: "Internship",
      highlights: [
        "Engineered software modules, automation utilities, and scripting solutions utilizing Python.",
        "Collaborated closely with cross-functional development teams on real-world feature implementations.",
        "Refactored codebases to optimize performance, adhere to clean coding conventions, and strengthen debugging practices.",
        "Delivered tested, production-ready modules on strict milestone timelines.",
      ],
    },
    {
      role: "Cloud Computing Intern",
      company: "Infobyte.in",
      period: "Cloud Focus Program",
      type: "Internship",
      highlights: [
        "Specialized in Cloud Storage architecture, media pipelines, and scalable Cloud Authentication.",
        "Implemented secure user authentication flows and cloud-backed file handling workflows.",
        "Built and deployed live showcase implementations validating end-to-end cloud infrastructure.",
      ],
      showcaseUrl: "https://my-showcase-spark-21.lovable.app/",
    },
  ];

  const educationList = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Swami Vivekanand Subharti University",
      period: "2023 – 2027",
      score: "GPA: 8.9 / 10",
      description:
        "Comprehensive coursework in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, and Artificial Intelligence.",
    },
    {
      degree: "Senior Secondary (12th Grade) – Science",
      institution: "BSEB Board",
      period: "2021 – 2023",
      score: "GPA: 8.58 / 10 (85.8%)",
      description: "Concentration in Physics, Chemistry, and Mathematics with academic excellence.",
    },
    {
      degree: "Secondary School (10th Grade)",
      institution: "CBSE Board",
      period: "2020 – 2021",
      score: "GPA: 8.32 / 10 (83.2%)",
      description: "Foundational studies in Science, Mathematics, English, and Information Technology.",
    },
  ];

  const achievements = [
    {
      title: "Full-Stack Web Architect",
      desc: "Architected multiple responsive, production-ready full-stack applications with React 19, Next.js, and Node.js.",
      icon: <Globe className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "AI & Computer Vision Innovations",
      desc: "Built Deep Learning applications including GlowAura AI for face/hair detection and voice accessibility assistants.",
      icon: <Sparkles className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "End-to-End Automation Frameworks",
      desc: "Engineered automated testing frameworks with Python, Selenium WebDriver, and Page Object Model design patterns.",
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "3 Technical Internships",
      desc: "Completed Software Engineering & Python internships at OneSpider, Elektro Labs, and Infobyte.in.",
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
  ];


  return (
    <div className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-purple-500/30 selection:text-purple-200">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-purple-600/10 blur-[130px] animate-pulse-slow" />
        <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/10 blur-[140px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-sky-600/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d08_1px,transparent_1px),linear-gradient(to_bottom,#1f293d08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 glass-nav border-b border-white/[0.06] transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-2 ring-purple-500/40 group-hover:ring-purple-400 transition-all">
              <Image
                src="/profile.jpg"
                alt="Sapna Kumari"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white flex items-center gap-1.5">
                Sapna Kumari
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              </span>
              <span className="text-xs text-purple-300 font-medium block -mt-0.5">Aspiring Software Engineer</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
            <a href="#education" className="hover:text-purple-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-purple-500/40 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-purple-400" />
              ATS Resume
            </button>
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/25 transition-all flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-purple-400" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-t border-white/[0.08] px-6 py-5 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              About
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Technical Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Experience & Internships
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Education
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-slate-300 hover:text-purple-400 py-1 font-medium"
            >
              Contact
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowResumeModal(true);
                }}
                className="w-full py-2.5 text-center font-medium text-sm rounded-lg bg-white/10 text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                View ATS Resume
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-center font-medium text-sm rounded-lg bg-purple-600 text-white"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        {/* HERO SECTION */}
        <section id="home" className="pt-16 pb-20 md:pt-24 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Col: Text & Intro */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs font-medium mb-6 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Aspiring Software Engineer • Open to Opportunities
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
                Hi, I&apos;m <span className="text-gradient-purple">Sapna Kumari</span>
              </h1>

              {/* Tagline / Subtitle */}
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-300 mb-6 flex flex-wrap items-center gap-2">
                <span className="text-purple-300 font-bold">Aspiring Software Engineer</span>
                <span className="text-purple-400">•</span>
                <span className="text-sky-400">Backend Development Learner</span>
                <span className="text-purple-400">•</span>
                <span className="text-emerald-400">Enthusiastic about QA Engineering</span>
              </h2>

              {/* Intro Summary Paragraph */}
              <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-8 max-w-2xl font-normal">
                Aspiring Software Engineer & Computer Science student with practical internship experience at <strong>OneSpider</strong>. I build modern, high-performance web applications, scalable cloud storage solutions, robust backend APIs, and automated QA testing frameworks.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-medium text-sm shadow-xl shadow-purple-600/30 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto cursor-pointer"
                >
                  <FolderGit2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  View Selected Work
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <button
                  onClick={() => setShowResumeModal(true)}
                  className="px-6 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 font-medium text-sm border border-white/10 hover:border-purple-500/40 transition-all flex items-center justify-center gap-2 w-full sm:w-auto cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-purple-400" />
                  View & Download ATS Resume
                </button>
              </div>

              {/* Social & Contact Badges */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-slate-400">
                <a
                  href="https://github.com/mauryasapna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] transition-all"
                >
                  <GithubIcon className="w-4 h-4 text-slate-200" />
                  <span>github.com/mauryasapna</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sapna-kumari-b73477354/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/[0.06] transition-all"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                  <span>LinkedIn Profile</span>
                </a>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <MapPin className="w-4 h-4 text-rose-400" />
                  <span>Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* Right Col: Profile Photo with Glowing Frame & Floating Info Tags */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
              <div className="relative w-[300px] h-[340px] sm:w-[350px] sm:h-[400px] md:w-[380px] md:h-[430px]">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600 via-indigo-500 to-sky-400 rounded-3xl opacity-75 blur-xl group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>

                {/* Profile Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden glass-card p-2 border-2 border-white/10 shadow-2xl bg-[#11131f]">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/profile.jpg"
                      alt="Sapna Kumari"
                      fill
                      className="object-cover object-top hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Inner subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/90 via-transparent to-transparent" />

                    {/* Bottom overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-[#0d0f17]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold text-white">Sapna Kumari</p>
                        <p className="text-[11px] text-purple-300 font-medium">Aspiring Software Engineer</p>
                      </div>
                      <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        GPA 8.9 / 10
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: Top Left */}
                <div className="absolute -top-4 -left-6 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-purple-500/30 text-xs font-semibold text-white shadow-xl animate-float">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Aspiring SDE</span>
                </div>

                {/* Floating Badge 2: Bottom Right */}
                <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card border border-sky-500/30 text-xs font-semibold text-white shadow-xl animate-float" style={{ animationDelay: "2.5s" }}>
                  <Cloud className="w-4 h-4 text-sky-400" />
                  <span>Backend & QA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="glass-card p-5 rounded-2xl text-center border border-white/[0.07] hover:border-purple-500/30 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-gradient-purple mb-1">10+</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">Projects Built</span>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border border-white/[0.07] hover:border-sky-500/30 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-gradient-cyan mb-1">20+</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">Tech & Tools</span>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border border-white/[0.07] hover:border-emerald-500/30 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-emerald-400 mb-1">3</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">Tech Internships</span>
            </div>
            <div className="glass-card p-5 rounded-2xl text-center border border-white/[0.07] hover:border-amber-500/30 transition-all">
              <span className="block text-3xl sm:text-4xl font-extrabold text-amber-400 mb-1">8.9</span>
              <span className="text-xs sm:text-sm text-slate-400 font-medium">B.Tech GPA</span>
            </div>
          </div>

        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Professional Profile</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 glass-card p-8 rounded-3xl border border-white/[0.08]">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                Who I Am & What I Do
              </h3>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                A motivated and detail-oriented <strong>Aspiring Software Engineer</strong> and <strong>Computer Science & Engineering</strong> student with practical internship experience at <strong>OneSpider</strong>, <strong>Elektro Labs</strong>, and <strong>Infobyte.in</strong>. Possesses strong knowledge of backend development, web architecture, databases, QA test automation, and Artificial Intelligence.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4 text-base">
                Skilled in <strong>Java, Python, JavaScript, React, Next.js, Node.js, PHP, SQL, MongoDB, Supabase, Firebase</strong>, and modern web technologies. Experienced in developing full-stack applications, cloud/file-storage systems, e-commerce websites, automated testing frameworks with Selenium & POM, and AI-based projects.
              </p>
              <p className="text-slate-300 leading-relaxed text-base">
                Possesses a strong understanding of <strong>Data Structures, Algorithms, Databases, Computer Networks, authentication, APIs</strong>, and software engineering. Passionate about building innovative solutions using Artificial Intelligence, Machine Learning, Computer Vision, and full-stack technologies. A quick learner with strong problem-solving, teamwork, communication, and development capabilities.
              </p>
            </div>



            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {achievements.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/[0.07] flex items-start gap-4">
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-sky-400 uppercase mb-2">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Technical Skills</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mt-3" />
            <p className="text-slate-400 text-sm max-w-xl mt-3">
              Comprehensive toolkit spanning full-stack web engineering, cloud infrastructure, AI models, and QA testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((group, index) => (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl border border-white/[0.07] hover:border-purple-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.06]">
                    <div className="p-2 rounded-lg bg-white/[0.04] border border-white/10">{group.icon}</div>
                    <h3 className="font-bold text-sm text-white">{group.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.04] text-slate-200 border border-white/[0.06] hover:border-purple-500/40 hover:bg-purple-500/10 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Featured Projects</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full mt-3" />
            <p className="text-slate-400 text-sm max-w-xl mt-3">
              Selected real-world applications showcasing full-stack development, cloud architecture, and AI integrations.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
            {[
              { label: "All Projects", val: "all" },
              { label: "Full Stack & Web", val: "web" },
              { label: "Automation QA", val: "automation" },
            ].map((tab) => (
              <button
                key={tab.val}
                onClick={() => setActiveTab(tab.val as any)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.val
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30"
                    : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>


          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card rounded-2xl border border-white/[0.08] overflow-hidden flex flex-col justify-between group hover:border-purple-500/40"
              >
                <div className="p-6">
                  {/* Top Bar with Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/25">
                      {proj.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-slate-300 hover:text-white transition-colors"
                        title="View GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300/80 text-xs sm:text-sm leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>

                {/* Tech Stack Footer */}
                <div className="p-6 pt-0">
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-[11px] font-medium rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.05]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link Button */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 w-full py-2 px-3 rounded-lg bg-white/[0.04] hover:bg-purple-600/20 text-xs font-medium text-slate-300 hover:text-purple-200 border border-white/[0.08] hover:border-purple-500/30 flex items-center justify-center gap-1.5 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-auto" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE / INTERNSHIPS SECTION */}
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase mb-2">Work History</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Internships & Experience</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-purple-500 rounded-full mt-3" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] relative overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-white/[0.06]">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 mb-2">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-300 font-medium text-sm mt-0.5">{exp.company}</p>
                  </div>
                  <div className="text-xs font-medium text-slate-400 sm:text-right">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                      <Briefcase className="w-3.5 h-3.5 text-purple-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-slate-300 text-sm">
                  {exp.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5">
                      <ChevronRight className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.showcaseUrl && (
                  <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs text-slate-400">Live Internship Demo:</span>
                    <a
                      href={exp.showcaseUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>my-showcase-spark-21.lovable.app</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="flex flex-col items-center text-center mb-14">
            <span className="text-xs font-bold tracking-widest text-amber-400 uppercase mb-2">Academics</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Education & Qualifications</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-purple-500 rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {educationList.map((edu, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/[0.08] flex flex-col justify-between hover:border-amber-400/30 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/25">
                      <GraduationCap className="w-5 h-5 text-amber-400" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">{edu.period}</span>
                  </div>

                  <h3 className="font-bold text-base text-white mb-1.5">{edu.degree}</h3>
                  <p className="text-sm text-purple-300 font-medium mb-3">{edu.institution}</p>
                  <p className="text-xs text-slate-300/80 leading-relaxed mb-4">{edu.description}</p>
                </div>

                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="inline-block px-3 py-1 text-xs font-bold rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {edu.score}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto glass-card p-8 sm:p-12 rounded-3xl border border-white/[0.08] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col items-center text-center mb-10">
              <span className="text-xs font-bold tracking-widest text-purple-400 uppercase mb-2">Connect</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let&apos;s Build Something Together</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mt-3" />
              <p className="text-slate-300 text-sm max-w-lg mt-3">
                I am actively seeking software development, full-stack, and AI fresher roles or collaborative projects. Feel free to reach out directly!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col items-center text-center">
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-slate-400 mb-1">Email</h4>
                <button
                  onClick={copyToClipboard}
                  className="text-xs font-bold text-white hover:text-purple-300 transition-colors flex items-center gap-1 cursor-pointer break-all"
                >
                  sapnassm62062@gmail.com
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> : <Copy className="w-3.5 h-3.5 text-slate-400 shrink-0" />}
                </button>
                {copiedEmail && <span className="text-[10px] text-emerald-400 mt-1">Copied to clipboard!</span>}
              </div>

              {/* LinkedIn Card */}
              <a
                href="https://www.linkedin.com/in/sapna-kumari-b73477354/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-500/30 flex flex-col items-center text-center transition-all group"
              >
                <div className="p-3 rounded-xl bg-[#0a66c2]/10 text-[#0a66c2] mb-3">
                  <LinkedinIcon className="w-5 h-5 text-[#0a66c2]" />
                </div>
                <h4 className="text-xs font-semibold text-slate-400 mb-1">LinkedIn</h4>
                <span className="text-xs font-bold text-white group-hover:text-blue-300 flex items-center gap-1">
                  sapna-kumari-b73477354
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/mauryasapna"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 flex flex-col items-center text-center transition-all group"
              >
                <div className="p-3 rounded-xl bg-white/[0.08] text-white mb-3">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-semibold text-slate-400 mb-1">GitHub</h4>
                <span className="text-xs font-bold text-white group-hover:text-purple-300 flex items-center gap-1">
                  mauryasapna
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

            {/* Direct Mail CTA */}
            <div className="flex justify-center">
              <a
                href="mailto:sapnassm62062@gmail.com?subject=Job%20Opportunity%20/%20Inquiry%20for%20Sapna%20Kumari"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/30 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Send Direct Email</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] py-8 px-4 text-center text-xs text-slate-500 glass-nav">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Sapna Kumari • Aspiring Software Engineer</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/mauryasapna" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sapna-kumari-b73477354/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
              LinkedIn
            </a>
            <a href="mailto:sapnassm62062@gmail.com" className="hover:text-purple-400 transition-colors">
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* ATS RESUME MODAL */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0d0f17] border border-white/15 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121522]">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                <h3 className="font-bold text-white text-base">ATS-Formatted Resume — Sapna Kumari</h3>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Print / Save PDF
                </button>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Resume Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-200 text-xs sm:text-sm font-sans bg-[#0d0f17]">
              {/* ATS Header */}
              <div className="text-center border-b border-white/10 pb-5">
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">SAPNA KUMARI</h1>
                <p className="text-purple-400 font-semibold text-xs mt-1">
                  Aspiring Software Engineer
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Uttar Pradesh, India • sapnassm62062@gmail.com •{" "}
                  <a href="https://www.linkedin.com/in/sapna-kumari-b73477354/" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
                    LinkedIn
                  </a>{" "}
                  •{" "}
                  <a href="https://github.com/mauryasapna" target="_blank" rel="noopener noreferrer" className="text-purple-400 underline">
                    GitHub
                  </a>
                </p>
              </div>

              {/* Summary */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1 mb-2">
                  Professional Summary
                </h4>
                <p className="text-slate-300 leading-relaxed text-xs">
                  Aspiring Software Engineer and Computer Science & Engineering student with practical internship experience at OneSpider, Elektro Labs, and Infobyte.in. Strong foundation in backend development, scalable web architecture, databases, automated QA testing, and Artificial Intelligence. Experienced in building responsive web applications using React, Next.js, Node.js, Python, and Firebase. Strong grasp of Data Structures, Algorithms, and clean code practices seeking fresher software engineering opportunities.
                </p>
              </div>



              {/* Education */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1 mb-2">
                  Education
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="font-bold text-white text-xs">B.Tech – Computer Science and Engineering</span>
                    <span className="text-slate-400 text-xs">GPA: 8.9 / 10 | 2023 – 2027</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Swami Vivekanand Subharti University</p>

                  <div className="flex justify-between items-baseline pt-1">
                    <span className="font-bold text-white text-xs">12th Grade (Senior Secondary) – Science</span>
                    <span className="text-slate-400 text-xs">GPA: 8.58 / 10 | 2021 – 2023</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">BSEB Board</p>

                  <div className="flex justify-between items-baseline pt-1">
                    <span className="font-bold text-white text-xs">10th Grade (Secondary School)</span>
                    <span className="text-slate-400 text-xs">GPA: 8.32 / 10 | 2020 – 2021</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">CBSE Board</p>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1 mb-2">
                  Technical Skills
                </h4>
                <ul className="text-xs space-y-1 text-slate-300">
                  <li><strong>Languages:</strong> Java, Python, JavaScript (ES6+), PHP, HTML5, CSS3</li>
                  <li><strong>Frontend:</strong> React 19, Next.js, Vite 8, Tailwind CSS, Responsive Web Design</li>
                  <li><strong>Backend & APIs:</strong> Node.js, Express.js, RESTful APIs, Brevo REST API</li>
                  <li><strong>Databases & Storage:</strong> MongoDB, Supabase, Firebase, SQL, ImageKit, Cloudinary, Cloudflare</li>
                  <li><strong>Authentication:</strong> JWT, Clerk, Supabase Auth, Firebase Auth</li>
                  <li><strong>Core Engineering:</strong> Data Structures & Algorithms, OOP, DBMS, Computer Networks, AI & Computer Vision</li>
                  <li><strong>Testing & Tools:</strong> Selenium WebDriver, PyTest, Page Object Model (POM), Git, GitHub, Linux, Windows</li>
                </ul>
              </div>

              {/* Projects */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1 mb-2">
                  Technical Projects
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">CloudVault – File Storage Platform</span>
                      <span className="text-purple-400 text-[11px]">Next.js, Node.js, ImageKit</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Developed a cloud-based file storage platform featuring Next.js frontend, Node.js backend, authenticated uploads, and ImageKit CDN integration.</p>
                    <p className="text-[11px] text-slate-400">GitHub: https://github.com/mauryasapna/imageKit</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">Mithaas Bakery – E-Commerce Website</span>
                      <span className="text-purple-400 text-[11px]">React 19, Vite 8, Brevo REST API</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Developed responsive bakery e-commerce platform with dynamic catalog browsing, cart operations, and Brevo REST API notifications.</p>
                    <p className="text-[11px] text-slate-400">GitHub: https://github.com/mauryasapna/mithas_bakery</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">React Firebase To-Do Application</span>
                      <span className="text-purple-400 text-[11px]">React, Firebase, Firestore</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Built real-time task manager with complete CRUD functionality, Firebase cloud storage, and responsive UI.</p>
                    <p className="text-[11px] text-slate-400">GitHub: https://github.com/mauryasapna/react-firebase-todo-app</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">Parinda – Modern Web Platform</span>
                      <span className="text-purple-400 text-[11px]">TypeScript, React, Next.js</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Developed responsive web application utilizing TypeScript, optimized component trees, dynamic routing, and fluid user interactions.</p>
                    <p className="text-[11px] text-slate-400">GitHub: https://github.com/mauryasapna/Parinda</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">OrangeHRM Test Automation Framework</span>
                      <span className="text-purple-400 text-[11px]">Python, Selenium, PyTest, POM</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Architected end-to-end automated testing suite utilizing Page Object Model architecture and automated reporting.</p>
                  </div>

                </div>
              </div>

              {/* Experience */}
              <div>
                <h4 className="font-bold text-xs uppercase tracking-wider text-purple-400 border-b border-white/10 pb-1 mb-2">
                  Internships & Experience
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">Software Engineering Intern — OneSpider</span>
                      <span className="text-slate-400 text-xs">Internship Program</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Developed backend APIs, database schemas, and responsive web components adhering to agile software engineering practices.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">Python Programming Intern — ELEKTRO LABS TECHNOLOGIES PVT. LTD.</span>
                      <span className="text-slate-400 text-xs">May 2025 – July 2025</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Developed Python software modules, automated routine scripts, and delivered production-ready deliverables.</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-white text-xs">Cloud Computing Intern — Infobyte.in</span>
                      <span className="text-slate-400 text-xs">Cloud Storage & Authentication</span>
                    </div>
                    <p className="text-slate-300 text-xs mt-0.5">• Focused on cloud architecture, cloud authentication flows, and media storage pipelines.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
