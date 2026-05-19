export type TimelineItem = {
  id: string;
  type: "Work" | "Education" | "Research";
  title: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
  skills?: string[];
};

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "tokenbooks-software-engineer",
    type: "Work",
    title: "Software Engineer",
    organization: "Tokenbooks",
    period: "June 2025 - Present",
    location: "Vancouver, BC",
    highlights: [
      "Building full-stack product features for Web3 finance workflows across wallet sync, accounting, reporting, and payments.",
      "Shipped major payments product flows including request intake, approval routing, counterparty details, and crypto-to-fiat payout support.",
      "Improved multi-wallet, multi-chain ingestion reliability through async orchestration, status tracking, and structured error handling.",
    ],
    skills: ["React.js", "TypeScript", "BullMQ", "Web3", "OAuth"],
  },
  {
    id: "unbc-msc",
    type: "Education",
    title: "Master of Science in Computer Science",
    organization: "University of Northern British Columbia (UNBC)",
    period: "September 2024 - June 2026",
    location: "Prince George, BC",
    highlights: [
      "Grade: 4.08.",
      "Researching adversarial robustness of federated learning-based intrusion detection systems for modern network security.",
      "Designed and evaluated a causal-defense CNN across a non-IID federated learning setup using Python, PyTorch, and Flower.",
    ],
    skills: ["Federated Learning", "PyTorch", "Flower", "Network Security"],
  },
  {
    id: "unbc-graduate-teaching-assistant",
    type: "Work",
    title: "Graduate Teaching Assistant",
    organization: "University of Northern British Columbia (UNBC)",
    period: "September 2024 - June 2025",
    location: "Prince George, BC",
    highlights: [
      "Designed and delivered lab sessions for 110+ students covering statistics and visualization with R and R Commander.",
      "Taught advanced statistical modeling and computer science concepts using Python.",
      "Developed Jupyter Notebook labs, supported students in office hours, and assisted with grading and exam invigilation.",
    ],
    skills: ["Python", "R", "Jupyter Notebook", "Statistics"],
  },
  {
    id: "cloudsek-sde",
    type: "Work",
    title: "Software Development Engineer",
    organization: "CloudSEK",
    period: "July 2022 - August 2024",
    location: "Bangalore Urban, Karnataka, India",
    highlights: [
      "Built data visualization components, dashboards, and user-facing pages for XVigil and SVigil.",
      "Implemented chunked APK upload, reducing upload time by 40-50% and bypassing file size limits.",
      "Developed Exposure Search with other engineers, contributing to 100k+ searches and 3000+ new leads.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "Nest.js", "Recharts"],
  },
  {
    id: "cloudsek-sde-intern",
    type: "Work",
    title: "Software Development Engineer Intern",
    organization: "CloudSEK",
    period: "November 2021 - June 2022",
    location: "Bangalore Urban, Karnataka, India",
    highlights: [
      "Created reusable React components in Next.js for the BeVigil revamp.",
      "Reduced MongoDB count query execution time by 88% and cached count query results in Redis.",
      "Built admin dashboards, APIs, and optimized Docker images for frontend and backend services.",
    ],
    skills: ["Next.js", "React.js", "Node.js", "MongoDB", "Redis"],
  },
  {
    id: "tutort-software-engineer-intern",
    type: "Work",
    title: "Software Engineer Intern",
    organization: "Tutort Academy",
    period: "June 2021 - November 2021",
    highlights: [
      "Planned, designed, and developed tutort.net with reusable React components and a Node.js backend.",
      "Deployed the full app on AWS EC2 with Amazon Aurora PostgreSQL and improved SEO with prerendering.",
    ],
    skills: ["React.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    id: "khalsa-software-engineer-intern",
    type: "Work",
    title: "Software Engineer Intern",
    organization: "Khalsa Education and Spirituality",
    period: "July 2020 - January 2021",
    location: "Fatehgarh Sahib, Punjab",
    highlights: [
      "Developed the organization's online e-learning platform from scratch with course search, enrollment, and dashboard features.",
      "Contributed code to technical projects across IoT, Arduino, Raspberry Pi, face recognition, drones, and home automation.",
    ],
    skills: ["Web Development", "AWS", "IoT", "Raspberry Pi"],
  },
  {
    id: "iit-ropar-training-course",
    type: "Research",
    title: "Training Course",
    organization: "Indian Institute of Technology, Ropar",
    period: "June 2019 - August 2019",
    location: "Rupnagar, Punjab",
    highlights: [
      "Worked on face-recognition research for a food and water serving system intended for hospitals and similar environments.",
      "Implemented Raspberry Pi face recognition in Python and reduced script execution time by about 50%.",
    ],
    skills: ["Python", "Face Recognition", "Raspberry Pi"],
  },
  {
    id: "bbsbec-btech",
    type: "Education",
    title: "Bachelor of Technology in Computer Science",
    organization: "Baba Banda Singh Bahadur Engineering College",
    period: "2018 - 2022",
    highlights: [
      "Completed undergraduate studies in Computer Science with coursework in data structures, algorithms, object-oriented programming, and core engineering fundamentals.",
    ],
    skills: ["Computer Science", "Algorithms", "Data Structures"],
  },
];
