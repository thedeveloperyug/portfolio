import React, { useEffect, useState } from "react";
import "./App.css";

const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "Software Engineer",
    company: "BMW TechWorks India",
    location: "Pune · On-site",
    tone: "cyan",
    summary: "Working on automotive software with a focus on QNX/Linux, logging & tracing and open-source contributions to Eclipse S-CORE.",
    tags: ["QNX", "Linux", "C++", "Logging & Tracing", "Eclipse S-CORE"],
  },
  {
    period: "Aug 2026 — Present",
    role: "Founder",
    company: "NEYTRA OS",
    location: "Remote",
    tone: "violet",
    summary: "Building an AI-native operating system concept that rethinks how humans interact with computers through intelligent, intent-driven computing.",
    tags: ["AI Systems", "OS", "Automation", "Developer Tools"],
  },
  {
    period: "Oct 2024 — Jul 2025",
    role: "Associate Software Engineer",
    company: "KPIT",
    location: "Pune · On-site",
    tone: "lime",
    summary: "Built an AI-powered operational log analyzer using Ollama and LangChain for CI/CD pipelines, alongside low-level and automotive software development.",
    tags: ["LLM", "Ollama", "LangChain", "C++", "CI/CD"],
  },
  {
    period: "Dec 2023 — Sep 2024",
    role: "Software Trainee",
    company: "KPIT",
    location: "Pune · On-site",
    tone: "lime",
    summary: "Developed and enhanced multi-threaded applications using modern C/C++ including C++14 and C++17.",
    tags: ["C++14", "C++17", "Multithreading", "Low-level Programming"],
  },
  {
    period: "Jun 2022 — Nov 2022",
    role: "Web Developer",
    company: "Reflex Drive™",
    location: "Remote",
    tone: "orange",
    summary: "Managed and developed the company website with responsive, performance-focused web technologies.",
    tags: ["JavaScript", "CSS", "Tailwind CSS", "Web Development"],
  },
  {
    period: "Jun 2022 — Jul 2022",
    role: "Machine Learning Intern",
    company: "Allsoft Solutions & Services",
    location: "Punjab · India",
    tone: "blue",
    summary: "Worked on supervised and unsupervised machine learning projects, data preprocessing, sales forecasting and object detection.",
    tags: ["Python", "Machine Learning", "Data Preprocessing", "Computer Vision"],
  },
];

const skills = {
  "Automotive & Systems": ["C", "C++", "C++14", "C++17", "QNX", "Linux", "POSIX", "Multithreading", "IPC", "Networking", "AUTOSAR", "ISO 26262", "MISRA C++", "Coverity", "Git"],
  "AI / ML / Developer Intelligence": ["Python", "Machine Learning", "OpenCV", "LLMs", "Ollama", "LangChain", "NLP", "Data Analysis", "NumPy", "Pandas", "Scikit-learn", "AI Automation"],
  "Software Engineering": ["Software Architecture", "Debugging", "Testing", "CI/CD", "GitHub Actions", "Docker", "AWS", "REST APIs", "System Design", "Performance Optimization"],
  "Web & Full Stack": ["React", "JavaScript", "HTML5", "CSS3", "Node.js", "Express", "MongoDB", "MySQL", "Tailwind CSS", "Bootstrap"],
};

const certifications = [
  { title: "Real-time Programming for QNX", issuer: "QNX", year: "Apr 2026", accent: "#ff5a4f" },
  { title: "KPIT Genesis Certification | C++", issuer: "KPIT", year: "Jun 2024", accent: "#b7ff3c" },
  { title: "Data Structure and Algorithm in C++", issuer: "Coding Ninjas", year: "Mar 2023", accent: "#ff9f43" },
  { title: "Database Management System (SQL)", issuer: "Infosys Springboard", year: "2023", accent: "#4da3ff" },
];

