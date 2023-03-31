/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Yogesh",
  logo_name: "Yogesh Pandey",
  nickname: "Yogesh",
  full_name: "Yogesh Pandey",
  subTitle: "Full Stack Developer, Open Source Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1xC_PY-4bV8xzatdGeDoFM36Wac1Cvc_1/view?usp=share_link",
  mail: "mailto:thedeveloperyug@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/thedeveloperyug",
  linkedin: "https://www.linkedin.com/in/thedeveloperyug/",
  gmail: "thedeveloperyug@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100037348102261",
  twitter: "https://twitter.com/thedeveloperyug",
  instagram: "https://www.instagram.com/thedeveloperyug/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Node, Express & MongoDB",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#7377AD",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },

        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Sklearn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },

        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#029FCE",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#207297",
          },
        },
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Nginx",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "Bachelor in Computer Science",
      logo_path: "lpu3.png",
      alt_name: "SSEC",
      duration: "Aug 2021 - Aug 2024",
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Ambition Institute of Technology",
      subtitle: "Diploma in Computer Science",
      logo_path: "ait.png",
      alt_name: "SSEC",
      duration: "Jul 2019 - Jul 2021",
      descriptions: [
        "⚡ I have completed my diploma in Computer Science.",
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://ambitionit.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Natural Language Processing with Probabilistic Models",
      subtitle: "DeepLearningAI",
      logo_path: "DeepLearningAI.png",
      certificate_link:
        "https://coursera.org/share/0eee91222f5ca41bc424bc95ca97e58c",
      // alt_name: "React.js",
      // color_code: "#2AAFED",
      color_code: "#f5f6fa",
    },
    {
      title:
        "Natural Language Processing with Classification and Vector Spaces",
      subtitle: "DeepLearningAI",
      logo_path: "DeepLearningAI.png",
      certificate_link:
        "https://coursera.org/share/b2264270e0501ed95c8f29692aec0359",
      alt_name: "React.js",
      // color_code: "#2AAFED",
      color_code: "#f5f6fa",
    },
    {
      title: "The complete 2022 Web Development Bootcamp",
      subtitle: "Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-25fb0fdb-0c78-418b-9bfe-96c5a36ed25e/",
      alt_name: "Udemy",
      // color_code: "#8211fa",
      color_code: "#f5f6fa",
    },
    {
      title: "Certificate of excellence in C++",
      subtitle: "Coding Ninja",
      logo_path: "codingninja.png",
      certificate_link:
        "https://certificate.codingninjas.com/view/00893069212a4b34",
      alt_name: "LinkedIn",
      // color_code: "#F6B808",
      color_code: "#2d3436",
    },
    {
      title: "JavaScript (Intermediate) Certificate",
      subtitle: "HackerRank",
      logo_path: "hackerank.png",
      certificate_link: "https://www.hackerrank.com/certificates/aba605bfbba3",
      alt_name: "Udemy",
      color_code: "#ffffff",
    },
    {
      title: "COURSE ON COMPUTER CONCEPTS (CCC),",
      subtitle: "National Institute of Electronics and Information Technology",
      logo_path: "NIELIT_Logo.jpg",
      // certificate_link:"#",
      alt_name: "2018",
      color_code: "#f5f6fa",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Web Developer",
          company: "SUNMINT ENERGY PVT LTD",
          company_url: "https://sunmint.in/",
          logo_path: "sunmintlogo.png",
          duration: "AUG 2022 - DEC 2022",
          location: "Remotely",
          description: `As a freelance web developer for SUNMINT ENERGY PVT LTD, I developed and designed their official websites, reflexdrive.in and sunmint.in, using HTML, JavaScript, Tailwind CSS, and PHP. Working closely with the company's team, I delivered custom solutions that met their requirements, while also conducting thorough testing and debugging to ensure the sites were fully functional and error-free. I created responsive designs with features such as contact forms and social media integration, optimized website performance for improved SEO rankings and faster page loading times, and provided ongoing maintenance and support to address any issues and make updates as needed.
          `,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Full Stack Developer",
          company: "Techpath (Former name - IT Skills & Solution) ",
          company_url: "https://techpath.biz/",
          logo_path: "techpathlogo.png",
          duration: "JUN 2020 - JAN 2021",
          location: "Varanasi, India",
          description: `During my internship at IT Skills & Solution in Varanasi, I developed functional and user-friendly web applications using PHP. Through various web development projects, I gained proficiency in PHP and its use for web development, as well as experience in designing scalable websites with SQL databases. Additionally, I became familiar with the Bootstrap4 framework and its use in creating responsive and mobile-first websites.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Machine Learning (Intern)",
          company: "AllSoft Solutions",
          company_url: "https://www.allsoftsolutions.in/IBM/Main",
          logo_path: "allsoft.png",
          duration: "JUN 2022 - JUL 2022",
          location: "Punjab, India",
          description: `Optimized the performance of an e-commerce website with 5,000 daily users by reducing page load time by 35% with the help of async-loaded JavaScript and building a backend API in
          Node.js, resulted in increased sales of 3.4X.Created a $5000 E-Learning platform front end in Angular and Metronic 8 themes, reducing development time by 33% and improving customer satisfaction by 75%. Debugged existing code and handling backend maintenance
          tasks, including the creation of APIs, integration with payment gateways, and connecting servers for proper functioning.
          `,
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Open Source & Volunteerships",
      experiences: [
        {
          title: "Aashray Army",
          company: "Student Organization",
          company_url: "https://gdg.community.dev/",
          logo_path: "ashrayarmy.jpg",
          duration: "Aug 2021 - Present",
          location: "LPU",
          description:
            "As a member of a student organization, I was promoted to the position of Tech Head, where I was responsible for managing the organization's website and technical events. In addition to my role as Tech Head, I also worked as a volunteer and successfully completed social events for the organization.",
          color: "#D83B01",
        },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Nov 2020 - Present",
          location: "Remotely",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Open Source Contributor",
          company: "Hacktoberfest",
          company_url: "https://hacktoberfest.com/",
          logo_path: "Hacktoberfest1_89bccb423a.png",
          duration: "2019",
          location: "Remotely",
          description:
            "Participated in Hacktober fest 2019, contributed to open source projects, and earned swags and hoodies as rewards",
          color: "#5a900f",
        },
      ],
    },
    {
      title: "Coding Platforms",
      experiences: [
        {
          title: "LeetCode",
          company: "LeetCode",
          company_url: "https://leetcode.com/thedeveloperyug/",
          logo_path: "leetcode.png",
          duration: "JAN 2023 - Present",
          location: "Online",
          description:
            "Solved more than 100 LeetCode problems, improving proficiency in various data structures and algorithms",
          color: "#D83B01",
        },
        {
          title: "Codeforces",
          company: "Codeforces",
          company_url: "https://codeforces.com/profile/thedeveloperyug",
          logo_path: "codeforces.png",
          duration: "JAN 2023 - Present",
          location: "Online",
          description:
            "Participated in Codeforces challenges, gaining experience in competitive programming and problem-solving",
          color: "#040f26",
        },
        {
          title: "HackerRank",
          company: "HackerRank",
          company_url: "https://www.hackerrank.com/thedeveloperyug",
          logo_path: "hackerank.png",
          duration: "2022",
          location: "Online",
          description:
            "Solved many problems, improving proficiency in various data structures and algorithms also i have earned certificates in SQL, Javascript, Python, etc.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, REST API's, and React Project. Below are some of my projects. You can check all of my projects on my GitHub by clicking on the project.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilepic.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Thanks for your time",
    subtitle:
      "I appreciate the opportunity to discuss my qualifications and experience with you. Please do not hesitate to contact me if you have any further questions or require any additional information.",
    link: "https://www.linkedin.com/in/thedeveloperyug/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Amazone Clone",
      url: "https://github.com/thedeveloperyug/Amazon_mern_app",
      description:
        "Developed and deployed a scalable e-commerce website clone of Amazon using the MERN stack, REST API, and Tailwind CSS and Deployed the application using Cyclic.app, provides automatic deployment from GitHub repositories.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:mongodb",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Material UI",
          iconifyClass: "logos:material-ui",
        },
      ],
    },
    {
      id: "1",
      name: "User Authentication System",
      url: "https://github.com/thedeveloperyug/userAuthentication_Backend",
      description:
        "Developed RESTful API endpoints using Node.js for performing CRUD operations on user data. and securing REST API endpoints through user authentication and authorization, as well as using JSON Web Token (JWT) and  MongoDB for creating secure authentication systems.",
      languages: [
        {
          name: "NodeJs",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "NodeJs",
          iconifyClass: "logos-mongodb",
        },
        // {
        //   name: "NodeJs",
        //   iconifyClass: "logos",
        // },
      ],
    },
    {
      id: "2",
      name: "Weather App",
      url: "https://github.com/thedeveloperyug/weatherApp",
      description:
        "This clone utilizes Rapid APIs to bring all data from backend. With this platform, you can easily search for random channels, select specific topics, and control the playback of videos at your discretion.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Tailwind",
          iconifyClass: "simple-icons:tailwindcss",
        },
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
      ],
    },
    {
      id: "3",
      name: "Chat Application",
      url: "https://github.com/thedeveloperyug/React_Chat_App",
      description:
        "I created a chat application using React and Google Firebase, with user authentication and real-time messaging. Tailwind CSS was used for styling. Firebase's backend services provided scalability and reliability.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "simple-icons:tailwindcss",
        },
      ],
    },
    {
      id: "4",
      name: "Programming Pathsala Clone",
      url: "https://github.com/thedeveloperyug/Programmin_Pathshala_clone",
      description:
        "I have developed a Programming Pathshala clone using HTML, CSS, Tailwind CSS, and JavaScript. By using HTML, CSS, Tailwind CSS, and JavaScript, the website is able to provide an intuitive and interactive user interface that enhances the learning experience.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "js",
          iconifyClass: "vscode-icons:file-type-js",
        },
        {
          name: "Tailwind",
          iconifyClass: "simple-icons:tailwindcss",
        },
      ],
    },
    {
      id: "5",
      name: "PERSONAL PORTFOLIO",
      url: "https://github.com/thedeveloperyug/portfolio",
      description:
        "A basic portfolio website made with react js, Tailwind CSS and other web technologies to showcase potential skills and work experience with a responsive contact form.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
