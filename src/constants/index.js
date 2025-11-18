import {
  nitk,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  ethglobal,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  ethindia,
  globalAi,
  khoj,
  kosh,
  polkadot_dev_cli,
  hackathon_curation_agent,
  kudos,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlask,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiTypescript,
  SiOracle,
  SiGmail,
  SiGooglesheets,
  SiThirdweb,
  SiIntellijidea
} from "react-icons/si";

import { FaHardHat, FaRust } from "react-icons/fa";

import { IoIosNotificationsOutline } from "react-icons/io";

import { FaGolang, FaXTwitter } from "react-icons/fa6";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";
import { VscAzure } from "react-icons/vsc";
import { BiLogoVisualStudio } from "react-icons/bi";

import { RiGeminiFill } from "react-icons/ri";

export const resumeLink ="https://drive.google.com/file/d/1FFNH9oacqt_9Mc5F2wrbVIE9JpipsdC0/view?usp=drivesdk";
export const repoLink = "https://github.com/dharmateja01/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/panduga-dharma-teja-008b5a282";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "openSource",
    title: "Open Source",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

// Add your past academic experiences here
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "NALLA NARASIMHA REDDY EDUCATIONAL SOCIETY GROUP OF INSTITUTIONS",
    degree: "Bachelor of Technology",
    duration: "October 2023 - May 2026",
    content1: "Major: Computer science and engineering",
    content2: "Minor: Artificial intellegence and machine learning",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Samskruthi college of polytechnic",
    degree: "",
    duration: "August 2020 - June 2023",
    content1:
      "Graduated with a distinction ",
  },
];

// Add your past achievements here for example - rankings in hackathons/events
export const achievements = [
  {
    id: "a-1",
    icon: portfolio, // replace with your icon if needed
    event: "Top 10% Academic Performer – B.Tech CSE (AI & ML)",
    position: "Academic Achievement",
    content1: "Maintained strong academic performance throughout semesters.",
    content2: "",
    content3: "",
    article: "",
  },

  {
    id: "a-2",
    icon: portfolio,
    event: "NPTEL Machine Learning – Elite Certification",
    position: "Elite Grade",
    content1: "Secured an Elite score in the national-level NPTEL ML course.",
    content2: "",
    content3: "",
    article: "",
  },

  {
    id: "a-3",
    icon: portfolio,
    event: "Technical Quiz – CSE Department (NNRG)",
    position: "3rd Place",
    content1: "Ranked 3rd among 50+ participants in a department-level quiz.",
    content2: "",
    content3: "",
    article: "",
  },

  {
    id: "a-4",
    icon: portfolio,
    event: "Technical Certifications",
    position: "Completed 7+ Courses",
    content1: "Completed certifications in Java, ML, Cloud, IoT, AI/ML, Flutter, and Data Analytics.",
    content2: "",
    content3: "",
    article: "",
  },

  {
    id: "a-5",
    icon: portfolio,
    event: "Project Development",
    position: "5+ Real-World Projects",
    content1: "Built projects in AI/ML, Android, PHP, Full Stack, and Automation.",
    content2: "",
    content3: "",
    article: "",
  },

  {
    id: "a-6",
    icon: portfolio,
    event: "Hackathons & Coding Events",
    position: "Active Participant",
    content1: "Engaged in hackathons, coding contests, and department tech events.",
    content2: "",
    content3: "",
    article: "",
  },
];

