export interface Project {
  id: string;
  title: string;
  category: 'IoT' | 'Web Development';
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  architectureOverview: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  statusOrScore: string;
  description: string;
  highlights: string[];
  skillsAcquired: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  level: string;
  items: string[];
  practicalApplication: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId: string;
  skills: string[];
  description: string;
  verifyUrl?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  event: string;
  role: string;
  description: string;
  solution: string;
  technologies: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "PRASHANTH.R",
    kicker: "HELLO, I'M",
    headline: "Aspiring AI Engineer · AIML Student · Developer",
    shortBio: "Passionate about technology, programming, and building innovative solutions. Currently pursuing B.Tech in Computer Science Engineering (AIML) at REVA University.",
    fullBio: "My name is Prashanth, and I am pursuing B.Tech in Computer Science Engineering (AIML), currently in my 3rd semester at REVA University. I am interested in technology, programming, and learning new skills. My goal is to become an AI Engineer and build something innovative in the future.",
    email: "prashanthr172007@gmail.com",
    phone: "9901200321",
    location: "Bengaluru, India",
    university: "REVA University",
    degree: "B.Tech in Computer Science Engineering (AIML)",
    currentSemester: "3rd Semester",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
    },
    avatar: "/src/assets/images/profile_developer_avatar_1793346329783.jpg",
    heroVisual: "/src/assets/images/hero_ai_dev_visual_1793346328150.jpg",
  },
  quickStats: [
    { label: "B.Tech Specialization", value: "CSE (AIML)" },
    { label: "PUC Academic Score", value: "95%" },
    { label: "Current University", value: "REVA University" },
    { label: "Hackathons Explored", value: "2+" },
  ],
  education: [
    {
      degree: "B.Tech – Computer Science Engineering (AIML)",
      institution: "REVA University",
      period: "2024 – 2028",
      statusOrScore: "3rd Semester",
      description: "Comprehensive undergraduate program emphasizing Artificial Intelligence, Machine Learning algorithms, Data Structures, Object-Oriented Systems, and Embedded Computing.",
      highlights: [
        "Specialization in Artificial Intelligence and Machine Learning (AIML)",
        "Active member of developer clubs and tech symposiums",
        "Focused coursework in Discrete Math, Algorithms, Python and Computer Architecture",
      ],
      skillsAcquired: ["Machine Learning Basics", "Python", "Data Structures", "IoT Interfacing", "C/C++"],
    },
    {
      degree: "12th / Pre-University Course (PUC)",
      institution: "BGS PU College",
      period: "2022 – 2024",
      statusOrScore: "95% Score",
      description: "Pre-university curriculum in Science stream with Physics, Chemistry, Mathematics, and Computer Science, graduating in the top percentile.",
      highlights: [
        "Secured outstanding academic distinction with 95% aggregate score",
        "Built solid mathematical foundation in calculus, linear algebra, and logic",
        "Early immersion in computer science fundamentals and structured programming",
      ],
      skillsAcquired: ["Advanced Mathematics", "Analytical Physics", "Computer Science Foundations", "Logical Problem Solving"],
    },
  ] as EducationItem[],
  projects: [
    {
      id: "assistance-cap",
      title: "Assistance Cap for Blind People",
      category: "IoT",
      tagline: "Wearable smart assistive hardware designed to empower visually impaired mobility.",
      description: "An innovative IoT-based project designed to help visually impaired people navigate their surroundings safely through real-time obstacle sensing and proactive spatial alerts.",
      longDescription: "Navigating unfamiliar physical environments presents everyday challenges for visually impaired individuals. This assistive wearable smart cap integrates micro-ultrasonic sensors, proximity LiDAR rangefinders, and an intelligent feedback unit. As obstacles approach within critical collision radii, the system triggers directional haptic pulses and subtle acoustic frequency cues, granting the user hands-free environmental awareness.",
      image: "/src/assets/images/project_assistance_cap_1793346328901.jpg",
      technologies: ["IoT", "Sensors", "Microcontrollers", "Spatial Rangefinding", "Haptic Feedback", "Embedded C"],
      metrics: [
        { label: "Detection Range", value: "0.2m – 4.5m" },
        { label: "Response Latency", value: "< 45ms" },
        { label: "Feedback Channels", value: "Haptic + Audio" },
      ],
      features: [
        "Omni-directional front and peripheral obstacle detection array",
        "Low-power micro-controller architecture optimized for wearable battery life",
        "Graduated frequency buzzers providing intuitive depth perception",
        "Ergonomic, lightweight cap integration that looks like casual headwear",
      ],
      architectureOverview: "Sensor array transmits continuous distance readings to the microcontroller logic board. A proximity evaluation algorithm categorizes obstacles by urgency and routes immediate interrupt signals to mini vibration motors and acoustic transducers.",
    },
    {
      id: "sportshub",
      title: "SportsHub – Sports Management System",
      category: "Web Development",
      tagline: "Comprehensive web platform streamlining club management, training schedules, and athlete communications.",
      description: "A modern web-based platform for managing sports clubs, members, training schedules, tournaments, events, and real-time team communication.",
      longDescription: "SportsHub replaces fragmented spreadsheets and communication channels with a single intuitive digital command center. Coaches and club administrators can coordinate training sessions, track athlete attendance and performance progress, organize tournament fixture brackets, and broadcast team announcements across all sporting disciplines.",
      image: "/src/assets/images/project_sportshub_preview_1793346330350.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "RESTful APIs"],
      metrics: [
        { label: "Management Modules", value: "Roster, Schedule, Tournaments" },
        { label: "Device Support", value: "Responsive Web / Tablet / Mobile" },
        { label: "Data Flow", value: "Real-time state synchronization" },
      ],
      features: [
        "Interactive weekly training calendar with conflict detection and coach assignment",
        "Tournament bracket visualizer with automated score logging and progression",
        "Comprehensive athlete directory tracking fitness metrics, attendance, and positions",
        "Role-based views for club administrators, team coaches, and registered players",
      ],
      architectureOverview: "Single-page React client styled with modern Tailwind CSS communicating with Express REST endpoints. Modular state stores manage athlete rosters, event dispatchers, and live bracket computations.",
    },
  ] as Project[],
  skills: [
    {
      id: "problem-solving",
      title: "Problem Solving",
      kicker: "ALGORITHMIC RIGOR",
      summary: "Deconstructing complex computational challenges into clean, structured algorithmic workflows.",
      level: "Core Strength",
      items: ["Data Structures & Logic", "Algorithmic Efficiency", "System Debugging", "Pattern Recognition", "Edge Case Analysis"],
      practicalApplication: "Applied across competitive coding challenges, AI model pipelines, and embedded firmware debugging.",
    },
    {
      id: "programming",
      title: "Programming",
      kicker: "TECHNICAL FOUNDATION",
      summary: "Writing clean, modular, and maintainable code across diverse technical domains from low-level systems to modern web applications.",
      level: "Proficient",
      items: ["Python (IBM Certified)", "C / C++ Fundamentals", "JavaScript / TypeScript", "Object-Oriented Programming (OOP)", "Database / SQL Basics"],
      practicalApplication: "Creating data manipulation routines, RESTful services, and hardware firmware logic.",
    },
    {
      id: "teamwork",
      title: "Teamwork",
      kicker: "COLLABORATION & SYNERGY",
      summary: "Partnering seamlessly in cross-functional hackathon sprints, code sharing, and collaborative problem resolution.",
      level: "High Synergy",
      items: ["Hackathon Sprint Collaboration", "Peer Code Reviews", "Clear Technical Communication", "Git Version Control", "Conflict Resolution"],
      practicalApplication: "Successfully coordinated hackathon builds like SIH and collegiate web development challenges.",
    },
    {
      id: "promoting",
      title: "Promoting & Advocacy",
      kicker: "COMMUNICATION & PITCHING",
      summary: "Articulating technical value propositions, demonstrating prototypes, and advocating for innovative technological solutions.",
      level: "Strategic",
      items: ["Project Demonstrations & Pitches", "Idea Presentation", "Audience Engagement", "Technical Documentation", "Design Thinking Pitch"],
      practicalApplication: "Pitching assistive technology like the Smart Cap to evaluation juries and symposium audiences.",
    },
  ] as SkillCategory[],
  certifications: [
    {
      id: "innovation-entrepreneurship",
      title: "Innovation and Entrepreneurship",
      issuer: "Professional Academic Accreditation",
      credentialId: "INNO-ENTR-2025-PR",
      skills: ["Design Thinking", "Product Viability", "Intellectual Property", "Market Discovery", "Prototyping Strategy"],
      description: "Rigorous curriculum focused on identifying unaddressed user problems, designing user-centric prototypes, validating market feasibility, and structuring technology ventures.",
    },
    {
      id: "ibm-python",
      title: "IBM Certification in Python",
      issuer: "IBM Skills Network",
      credentialId: "IBM-PY-SPEC-84920",
      skills: ["Python Data Structures", "Functional Programming", "File I/O & APIs", "Data Analysis", "OOP Architecture"],
      description: "Industry-standard certification validating comprehensive Python competency including object-oriented software design, standard libraries, API consumption, and algorithmic data manipulation.",
    },
  ] as Certification[],
  hackathons: [
    {
      id: "sih",
      name: "Smart India Hackathon (SIH)",
      event: "National Level Innovation Initiative",
      role: "Lead Ideator & Prototype Contributor",
      description: "Prestigious national competition addressing high-impact socio-economic problem statements defined by government ministries and industry leaders.",
      solution: "Engineered innovative tech concepts aimed at accessibility and assistive automation with strict attention to feasibility and societal impact.",
      technologies: ["AI/ML Concepts", "IoT Prototyping", "Rapid Ideation", "Hardware Integration"],
    },
    {
      id: "web-dev-hackathon",
      name: "Web Development Hackathon",
      event: "Inter-Collegiate Hackathon Challenge",
      role: "Full-Stack Developer & Presenter",
      description: "High-velocity 24-48 hour hackathon demanding rapid conceptualization, development, and delivery of a production-ready web application under strict time constraints.",
      solution: "Designed and implemented responsive frontend interfaces with functional data backbones, completing end-to-end features ahead of demo evaluation.",
      technologies: ["React", "JavaScript", "Responsive UI", "REST APIs", "Team Version Control"],
    },
  ] as Hackathon[],
};
