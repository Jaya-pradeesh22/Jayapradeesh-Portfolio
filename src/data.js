// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit this file to update your info —
// you shouldn't need to touch any component to change text, add a project,
// or add a job.
// ---------------------------------------------------------------------------

export const profile = {
  fullName: 'Jayapradeesh S L',
  displayName: 'Jaya Pradeesh',
  role: 'Associate Software Engineer',
  location: 'Bengaluru, Karnataka',
  email: 'jayapradeesh481@gmail.com',
  phone: '+91 8925357999',
  linkedin: 'https://www.linkedin.com/in/jayapradeesh/',
  tagline:
    "Backend developer from Bengaluru building Java & Spring Boot applications — with a year of enterprise QA experience that shapes how I think about quality, edge cases, and clean code.",
  resumeUrl: '/resume/Jayapradeesh_S_L_Resume.pdf',
  profileImage: '/images/profilepic.png',
}

export const aboutParagraphs = [
  "Associate Software Engineer at Mphasis, leveraging over one year of specialized expertise in backend development and quality assurance for mission-critical enterprise systems. His professional contributions encompass the design of secure financial workflows for Wells Fargo clients and performance optimization of device drivers for HP printer applications, demonstrating a proven track record in delivering high-impact engineering solutions.",
  "A Bachelor of Technology in Information Technology graduate from Sathyabama University (June 2019 – August 2023), he possesses advanced proficiency in Java, Spring Boot, RESTful API development, modular service-layer architecture, cloud-native integrations (including AWS S3 and serverless paradigms), relational databases (SQL/MySQL), and DevOps methodologies such as containerized deployments and CI/CD pipelines.",
  'Notable project work includes architecting a group-key-managed file encryption system for secure multi-user cloud storage, a full-stack electronics e-commerce platform, and a Python-based customer review analysis pipeline that classifies and categorizes feedback using a local LLM.',
  'Holding certifications in Java Full Stack Development, Fundamentals of Ethical Hacking, Networking Fundamentals, and Python, Jayapradeesh is committed to architecting scalable, resilient, and secure software ecosystems that drive operational excellence.',
]

export const stats = [
  { value: '1+', label: 'Years experience' },
  { value: '5+', label: 'Projects built' },
  { value: 'Java', label: 'Core strength' },
]

export const experience = [
  {
    title: 'Associate Software Engineer',
    company: 'Mphasis',
    track: 'Java Backend Development',
    client: 'Wells Fargo',
    period: '2025 Dec – Present',
    location: 'Bengaluru, Karnataka',
    points: [
      'Developed RESTful APIs using Java and Spring Boot to support core banking operations including account management and financial transaction workflows.',
      'Implemented JWT-based authentication and authorization using Spring Security, securing API endpoints in compliance with banking-grade access control requirements.',
      'Designed and managed relational data models in MySQL, writing optimized queries for financial data persistence and retrieval using Spring Data JPA and Hibernate.',
      "Built service layer business logic following Spring Boot's layered architecture — controllers, services, and repositories — ensuring clean, maintainable code structure.",
      'Integrated and tested REST APIs using Postman, validating request-response cycles, error handling, and edge cases across banking modules.',
      'Followed secure coding practices and participated in peer code reviews to maintain code quality in a regulated financial services environment.',
      'Worked within an Agile/Scrum team, contributing to sprint planning, daily standups, and iterative backend feature delivery.',
    ],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Mphasis',
    track: 'Manual Testing',
    client: 'HP',
    period: '2024 Dec – 2025 Dec',
    location: 'Bengaluru, Karnataka',
    points: [
      'Designed, reviewed, and maintained structured test cases and test plans aligned to requirements, improving test coverage and ensuring traceability across release cycles.',
      'Prepared and maintained a Requirement Traceability Matrix (RTM) to map test cases against business requirements, ensuring complete coverage with zero requirement gaps.',
      'Executed regression and smoke testing on each build delivery, verifying that new changes did not break existing functionality before progression to higher environments.',
      'Identified, documented, and tracked software defects end-to-end in JIRA, providing detailed bug reports with steps to reproduce, severity, and priority classification.',
      'Collaborated with developers and team leads to triage defects, analyse root causes, and validate fixes, ensuring timely resolution within sprint timelines.',
      'Generated and shared test execution reports summarising pass/fail metrics, defect status, and test progress to support release readiness decisions.',
      'Worked within an Agile delivery environment, participating in sprint cycles and contributing to consistent quality across multiple product release milestones.',
    ],
  },
]

export const skills = [
  { name: 'Java', level: 95 },
  { name: 'Spring Boot', level: 90 },
  { name: 'MySQL', level: 88 },
  { name: 'HTML/CSS/JS', level: 85 },
  { name: 'Python', level: 82 },
  { name: 'Git / Maven / Postman', level: 87 },
]

// Add or edit projects here. Set `github`/`demo` to null to hide that link.
export const projects = [
  {
    id: 'cloud-security',
    name: 'Cloud Security Ninja',
    description:
      'Securing files on cloud storage with a dynamic group-key management protocol.',
    stack: ['Java', 'AES Encryption', 'AWS S3'],
    github: 'https://github.com/Jaya-pradeesh/GroupKeyManagementProtocol',
    demo: null,
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker Pro',
    description:
      'Smart expense tracking system with structured data handling and analytics.',
    stack: ['Supabase', 'JavaScript'],
    github: 'https://github.com/Jaya-pradeesh22/ExpenseTrackerSupabase',
    demo: null,
  },
  {
    id: 'electronics-ecommerce',
    name: 'Electronics Ecommerce',
    description:
      'Full-stack electronics shopping platform with authentication and cart flow.',
    stack: ['Spring Boot', 'Thymeleaf', 'HTML/CSS'],
    github: 'https://github.com/Jaya-pradeesh22/ElectroHub',
    demo: null,
  },
  {
    id: 'review-analysis',
    name: 'Customer Review Analysis',
    description:
      'Collects customer reviews from sites like Amazon and Flipkart, classifies them as positive or negative, and categorizes the underlying issue to surface what went wrong.',
    stack: ['Python', 'Sentiment Analysis', 'Ollama (Phi-3)', 'AI Chatbot'],
    github: null,
    demo: null,
  },
  {
    id: 'enum4linux',
    name: 'Enum4linux Enumeration',
    description:
      'Network enumeration workflow using enum4linux for security-focused analysis.',
    stack: ['Linux', 'Networking'],
    github: null,
    demo: null,
  },
]

export const nav = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