// Add your software developments skills here for example - programming languages, frameworks etc.
export const skills = [
  {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: DiJava, name: "Java" },
      { id: "pl-2", icon: SiPython, name: "Python" },
      { id: "pl-3", icon: SiC, name: "C" },
      { id: "pl-4", icon: DiRuby, name: "PHP" },
      { id: "pl-5", icon: SiJavascript, name: "JavaScript" },
      { id: "pl-6", icon: AiFillHtml5, name: "HTML" },
      { id: "pl-7", icon: DiCss3, name: "CSS" },
    ],
  },

  {
    title: "Full Stack (Java + Web)",
    items: [
      { id: "fs-1", icon: SiJavascript, name: "Spring Boot (Java)" }, // Using JS icon as placeholder
      { id: "fs-2", icon: SiJavascript, name: "REST API Development" },
      { id: "fs-3", icon: SiJavascript, name: "JDBC" },
      { id: "fs-4", icon: SiJavascript, name: "Servlets & JSP" },
      { id: "fs-5", icon: SiReact, name: "ReactJS" },
      { id: "fs-6", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },

  {
    title: "Databases",
    items: [
      { id: "db-1", icon: SiMysql, name: "MySQL" },
      { id: "db-2", icon: SiMysql, name: "SQLite" },
      { id: "db-3", icon: SiJavascript, name: "MongoDB" },
    ],
  },

  {
    title: "Tools & Practices",
    items: [
      { id: "t-1", icon: SiGit, name: "Git" },
      { id: "t-2", icon: AiFillGithub, name: "GitHub" },
      { id: "t-3", icon: BiLogoVisualStudio, name: "VS Code" },
      { id: "t-4", icon: SiIntellijidea, name: "IntelliJ IDEA" },
      { id: "t-5", icon: SiPostman, name: "Postman" },
      { id: "t-6", icon: SiOpenai, name: "Unit Testing" },
      { id: "t-7", icon: SiOpenai, name: "SDLC" },
      { id: "t-8", icon: SiOpenai, name: "Agile (Scrum)" },
      { id: "t-9", icon: SiGooglecloud, name: "Documentation" },
    ],
  },
];

// Add your current/past professional work experience here
export const experiences = [
  {
    organisation: "Sure Trust ProEd",
    logo: oracle,
    link: "https://www.suretrustforruralyouth.com/",
    positions: [
      {
        title: "Full Stack Web Developer Trainee",
        duration: "November 2025 - Present",
        content: [
          { text: "Automated applicant screening, shortlisting, and interview note sending using FastAPI + n8n." },
          { text: "Improved accuracy by applying consistent filtering rules with AICTE APIs." },
          { text: "Increased recruitment capacity by eliminating manual processes." },
        ],
      },
      {
        title: "web Developer intern ",
        duration: "august 2025 - nov 2025",
        content: [
          { text: "Developed and maintained the Sure Trust ProEd website using React.js and Tailwind CSS." },
          { text: "Collaborated with cross-functional teams to gather requirements and implement new features." },
          { text: "Optimized website performance, resulting in a 20% increase in page load speed." },
        ],
      },
    ],
  },
  {
    organisation: "TLC Hyderabad",
    logo: iris,
    link: "https://www.tlcgroup.org.in/",
    positions: [
      {
        title: "Programmer Intern",
        duration: "Aug 2023 - Dec 2023",
        content: [
          { text: "Provided L1 technical support and resolved configuration and access issues." },
          { text: "Used Git & GitHub for version control and repo management." },
          { text: "Maintained documentation ensuring data integrity." },
          { text: "Assisted in software deployment across systems." },
          { text: "al flow system to facilitate data collection and display on the Institute's Department Websites.",}
        ],
      },
    ],
  },
];

// Add information about all the projects to be listed out in your portfolio
export const projects = [
  {
    id: "proj-1",
    title: "AI-Driven Recruitment Automation System",
    github: "YOUR_GITHUB_LINK",
    image: portfolio,
    content:
      "Automated resume uploads, skill-gap analysis, and recruiter dashboard using n8n, NLP, Google Sheets API, and Google Drive.",
    stack: [
      { id: "p1-1", icon: SiReact, name: "React.js" },
      { id: "p1-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "p1-3", icon: SiGooglecloud, name: "n8n" },
    ],
  },
  {
    id: "proj-2",
    title: "Healthcare Android App",
    github: "https://github.com/Dharmateja01/Android-Based-Healthcare-App",
    image: portfolio,
    content:
      "Android app for lab booking, doctor consultation, and medicine ordering with SQLite backend and Java.",
    stack: [
      { id: "p2-1", icon: DiJava, name: "Java" },
      { id: "p2-2", icon: SiMysql, name: "SQLite" },
    ],
  },
  {
    id: "proj-3",
    title: "Sentiment Analysis using DistilBERT",
    github: "YOUR_GITHUB_LINK",
    image: portfolio,
    content:
      "NLP pipeline using Hugging Face Transformers for sentiment detection.",
    stack: [
      { id: "p3-1", icon: SiPython, name: "Python" },
      { id: "p3-2", icon: SiOpenai, name: "Transformers" },
    ],
  },
  {
    id: "proj-4",
    title: "Online Food Ordering System",
    github: "https://github.com/Dharmateja01/online-food-order-system",
    image: portfolio,
    content:
      "PHP & MySQL based food ordering web app with admin dashboard.",
    stack: [
      { id: "p4-1", icon: SiJavascript, name: "PHP" },
      { id: "p4-2", icon: SiMysql, name: "MySQL" },
    ],
  },
];

// Add links to blogs here
export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01",
      },
      {
        id: "tag-2",
        name: "tag 03",
      },
      {
        id: "tag-3",
        name: "tag 03",
      },
    ],
  },
];

