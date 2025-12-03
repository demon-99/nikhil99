/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Nikhil",
  logo_name: "Nikhil.k()",
  nickname: "harry / picleric",
  full_name: "Nikhil Kumar",
  subTitle: "Full stack Developer, Problem solving Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/17wvQPRx-2IUDyyxfMljZfF--qS2y_h-y/view?usp=sharing",
  mail: "nikhilk3023@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  /*github: "https://github.com/harikanani"*/
  github: "https://github.com/demon-99",
  linkedin: "https://www.linkedin.com/in/nikhilk3023/",
  gmail: "nikhilk3023@gmail.com",
  gitlab: "",
  // facebook: "https://www.facebook.com/harikrishan.kanani/",
  twitter: "",
  instagram: "https://www.instagram.com/____nikhil_99/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive Frontend / User Interfaces for web applications using ReactJS",
        "⚡ Build responsive and dynamic web applications with React and modern JavaScript",
        "⚡ Create robust backend services and REST APIs using Java Spring Boot",
        "⚡ Work with databases including PostgreSQL, MongoDB, and HBase for data storage and management",
        "⚡ Integrate third-party services such as AWS, Firebase, and Digital Ocean for cloud hosting and additional functionality",
        "⚡ Deliver end-to-end solutions combining frontend and backend expertise for scalable, high-performance applications"
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
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "logos:spring-icon", // you can also use "devicon:spring-plain" if your library supports it
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "HBase",
          fontAwesomeClassname: "simple-icons:apachehbase", // uses Iconify simple-icons
          style: {
            color: "#D5282E", // HBase brand red
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-plain:java-wordmark",
          style: {
            color: "#f89820",
          },
        },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
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
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
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
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5", // Kubernetes blue
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
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
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
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
      title: "Birla institute of technology, mesra",
      subtitle: "Bachelor of Technology in computer science",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡ I have studied core subjects like Data structures and algorithms, Operating System, Computer organization and architecture.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        "⚡ I participated in many hackathons and competetive programming events.",
      ],
      website_link: "",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "Hackathon",
      subtitle: "Hack The Mountains",
      logo_path: "hackathon1.svg",
      certificate_link:
        "",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "A300: Atlas Security",
      subtitle: "MongoDB University",
      logo_path: "mongo.png",
      certificate_link:
        "",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    {
      title: "MLH Local Hack Day: Build",
      subtitle: "Major League Hacking",
      logo_path: "mlh-logo.svg",
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#fe0037",
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
    "As a Node.js Backend Developer, I have worked with real projects for over two years. I've mostly done projects on my own. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Backend-Development-Engineer",
          company: "C-DOT",
          company_url: "https://www.cdot.in/",
          logo_path: "nightowls.jpg",
          duration: "Jul 2025 - Present",
          location: "Delhi",
          description: `Developed and maintained backend microservices for the National Trust Centre (NTC) platform, enabling
          secure registration, certification, and lifecycle management of IoT/M2M devices and applications.
          Improved API performance by 40%, reducing registration response times from several seconds to
          under 1.5 s.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "Software Developer",
          company: "Amdocs",
          company_url: "https://www.amdocs.com/",
          logo_path: "nightowls.jpg",
          duration: "Jun 2022 - Apr 2025",
          location: "Gurugram",
          description: `I joined amdocs in June 2022 as an associate software engineer then got promoted to 
          software developer in Jan 2024. In my amodocs journey, i got introduced to Relatime charging, and 
          rating of voice/sms/data/call session for both prepaid and postpaid. I worked for rating logic and 
          charging developments for various Telecom clients like Veon,azercell,TMO. Worked with agile and scrum 
          methodologies to accomplish project milestones and meet demanding timelines.`,
          // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          color: "#ee3c26",
        },
        {
          title: "IOS intern",
          company: "Lybrate",
          company_url: "https://www.lybrate.com/",
          logo_path: "crest.png",
          duration: "Jan 2022 - May-2022",
          location: "Remote",
          description: `I joined Lybrate as an ios intern on January 2022. I had the opportunity to delve into 
          iOS development.I worked on swift,swift UI , and objective C .Integrated APIs for fetching patient 
          details, designed scrollable video player for playing ads using avplayer and avplayer view controller.
          Developed and ensured high quality code and customer friendly UI solutions.`,
          color: "#0071C5",
        },
        // {
        //   title: "Node.js Backend Developer",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Dec 2022",
        //   location: "Surat, Gujarat",
        //   description: `Train, oversee, and mentor young software development employees. I created and managed the admin panel backend and a gambling application as a Node.js backend developer. I obtained knowledge in Web Socket, Payment Gateway Integration, and gaming legislation, while growing my industry experience and investigating new technologies.
        //   Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
        // {
        //   title: "Node.js Backend Developer (Intern)",
        //   company: "Valora Infotech",
        //   company_url: "http://valorainfotech.com/",
        //   logo_path: "valora.jpg",
        //   duration: "Oct 2020 - Mar 2021",
        //   location: "Surat, Gujarat",
        //   description: `Focus on change request functions in close collaboration with the project manager and team leads.
        //   Developed new and maintained existing applications.
        //   Increased productivity and problem-solving technics by 20%.
        //   We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
        //   `,
        //   // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
        //   color: "#0071C5",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Spring Boot Backend Projects, Python Scripts, and React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Nikhil_logo.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "URL Shortner",
      url: "https://github.com/demon-99/URL-Shortener",
      description:
        "A basic URL shortener is a simple web tool that converts long, cumbersome links into short, easy-to-share URLs. ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Spring-Boot",
          iconifyClass: "logos:spring-icon",
        },
        {
          name: "Augmented Reality",
          iconifyClass: "bi:badge-ar",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/URL-Shortener",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "PDF Assistant",
      url: "https://github.com/demon-99/PDF-Assistant/tree/main/Pdf-Assistant",
      description:
        "It enables intelligent querying, summarization, and content manipulation by combining PDF processing with LangChain4j’s modular AI components. ",
      languages: [
        {
          name: "Flutter",
          iconifyClass: "logos-flutter",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/PDF-Assistant/tree/main/Pdf-Assistant",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "My Full Stack Portfolio",
      url: "https://github.com/demon-99/Myportfolio",
      description:
        "My portfolio showcases the projects I’ve built, highlighting my skills in modern technologies and problem-solving through practical, real-world applications.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/Myportfolio",
          iconifyClass: "ri:github-fill",
        },
        {
          name: "Live Demo",
          url: "https://nikhilk3023.pythonanywhere.com/",
          iconifyClass: "mdi:web",
        },
      ],
    },
    {
      id: "3",
      name: "Movie Recomendation System",
      url: "https://github.com/demon-99/Movie-Recommendation-system",
      description:
        "Movie Recommendation System suggests films to users on their preferences, or patterns from similar users. It uses collaborative filtering to provide personalized movie suggestions.",
      languages: [
        {
          name: "Django",
          iconifyClass: "simple-icons:django",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/Movie-Recommendation-system",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "ERP-College",
      url: "https://github.com/demon-99/ERP-college",
      description:
        "A College ERP is a software platform that streamlines all academic, administrative, and financial operations of a college.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/ERP-college",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "Expense Controller",
      url: "https://github.com/demon-99/ExpenseController",
      description:
        "Expense Controller is a software tool that helps individuals or organizations track, manage, and optimize their spending. ",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Spring Boot",
          iconifyClass: "logos:spring-icon",
        },
      ],
      links: [
        {
          name: "Github",
          url: "https://github.com/demon-99/ExpenseController",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "https://github.com/harikanani/Node_Python",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "https://github.com/harikanani/AutomateDiscordBot",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "https://github.com/harikanani/flask_blog",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "9",
    //   name: "Netflix top series",
    //   url: "https://github.com/harikanani/netflix-top-series",
    //   description: "List of Top Netflix Series which is deployed to vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "https://github.com/harikanani/food-order-website",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //     {
    //       name: "Devfolio",
    //       url: "",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "https://deliquescent-cents.000webhostapp.com/",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    //   links: [
    //     {
    //       name: "Github",
    //       url: "https://github.com/harikanani/nft-launchpad",
    //       iconifyClass: "ri:github-fill",
    //     },
    //   ],
    // },
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
