export const profile = {
  name: "Udeshya Kumar",
  tagline:
    "Interested in software development and system design, and always learning as I build.",
  email: "udeshya1234@gmail.com",
  linkedin: "https://linkedin.com/in/udeshya-kumar-3889a9251",
  github: "https://github.com/Udeshyakumar1234",
  resume: "/Resume_Udeshya.pdf",
  resumeFileName: "Resume_Udeshya.pdf",
};

export const experience = [
  {
    company: "Bain Capabilities Network",
    role: "Data Analyst Intern",
    period: "Jan 2026 to Jul 2026",
    highlights: [
      "Developed Snowflake stored procedures for automated data ingestion using SQL, JavaScript, and Python.",
      "Built and maintained Airflow DAGs to manage and schedule data pipelines from AWS S3.",
      "Developed React components integrated with OpenAI APIs to generate dynamic SQL queries, execute them, analyze results, and turn the output into clear reports.",
      "Designed a pipeline that runs on Snowflake and Starburst, controlled through Airflow, which helped cut compute costs.",
      "Created Iceberg tables so data could be accessed the same way on both Snowflake and Starburst.",
      "Moved 10+ Snowflake stored procedures into reusable Python modules.",
    ],
  },
  {
    company: "EmergX AI",
    role: "Full Stack Intern",
    period: "Jun 2025 to Jul 2025",
    highlights: [
      "Helped build the company website from the ground up.",
      "Created new pages and implemented dynamic routes in Next.js.",
      "Improved how the frontend fetched data and talked to APIs in React.",
      "Worked on the MongoDB database and cleaned up server logic and state management.",
      "Cut loading times by about 30% after tracking down and fixing memory leaks.",
    ],
  },
];

export const projects = [
  {
    title: "Ultimate Tic-Tac-Toe",
    href: "https://github.com/Udeshyakumar1234/Ultimate-Tic-Tac-Toe",
    description:
      "A web game you can play locally with a friend or online with others. Share a room link to invite someone in, with moves checked on the server.",
    tech: ["React", "TypeScript", "Vite", "Node.js", "Express", "Socket.IO"],
  },
  {
    title: "Graphical Password",
    href: "https://github.com/Udeshyakumar1234/Graphical-Password-",
    description:
      "Builds graphical passwords from images you provide, using image segmentation.",
    tech: ["Python", "Tkinter", "SQLite"],
  },
  {
    title: "Food Scanner",
    href: "https://github.com/Udeshyakumar1234/Food-Scanner",
    description:
      "A mobile app that lets you scan a food barcode and see nutrition facts, ingredients, brand info, and more.",
    tech: ["Dart", "Flutter", "Firebase", "SQLite"],
  },
  {
    title: "Life-Expectancy-predictor",
    href: "https://github.com/Udeshyakumar1234/Life-Expectancy-predictor",
    description:
      "A survival-analysis project that estimates a person's remaining life expectancy as a range with uncertainty, not a single guaranteed number — combining the official SSA age-mortality baseline with lifestyle hazard ratios learned from real health-survey data, and propagating Bayesian posterior uncertainty into a survival curve.",
    tech: ["Python", "Pandas", "pymc", "matplotlib"],
  },
];

export const skills = {
  languages: [
    "Python",
    "SQL",
    "MongoDB Query Language (MQL)",
    "Golang",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ],
  frameworks: [
    "Next.js",
    "React",
    "Docker",
    "Bash",
    "Git",
    "Android Studio",
    "RESTful APIs",
    "FastAPI",
    "AWS",
  ],
  concepts: [
    "Data Structures and Algorithms",
    "Operating Systems",
    "Object Oriented Programming",
    "Encryption & Decryption",
    "System Design",
    "Agile Methodology",
    "Statistics and Probability",
    "Relational and Non Relational Databases",
    "Big Data Analysis",
    "Data Preprocessing",
  ],
  spoken: ["English", "Hindi"],
};

export const education = {
  institution: "Manipal Institute of Technology, Manipal",
  degree: "B.Tech in Computer and Communication Engineering",
  period: "2022 to 2026",
  cgpa: "6.95",
  note: "Minor specialization in Full Stack Development and Big Data",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