// Highlight your GitHub stats like - Organisation, Issues Opened, Pull Requests etc.
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

// List out the extra curricular activities you have indulged in, like - student clubs, research groups etc.
export const extraCurricular = [
  {
    id: 1,
    organisation: "CSE Technical Club, NNRG",
    title: "Student Member",
    duration: "2023 - Present",
    content: [
      {
        text: "Participated in technical meetups, coding sessions, and department workshops.",
        link: "",
      },
      {
        text: "Helped organize internal coding challenges and guided juniors in programming basics.",
        link: "",
      },
    ],
    logo: gdsc, // you can replace with your own logo
  },

  {
    id: 2,
    organisation: "NNRG Tech Fest",
    title: "Event Volunteer",
    duration: "2024",
    content: [
      {
        text: "Assisted in organizing technical events, hackathons, and seminars during the college fest.",
        link: "",
      },
      {
        text: "Managed registrations, scoring, and event flow for 200+ participants.",
        link: "",
      },
    ],
    logo: genesis,
  },

  {
    id: 3,
    organisation: "Hackathon Participation",
    title: "Team Member",
    duration: "2023 - Present",
    content: [
      {
        text: "Participated in multiple college-level hackathons focusing on AI/ML and full-stack development.",
        link: "",
      },
      {
        text: "Collaborated with teammates to build small innovative projects and present solutions.",
        link: "",
      },
    ],
    logo: iris,
  },

  {
    id: 4,
    organisation: "AI & ML Student Community",
    title: "Active Learner",
    duration: "2024 - Present",
    content: [
      {
        text: "Participated in group learning sessions on Python, Machine Learning and Data Science.",
        link: "",
      },
      {
        text: "Completed peer-led challenges on Git, SQL, Android, and full stack development.",
        link: "",
      },
    ],
    logo: ecell,
  },

  {
    id: 5,
    organisation: "Coding Platforms",
    title: "Competitive Programming Practice",
    duration: "2023 - Present",
    content: [
      {
        text: "Solved coding problems on HackerRank, LeetCode and CodeChef to improve logic building.",
        link: "",
      },
      {
        text: "Earned badges in Java, SQL, Python and problem solving.",
        link: "",
      },
    ],
    logo: portfolio, // placeholder icon
  },
];

// Links to your social media profiles
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/panduga-dharma-teja-008b5a282",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/Dharmateja01",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:work.pandugadharmateja@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/dharma_teja_05/",
  },
];

// Your professional summary
export const aboutMe = {
  name: "Dharma Teja",
  githubUsername: "Dharmateja01",
  tagLine:
    "Java Full Stack | MERN Developer | AI & ML Enthusias",
  intro:
    "Motivated developer skilled in Java Full Stack, MERN Stack, Android, and AI/ML. Passionate about building scalable applications and solving real-world problems.",
};

// The maximum number of PRs to be displayed in the Open Source Contributions section.
export const itemsToFetch = 20;

// Add names of GitHub repos you'd like to display open source contributions from in the 'org/repo' format.
export const includedRepos = [
  "publiclab/plots2",
  "zulip/zulip",
  "paritytech/polkadot-sdk",
];

