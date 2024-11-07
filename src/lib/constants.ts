// Array of navigation links
export const navLinks = [
  { path: "/companies", label: "Companies" },
  { path: "/applied", label: "Consents" },
];

export const gender = ["MALE", "FEMALE", "OTHER"];
export const caste = ["GENERAL", "EWS", "SEBC", "SC", "ST", "OTHER"];
export const bloodGroup = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

export interface Option {
  value: string;
  label: string;
}

export const genderOptions: Option[] = [
  { value: "MALE", label: "MALE" },
  { value: "FEMALE", label: "FEMALE" },
  { value: "OTHER", label: "OTHER" },
];

export const degreeOptions: Option[] = [
  { value: "BE", label: "BE" },
  { value: "ME", label: "ME" },
  { value: "MCA", label: "MCA" },
];
export const casteOptions: Option[] = [
  { value: "GENERAL", label: "GENERAL" },
  { value: "EWS", label: "EWS" },
  { value: "SEBC", label: "SEBC" },
  { value: "SC", label: "SC" },
  { value: "ST", label: "ST" },
  { value: "OTHER", label: "OTHER" },
];

export const bloodGroupOptions: Option[] = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];

const ugCourseNames = [
  "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
  "AUTOMOBILE ENGINEERING",
  "BIOMEDICAL ENGINEERING",
  "CHEMICAL ENGINEERING",
  "CIVIL ENGINEERING",
  "COMPUTER ENGINEERING",
  "ELECTRICAL ENGINEERING",
  "ELECTRONICS & COMMUNICATION ENGINEERING",
  "ENVIRONMENT ENGINEERING",
  "INFORMATION TECHNOLOGY",
  "INSTRUMENTATION & CONTROL ENGINEERING",
  "MECHANICAL ENGINEERING",
  "PLASTIC TECHNOLOGY",
  "ROBOTICS AND AUTOMATION",
  "RUBBER TECHNOLOGY",
  "TEXTILE TECHNOLOGY",
];

const DiplomaBranches = [
  "CIVIL ENGINEERING",
  "MECHANICAL ENGINEERING",
  "ELECTRICAL ENGINEERING",
  "ELECTRONICS AND COMMUNICATION ENGINEERING",
  "COMPUTER SCIENCE AND ENGINEERING",
  "INFORMATION TECHNOLOGY",
  "AUTOMOBILE ENGINEERING",
  "CHEMICAL ENGINEERING",
  "MINING ENGINEERING",
  "TEXTILE ENGINEERING",
  "AERONAUTICAL ENGINEERING",
  "AGRICULTURAL ENGINEERING",
  "ENVIRONMENTAL ENGINEERING",
  "INSTRUMENTATION AND CONTROL ENGINEERING",
  "MECHATRONICS ENGINEERING",
  "PETROLEUM ENGINEERING",
  "POWER ENGINEERING",
  "PRODUCTION ENGINEERING",
  "PLASTICS ENGINEERING",
  "MARINE ENGINEERING",
  "METALLURGICAL ENGINEERING",
  "TOOL AND DIE MAKING",
  "PRINTING TECHNOLOGY",
  "FOOD TECHNOLOGY",
  "ARCHITECTURAL ASSISTANTSHIP",
  "LEATHER TECHNOLOGY",
  "RUBBER TECHNOLOGY",
];
const MCA = ["CE", "IT", "AI/ML"];
export const UGBranchOptions: Option[] = ugCourseNames.map((course) => ({
  value: course,
  label: course,
}));

export const DiplomaBranchOption: Option[] = DiplomaBranches.map((course) => ({
  value: course,
  label: course,
}));

export const MCASpecialization: Option[] = MCA.map((course) => ({
  value: course,
  label: course,
}));

export const branchOptions: Option[] = [
  { value: "RUBBER", label: "RUBBER" },
  { value: "CHEMICAL", label: "CHEMICAL" },
  { value: "CIVIL", label: "CIVIL" },
  { value: "COMPUTER", label: "COMPUTER" },
  { value: "EC", label: "EC" },
  { value: "ELECTRICAL", label: "ELECTRICAL" },
  { value: "ENVIRONMENT", label: "ENVIRONMENT" },
  { value: "IC", label: "IC" },
  { value: "IT", label: "IT" },
  { value: "MECHANICAL", label: "MECHANICAL" },
];

export const specializationOptions: { [key: string]: Option[] } = {
  RUBBER: [{ value: "RUBBER", label: "RUBBER" }],
  CHEMICAL: [
    {
      value: "COMPUTER_AIDED_PROCESS_DESIGN",
      label: "COMPUTER AIDED PROCESS DESIGN",
    },
  ],
  CIVIL: [
    { value: "STRUCTURAL_ENGINEERING", label: "STRUCTURAL ENGINEERING" },
    {
      value: "TRANSPORTATION_ENGINEERING",
      label: "TRANSPORTATION ENGINEERING",
    },
    {
      value: "WATER_RESOURCES_MANAGEMENT",
      label: "WATER RESOURCES ENGINEERING & MANAGEMENT",
    },
    { value: "GEOTECHNICAL_ENGINEERING", label: "GEOTECHNICAL ENGINEERING" },
  ],
  COMPUTER: [{ value: "SOFTWARE_ENGINEERING", label: "SOFTWARE ENGINEERING" }],
  EC: [
    { value: "VLSI_DESIGN", label: "VLSI DESIGN" },
    { value: "COMMUNICATION_SYSTEM", label: "COMMUNICATION SYSTEM" },
  ],
  ELECTRICAL: [
    { value: "POWER_SYSTEM", label: "POWER SYSTEM" },
    {
      value: "ELECTRICAL_VEHICLE_TECHNOLOGY",
      label: "ELECTRICAL VEHICLE TECHNOLOGY",
    },
  ],
  ENVIRONMENT: [{ value: "ENVIRONMENT", label: "ENVIRONMENT" }],
  IC: [{ value: "APPLIED_INSTRUMENTATION", label: "APPLIED INSTRUMENTATION" }],
  IT: [{ value: "INFORMATION_TECHNOLOGY", label: "INFORMATION TECHNOLOGY" }],
  MECHANICAL: [
    {
      value: "CAD_MANUFACTURING",
      label: "COMPUTER AIDED DESIGN & MANUFACTURING",
    },
    { value: "CRYOGENIC_ENGINEERING", label: "CRYOGENIC ENGINEERING" },
    {
      value: "INTERNAL_COMBUSTION",
      label: "INTERNAL COMBUSTION ENGINES & AUTOMOBILE",
    },
  ],
};

export const admissionBasedOn: Option[] = [
  { value: "JEE", label: "JEE" },
  { value: "GUJCET", label: "GUJCET" },
  { value: "DIPLOMA", label: "DIPLOMA" },
];
