import React, { useEffect, useState } from "react";
import "./App.css";

const experiences = [
  {
    period: "Jul 2025 — Present",
    role: "Software Engineer",
    company: "BMW TechWorks India",
    location: "Pune · On-site",
    tone: "cyan",
    summary: "Working across the middleware stack and Log & Trace framework, including datarouter, network manager and IPC tracing. Contributing on behalf of BMW Group to Eclipse S-CORE software architecture.",
    tags: ["C++", "QNX", "IPC", "Log & Trace", "Eclipse S-CORE", "GDB", "Valgrind"]
  },
  {
    period: "Oct 2024 — Jul 2025",
    role: "Associate Software Engineer",
    company: "KPIT Technologies",
    location: "Pune · On-site",
    tone: "lime",
    summary: "Automated CARIAD automotive validation using ENNA and Python, developed CAN/UDS test automation, and designed a Generative AI log analysis system using LangChain, Ollama, Vector DB, RAG and CI/CD.",
    tags: ["Python", "CAN", "UDS", "LangChain", "Ollama", "Vector DB", "RAG", "CI/CD"]
  },
  {
    period: "Dec 2023 — Sep 2024",
    role: "Software Trainee",
    company: "KPIT Technologies",
    location: "Pune · On-site",
    tone: "violet",
    summary: "Completed Genesis training in Modern C++, OOP, socket programming and multithreading, while developing optimized image-processing solutions with OpenCV.",
    tags: ["Modern C++17", "OOP", "Sockets", "Multithreading", "OpenCV"]
  }
];

const skills = {
  "Programming": ["C", "Modern C++17", "Python", "Data Structures & Algorithms"],
  "Automotive & Systems": ["QNX", "Linux", "IPC", "CAN", "UDS", "GDB", "Valgrind", "Software Design"],
  "AI / Developer Intelligence": ["AI/ML", "LangChain", "Ollama", "Vector DB", "RAG", "Claude", "GitHub Copilot"],
  "Build & Engineering": ["Zuul", "Git", "Bazel", "GTest", "Docker", "CMake", "SQL", "AWS"],
  "Web & Application": ["Django", "Web Development"]
};

const certifications = [
  { title: "DSA in C++", issuer: "Coding Ninjas", year: "2023" },
  { title: "Advanced C++ Certification", issuer: "KPIT Genesis", year: "2024" },
  { title: "AWS Certified Developer Associate — DVA-C02", issuer: "AWS", year: "2023" },
  { title: "Machine Learning", issuer: "Allsoft — IBM", year: "2022" }
];