const projects = [
  {
    number: "01", name: "NEYTRA OS", type: "AI-native computing platform",
    description: "A personal research and product initiative exploring an AI-native operating system where intelligence, intent and automation become first-class parts of the computing experience.",
    stack: ["AI Systems", "Operating Systems", "Automation", "C++", "Python"],
    repo: "https://github.com/thedeveloperyug/Neytra_OS", live: "https://thedeveloperyug.github.io/neytra-os-website/", featured: true,
  },
  {
    number: "02", name: "AI Operational Log Analyzer", type: "Developer intelligence",
    description: "An LLM-powered approach to understanding CI/CD operational logs using Ollama and LangChain, turning noisy build information into actionable engineering context.",
    stack: ["LLM", "Ollama", "LangChain", "Python", "CI/CD"], repo: "#", live: "#",
  },
  {
    number: "03", name: "Automotive Logging & Tracing", type: "Systems engineering",
    description: "Engineering work around IPC tracing, network statistics, plugin workers, buffer handling and trace data flow for automotive software systems.",
    stack: ["C++", "IPC", "Networking", "QNX/Linux", "Tracing"], repo: "#", live: "#",
  },
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [active, setActive] = useState("home");
  useReveal();

  useEffect(() => {
    const onScroll = () => {
      const sections = ["home", "about", "experience", "skills", "projects", "education", "contact"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        return el && window.scrollY >= el.offsetTop - 160 && window.scrollY < el.offsetTop + el.offsetHeight - 160;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <div className="noise" /><div className="orb orb-one" /><div className="orb orb-two" />
      <header className="nav-wrap"><nav className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Go home"><span className="brand-mark">YP</span><span>Yogesh Pandey</span></button>
        <div className="nav-links">{["about", "experience", "skills", "projects", "education"].map((id) => <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>{id}</button>)}</div>
        <button className="nav-cta" onClick={() => go("contact")}>Let’s talk ↗</button>
      </nav></header>

      <main>
        <section id="home" className="hero section"><div className="hero-grid"><div className="hero-copy">
          <div className="eyebrow reveal"><span className="pulse" /> SOFTWARE ENGINEER · AI BUILDER · FOUNDER</div>
          <h1 className="reveal delay-1">Engineering the <span>intelligent</span> edge.</h1>
          <p className="hero-lead reveal delay-2">I’m <strong>Yogesh Pandey</strong> — Software Engineer at BMW TechWorks India and Founder of NEYTRA OS. I build automotive software, developer intelligence and AI-native systems.</p>
          <div className="hero-actions reveal delay-3"><button className="primary" onClick={() => go("projects")}>Explore my work <span>↗</span></button><a className="secondary" href="https://www.linkedin.com/in/thedeveloperyug" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
          <div className="hero-meta reveal delay-3"><span>📍 Pune, Maharashtra, India</span><span>BMW TechWorks India</span><span>NEYTRA OS</span></div>
        </div><div className="hero-visual reveal delay-2" aria-hidden="true"><div className="system-card">
          <div className="system-top"><span>NEYTRA / SYSTEMS</span><span>ONLINE</span></div><div className="core"><div className="core-ring ring-a" /><div className="core-ring ring-b" /><div className="core-node">YP</div></div>
          <div className="system-lines"><div><span>01</span> Automotive systems <b>ACTIVE</b></div><div><span>02</span> AI engineering <b>ACTIVE</b></div><div><span>03</span> NEYTRA OS <b>BUILDING</b></div></div>
        </div></div></div><div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div></section>

        <section id="about" className="section compact-section"><div className="section-head reveal"><span>01 / PROFILE</span><h2>From low-level systems<br /><em>to intelligent software.</em></h2></div><div className="about-grid">
          <div className="about-intro reveal"><p>I work at the intersection of <strong>automotive software, systems engineering and AI.</strong> My current work spans QNX/Linux, C++, logging & tracing, open-source automotive platforms and developer tooling.</p><p>Alongside my engineering role, I’m building NEYTRA OS — an exploration into what an AI-native computing layer can become when the computer understands intent instead of only commands.</p></div>
          <div className="stats reveal"><div><strong>6+</strong><span>years building<br />software & projects</span></div><div><strong>22</strong><span>certifications<br />& credentials</span></div><div><strong>2</strong><span>active engineering<br />frontiers</span></div><div><strong>8.4</strong><span>B.Tech<br />CGPA</span></div></div>
        </div></section>

        <section id="experience" className="section dark-section"><div className="section-head reveal"><span>02 / EXPERIENCE</span><h2>Building systems<br /><em>that matter.</em></h2></div><div className="timeline">
          {experiences.map((item, index) => <article className={`timeline-item reveal delay-${Math.min(index + 1, 3)}`} key={`${item.company}-${item.role}`}><div className={`timeline-dot ${item.tone}`} /><div className="timeline-period">{item.period}</div><div className="timeline-card"><div className="timeline-title"><div><h3>{item.role}</h3><h4>{item.company}</h4></div><span>{item.location}</span></div><p>{item.summary}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}
        </div></section>

        <section id="skills" className="section"><div className="section-head reveal"><span>03 / TOOLKIT</span><h2>Deep systems.<br /><em>Broad capability.</em></h2></div><div className="skills-grid">
          {Object.entries(skills).map(([group, items], i) => <div className={`skill-card reveal delay-${Math.min(i + 1, 3)}`} key={group}><div className="skill-index">0{i + 1}</div><h3>{group}</h3><div className="skill-tags">{items.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}
        </div></section>

        <section id="projects" className="section projects-section"><div className="section-head reveal"><span>04 / SELECTED WORK</span><h2>Ideas turned<br /><em>into systems.</em></h2></div><div className="project-list">
          {projects.map((project) => <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.name}><div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((s) => <span key={s}>{s}</span>)}</div></div><div className="project-actions">{project.repo !== "#" && <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.live !== "#" && <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>}</div></article>)}
        </div></section>

        <section id="education" className="section dark-section"><div className="section-head reveal"><span>05 / EDUCATION & CREDENTIALS</span><h2>Foundation for<br /><em>continuous learning.</em></h2></div>
          <div className="education-grid"><article className="edu-card reveal"><span>2021 — 2024</span><h3>Lovely Professional University</h3><h4>B.Tech — Computer Science</h4><p>8.4 CGPA · Specialization across DevOps, AI/ML and Full Stack Development.</p></article><article className="edu-card reveal delay-1"><span>2019 — 2021</span><h3>Ambition Institute of Technology</h3><h4>Diploma — Computer Science & Engineering</h4><p>80% · Foundation in computer science and engineering.</p></article></div>
          <div className="cert-grid">{certifications.map((cert) => <div className="cert-card reveal" key={cert.title}><div className="cert-dot" style={{ background: cert.accent }} /><div><span>{cert.year}</span><h3>{cert.title}</h3><p>{cert.issuer}</p></div></div>)}</div><p className="cert-note reveal">22 licenses & certifications listed on LinkedIn · including QNX, KPIT Genesis C++, C++ DSA and SQL.</p>
        </section>

        <section id="contact" className="section contact-section"><div className="contact-card reveal"><span className="eyebrow">06 / CONTACT</span><h2>Let’s build the<br /><em>next system.</em></h2><p>Open to engineering opportunities, AI/system projects, research collaborations and conversations around NEYTRA OS.</p><div className="contact-actions"><a className="primary" href="mailto:thedeveloperyug@gmail.com">thedeveloperyug@gmail.com ↗</a><a className="secondary" href="https://github.com/thedeveloperyug" target="_blank" rel="noreferrer">GitHub ↗</a><a className="secondary" href="https://www.linkedin.com/in/thedeveloperyug" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
      </main>
      <footer><span>YOGESH PANDEY</span><span>SOFTWARE · AI · SYSTEMS</span><span>© {new Date().getFullYear()}</span></footer>
    </div>
  );
}

export default App;
