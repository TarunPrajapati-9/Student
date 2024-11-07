import { TeamMember } from "@/pages/MainHomePage/SubComponent/Team";

// Define an array of navigation links
export const homeNavLinks = [
  { path: "/", label: "Home" },
  { path: "/placement_policy", label: "Placement Policies" },
  { path: "/pastrecruiters", label: "Past Recruiters" },
  { path: "/contactus", label: "Contact Us" },
];

export const images: string[] = [
  "/images/home_3.jpg",
  "/images/home_1.jpeg",
  "/images/home_2.jpeg",
  "/images/home_4.jpeg",
  "/images/home_5.jpeg",
];

export const rules: string[] = [
  "The Training and Placement Office adheres to a one student, one job policy. Once a candidate is selected by any company, his/her name will be removed from the placement database as an unplaced candidate. Under no circumstance will he/she be allowed to participate with any other companies. Exceptional cases include companies offering a substantially higher salary (2 times) than the earlier offered package.",
  "If there is a delay in the announcement of placement results of a company, the candidate will have the opportunity to appear for another company's placement drive. The first announced result will be deemed final unless the second company offers a package more than 2 times higher. If results from two companies are declared on the same day, the decision made jointly by the candidate and the Placement Officer will be considered final.",
  "If any data provided by candidates is found to be inaccurate or faulty, they will be disqualified from further placement processes. Therefore, it is the responsibility of each candidate to update their data and promptly report any relevant changes immediately to the TPO cell with proof, whenever GTU results are announced.",
  "All candidates must adhere to a formal dress code on the day of the placement drive and in the TPO premises. For male candidates, this includes wearing a blazer/white shirt-black pants. For female candidates, either a kurta or a blazer suit in black and white is mandatory.",
  "A consent form will be sent to all eligible candidates prior to the placement drive process. Only those who are interested in participating in the specific company's placement drive should submit the consent form, providing the required details before the given deadline. Failure to attend after submitting the consent form will result in being barred from future placement drives.",
  "Candidates are prohibited from directly interacting with the HR team regarding eligibility or branch considerations. Such actions will be considered a breach of placement cell rules and regulations.",
  "Candidates should not argue with the TPO cell regarding the criteria for shortlisting, as these are predetermined by the companies. Any modifications by the companies will be followed by the TPO as per the latest updates.",
  "It is the responsibility of the candidate to acquaint themselves with the company’s profile, job role, location, rules, and bond details. Refusing an offer or not joining after selection will disqualify the candidate from future placements.",
  "Candidates intending to pursue further studies or travel abroad should refrain from registering with the placement cell. If they refuse an offer, the institute will not issue any recommendation letters for at least one year after graduation.",
  "Once onboarded, candidates must follow the company’s rules. If any decision is taken by the company post-joining, the institute will not interfere, and candidates must accept it.",
  "Maintaining decorum in the TPO premises is mandatory throughout the placement process.",
  "In the event of any discrepancy, decisions made by the TPO and Principal will be final.",
  "Candidate registration with the placement cell is optional. However, those wishing to participate in campus recruitment must register with a fee of Rs. 350/-, which supports placement activities and hospitality.",
  "These rules are created for the benefit of all students across all disciplines of the Institute.",
];

// Team members with correct types
export const designers_developers: TeamMember[] = [
  {
    name: "Tarun Prajapati",
    role: "Front-End Developer (Student)",
    imageSrc: "/developers/tarunprajapati.jpeg",
    githubUrl: "https://github.com/TarunPrajapati-9",
    linkedinUrl: "https://www.linkedin.com/in/tarunprajapati9/",
    techStack: ["MERN", "UI/UX", "JAVA"],
  },
  {
    name: "Arshil Hapani",
    role: "Front-End Developer (Central-TPO)",
    imageSrc: "/developers/arshilhapani.jpeg",
    githubUrl: "https://github.com/bobsmith",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    techStack: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Sanket Sadadiya",
    role: "Backend Developer (Student)",
    imageSrc: "/developers/sanketsadadiya.jpeg",
    githubUrl: "https://github.com/carolwilliams",
    linkedinUrl: "https://linkedin.com/in/carolwilliams",
    techStack: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    name: "Milan Bhingradiya",
    role: "Backend Developer (Central-TPO)",
    imageSrc: "/developers/milanbhingradiya.jpeg",
    githubUrl: "https://github.com/carolwilliams",
    linkedinUrl: "https://linkedin.com/in/carolwilliams",
    techStack: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    name: "Parth Pipaliya",
    role: "Contributor",
    imageSrc: "/logo.png",
    githubUrl: "https://github.com/bobsmith",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    techStack: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Nirali Darji",
    role: "Front-End Developer",
    imageSrc: "/logo.png",
    githubUrl: "https://github.com/bobsmith",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    techStack: ["React", "Node.js", "TypeScript"],
  },
  {
    name: "Gunjan Goyani",
    role: "Front-End Developer",
    imageSrc: "/logo.png",
    githubUrl: "https://github.com/bobsmith",
    linkedinUrl: "https://linkedin.com/in/bobsmith",
    techStack: ["React", "Node.js", "TypeScript"],
  },
];

export const special_thanks: TeamMember[] = [
  {
    name: "Dhrupan ",
    role: "Guidance",
    imageSrc: "/logo.png",
    githubUrl: "https://github.com/davidbrown",
    linkedinUrl: "https://linkedin.com/in/davidbrown",
    techStack: [],
  },
  {
    name: "Manthan Kathiriya",
    role: "Guidance",
    imageSrc: "/logo.png",
    githubUrl: "https://github.com/evagarcia",
    linkedinUrl: "https://linkedin.com/in/evagarcia",
    techStack: [],
  },
];