const projects = [
  {
    number: "01",
    name: "NEYTRA OS",
    type: "Independent · AI-native computing",
    description: "An independent AI-native operating system concept exploring intent-driven computing, intelligent automation and a new interaction layer between people, software and machines.",
    stack: ["AI Systems", "Operating Systems", "Automation", "C++", "Python"],
    repo: "https://github.com/thedeveloperyug/Neytra_OS",
    live: "https://thedeveloperyug.github.io/neytra-os-website/",
    featured: true
  },
  {
    number: "02",
    name: "Generic Trace Library",
    type: "BMW · Tracing framework",
    description: "Worked on IPC tracing in the network manager, including network statistics design, plugin worker and LTPM subsystems, tracing data flow and buffer handling. Improved code quality using ISO 26262, AUTOSAR, MISRA C++ and Coverity practices.",
    stack: ["C++", "IPC", "Network Manager", "LTPM", "ISO 26262", "MISRA C++", "Coverity"]
  },
  {
    number: "03",
    name: "Logging Framework",
    type: "BMW · Systems engineering",
    description: "Contributed to the datarouter, a central logging daemon that reads records from per-application shared-memory buffers and routes them to DLT, network and file backends. Focused on non-blocking sessions, buffers and statistics.",
    stack: ["QNX", "C++", "Shared Memory", "DLT", "Buffers", "Statistics"]
  },
  {
    number: "04",
    name: "AI-Driven Log Analysis Application",
    type: "KPIT · Generative AI",
    description: "Developed an AI-powered log analysis system using Python, LangChain, Ollama, Vector DB and LLMs to detect anomalies and identify root causes in software pipelines, with AWS and CI/CD for scalable workflows.",
    stack: ["Python", "LangChain", "Ollama", "LLMs", "Vector DB", "AWS", "CI/CD"]
  },
  {
    number: "05",
    name: "Automated ECU Testing & OTA Updates",
    type: "KPIT · Automotive automation",
    description: "Built Python automation around CAN and UDS for ECU test execution and performed integration testing for TCU/ECU OTA updates using AWS Cloud, MQTT and Comlib API for ECU–cloud communication.",
    stack: ["Python", "CAN", "UDS", "AWS", "MQTT", "Comlib API"]
  }
];

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("visible"));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.12 });
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

  useEffect(() => {
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      const card = document.querySelector(".hero-visual");
      if (card && window.innerWidth > 850) {
        card.style.setProperty("--tilt-x", `${(event.clientX / window.innerWidth - 0.5) * 8}deg`);
        card.style.setProperty("--tilt-y", `${(event.clientY / window.innerHeight - 0.5) * -8}deg`);
      }
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="site-shell">
      <div className="cursor-glow" /><div className="noise" /><div className="grid-glow" />
      <div className="orb orb-one" /><div className="orb orb-two" />
      <header className="nav-wrap"><nav className="nav">
        <button className="brand" onClick={() => go("home")} aria-label="Go home"><span className="brand-mark">YP</span><span>Yogesh Pandey</span></button>
        <div className="nav-links">{["about", "experience", "skills", "projects", "education"].map((id) => <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>{id}</button>)}</div>
        <button className="nav-cta" onClick={() => go("contact")}>Let’s talk ↗</button>
      </nav></header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="eyebrow reveal"><span className="pulse" /> SOFTWARE ENGINEER · AUTOMOTIVE · AI</div>
              <h1 className="reveal delay-1">Engineering the <span>intelligent</span> edge.</h1>
              <p className="hero-lead reveal delay-2">I’m <strong>Yogesh Pandey</strong> — Software Engineer at BMW TechWorks India. I build low-latency automotive software, tracing and developer intelligence systems, while exploring AI-native computing with NEYTRA OS.</p>
              <div className="hero-actions reveal delay-3"><button className="primary" onClick={() => go("projects")}>Explore my work <span>↗</span></button><a className="secondary" href="https://www.linkedin.com/in/thedeveloperyug" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div>
              <div className="hero-meta reveal delay-3"><span>📍 Pune, Maharashtra, India</span><span>BMW TechWorks India</span><span>NEYTRA OS / INDEPENDENT</span></div>
            </div>
            <div className="hero-visual reveal delay-2" aria-hidden="true"><div className="hero-stage"><div className="liquid liquid-one" /><div className="liquid liquid-two" /><div className="liquid liquid-three" /><div className="stage-grid" /><div className="glass-tile tile-one"><span>AI / SYSTEMS</span><b>INTELLIGENT</b></div><div className="glass-tile tile-two"><span>BMW / EDGE</span><b>LOW LATENCY</b></div><div className="glass-tile tile-three"><span>NEYTRA / OS</span><b>BUILDING</b></div><div className="glass-window"><div className="window-bar"><span>YP.SYSTEMS</span><span>● LIVE</span></div><div className="window-content"><div className="fluid-orbit orbit-one" /><div className="fluid-orbit orbit-two" /><div className="fluid-core"><span>YP</span><i /></div><div className="window-caption"><small>SOFTWARE · AI · SYSTEMS</small><strong>ENGINEERING<br />THE INTELLIGENT EDGE.</strong></div></div></div><div className="stage-scan" /></div></div>
          </div>
          <div className="scroll-cue">SCROLL TO EXPLORE <span>↓</span></div>
        </section>

        <section id="about" className="section compact-section"><div className="section-head reveal"><span>01 / PROFILE</span><h2>From low-level systems<br /><em>to intelligent software.</em></h2></div><div className="about-grid"><div className="about-intro reveal"><p>I work at the intersection of <strong>automotive software, systems engineering and AI.</strong> My experience covers QNX/Linux, modern C++, IPC, CAN/UDS automation, logging & tracing, cloud-connected ECU workflows and Generative AI.</p><p>Outside client engineering work, <strong>NEYTRA OS</strong> is my independent build exploring intent-driven computing and AI-native system interaction.</p></div><div className="stats reveal"><div><strong>4+</strong><span>years across<br />software & automotive</span></div><div><strong>150+</strong><span>coding problems<br />solved</span></div><div><strong>20+</strong><span>certifications &<br />professional learning</span></div><div><strong>8.4</strong><span>B.Tech<br />CGPA</span></div></div></div></section>

        <section id="experience" className="section dark-section"><div className="section-head reveal"><span>02 / EXPERIENCE</span><h2>Building systems<br /><em>that matter.</em></h2></div><div className="timeline">{experiences.map((item, index) => <article className={`timeline-item reveal delay-${Math.min(index + 1, 3)}`} key={`${item.company}-${item.role}`}><div className={`timeline-dot ${item.tone}`} /><div className="timeline-period">{item.period}</div><div className="timeline-card"><div className="timeline-title"><div><h3>{item.role}</h3><h4>{item.company}</h4></div><span>{item.location}</span></div><p>{item.summary}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></section>

        <section id="skills" className="section"><div className="section-head reveal"><span>03 / TOOLKIT</span><h2>Systems depth.<br /><em>Engineering range.</em></h2></div><div className="skills-grid">{Object.entries(skills).map(([group, items], i) => <div className={`skill-card reveal delay-${Math.min(i + 1, 3)}`} key={group}><div className="skill-index">0{i + 1}</div><h3>{group}</h3><div className="skill-tags">{items.map((skill) => <span key={skill}>{skill}</span>)}</div><div className="skill-meter"><span style={{ width: `${Math.min(58 + items.length * 5, 90)}%` }} /></div></div>)}</div></section>

        <section id="projects" className="section projects-section"><div className="section-head reveal"><span>04 / SELECTED WORK</span><h2>Production systems<br /><em>and new ideas.</em></h2></div><div className="project-list">{projects.map((project) => <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.name}><div className="project-number">{project.number}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-row">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-actions">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live site ↗</a>}</div></article>)}</div></section>

        <section id="education" className="section dark-section"><div className="section-head reveal"><span>05 / EDUCATION & CREDENTIALS</span><h2>Foundation for<br /><em>continuous learning.</em></h2></div><div className="education-grid"><article className="edu-card reveal"><span>2021 — 2024</span><h3>Lovely Professional University</h3><h4>B.Tech — Computer Science</h4><p>8.4 CGPA · Relevant coursework: Machine Learning and DevOps.</p></article><article className="edu-card reveal delay-1"><span>2019 — 2021</span><h3>Ambition Institute of Technology</h3><h4>Diploma — Computer Science</h4><p>80% · Relevant coursework: Data Structure and Algorithm, Machine Learning.</p></article></div><div className="cert-summary reveal"><strong>20+</strong><span>certifications, courses and professional learning milestones</span></div><div className="cert-grid">{certifications.map((cert) => <div className="edu-card reveal" key={cert.title}><span>{cert.year}</span><h3>{cert.title}</h3><h4>{cert.issuer}</h4></div>)}</div></section>

        <section id="contact" className="section contact-section"><div className="section-head reveal"><span>06 / CONTACT</span><h2>Let’s build something<br /><em>meaningful.</em></h2></div><div className="contact-card reveal"><p>Open to conversations around automotive systems, AI engineering, developer intelligence and ambitious software projects.</p><div className="contact-actions"><a className="primary" href="mailto:thedeveloperyug@gmail.com">thedeveloperyug@gmail.com ↗</a><a className="secondary" href="https://github.com/thedeveloperyug" target="_blank" rel="noreferrer">GitHub ↗</a><a className="secondary" href="https://www.linkedin.com/in/thedeveloperyug" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
      </main>
      <footer className="footer"><span>© {new Date().getFullYear()} Yogesh Pandey</span><span>SOFTWARE · AI · SYSTEMS</span><span>NEYTRA OS / INDEPENDENT</span></footer>
    </div>
  );
}

export default App;
