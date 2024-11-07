export interface BaseResponse {
  success: boolean;
  message: string;
}

export interface LoginResponse extends BaseResponse {
  data?: {
    token: string;
  };
}

export interface ForgetPasswordResponse extends BaseResponse {
  data: null;
}

export interface RegisterResponse extends BaseResponse {
  data?: {
    is_registered: boolean;
  };
}

export interface BasicDetailsResponse extends BaseResponse {
  data: {
    enrollment: string;
    name: string;
    surname: string;
    father_name: string;
    dob: string; // ISO date format, could be parsed as a Date object
    gender: string;
    degree: string;
    mobile_no: string; // Changed to string
    email: string;
    parent_email: string;
    parent_mob: string; // Changed to string
    caste: string;
    blood_group: string;
    physical_handicapped: boolean;
    height_cm: number;
    weight_kg: number;
    aadhar_no: string;
    aadhar_name: string;
    pan_no: string;
    pay_ref_no: string;
    placement_package: number;
    verification_coordinator: string;
    remark: string;
    company_id: string | null; // Can be string or null
    date: Date | null; // Nullable date field
  };
}

export interface AddressDetailsResponse extends BaseResponse {
  data: {
    enrollment: string;
    perm_address: string;
    perm_city: string;
    perm_pin: number;
    perm_state: string;
    pres_address: string;
    pres_city: string;
    pres_pin: number;
  };
}

export interface SSCDetailsResponse extends BaseResponse {
  data: {
    enrollment: string;
    ssc_name: string;
    ssc_board: string;
    ssc_passing_year: number;
    ssc_per: number;
    ssc_cpi: number;
  };
}

export interface HSCDetailsResponse extends BaseResponse {
  data: {
    enrollment: string;
    physics: number; // Changed to number
    math: number; // Changed to number
    chemistry: number; // Changed to number
    total_mark: number; // Changed to number
    obtain_mark: number; // Changed to number
    gap_10_12: number; // Changed to number (0 indicates no gap)
    hsc_board: string;
    hsc_passing_year: number;
    hsc_per: number; // Changed to number
    hsc_cpi: number; // Changed to number
    jee_percentile: number; // Changed to number
    gujcet_score: number; // Changed to number
    gujcet_physics: number; // Changed to number
    gujcet_math: number; // Changed to number
    gujcet_chem: number; // Changed to number
    gujcet_percentile: number; // Changed to number
    gujcet_total: number; // Changed to number
  };
}

export interface DiplomaResponse extends BaseResponse {
  data: {
    enrollment: string;
    ddcet_score: number;
    diploma_branch: string;
    diploma_uni: string;
    diploma_passing_year: number;
    gap_10_diploma: number; // 0 indicates no gap
    diploma_cpi: number;
    diploma_per: number;
    diploma_cgpa: number;
    diploma_dead_back: number; // 0 indicates no dead backlog
  };
}

export interface BEResponse extends BaseResponse {
  data: {
    enrollment: string;
    admission_based_on: string; // Example: "Entrance Exam"
    be_uni: string; // University or Institute for BE
    be_passing_year: number; // Year of passing BE
    be_branch: string; // Branch of BE (e.g., Electrical Engineering)
    be_sem1_spi: number; // SPI for Semester 1
    be_sem2_spi: number; // SPI for Semester 2
    be_sem3_spi: number; // SPI for Semester 3
    be_sem4_spi: number; // SPI for Semester 4
    be_sem5_spi: number; // SPI for Semester 5
    be_sem6_spi: number; // SPI for Semester 6
    be_sem7_spi: number; // SPI for Semester 7
    be_sem8_spi: number; // SPI for Semester 8
    be_cpi: number; // Cumulative Performance Index (CPI)
    be_cgpa: number; // Cumulative Grade Point Average (CGPA)
    be_dead_back: number; // Number of dead backlogs (0 if no dead backlogs)
    be_live_back: number; // Number of live backlogs (1 in this case)
    be_total_back: number; // Total number of backlogs (dead + live)
    gap_12_dip_BE: number; // Gap between 12th/Diploma and BE (0 if no gap)
  };
}

export interface MEResponse extends BaseResponse {
  data: {
    enrollment: string; // Enrollment number of the student
    gate_score: number; // GATE score
    pgcet_score: number; // PGCET score
    me_passing_year: number; // Year of passing ME
    me_branch: string; // Branch for ME (e.g., Computer Engineering)
    me_specialization: string; // Specialization in ME (e.g., Artificial Intelligence)
    me_sem1_spi: number; // SPI for ME Semester 1
    me_sem2_spi: number; // SPI for ME Semester 2
    me_sem3_spi: number; // SPI for ME Semester 3
    me_sem4_spi: number; // SPI for ME Semester 4
    me_cpi: number; // Cumulative Performance Index (CPI) for ME
    me_dead_back: number; // Number of dead backlogs during ME (0 means none)
    me_live_back: number; // Number of live backlogs during ME (1 in this case)
    me_total_back: number; // Total number of backlogs (dead + live)
    gap_be_me: number; // Gap between BE and ME (1 in this case)
  };
}

export interface MCAResponse extends BaseResponse {
  data: {
    enrollment: string; // Enrollment number of the student
    ug_passing_year: number; // Year of passing Undergraduate (UG) degree
    ug_uni: string; // University name for UG
    ug_sem1_per: number; // UG Semester 1 Percentage
    ug_sem2_per: number; // UG Semester 2 Percentage
    ug_sem3_per: number; // UG Semester 3 Percentage
    ug_sem4_per: number; // UG Semester 4 Percentage
    ug_sem5_per: number; // UG Semester 5 Percentage
    ug_sem6_per: number; // UG Semester 6 Percentage
    ug_sem7_per: number; // UG Semester 7 Percentage
    ug_sem8_per: number; // UG Semester 8 Percentage
    ug_per: number; // Final percentage for UG degree
    ug_dead_back: number; // Number of dead backlogs during UG (0 means none)
    ug_branch: string; // UG branch (e.g., Computer Science)
    gap_ug_pg: number; // Gap between UG and PG
    gap_12_ug: number; // Gap between 12th and UG
    pg_passing_year: number; // Year of passing Postgraduate (PG) degree
    pg_sem1_spi: number; // PG Semester 1 SPI
    pg_sem2_spi: number; // PG Semester 2 SPI
    pg_sem3_spi: number; // PG Semester 3 SPI
    pg_sem4_spi: number; // PG Semester 4 SPI
    pg_cpi: number; // Cumulative Performance Index (CPI) for PG
    pg_live_back: number; // Number of live backlogs during PG (0 means none)
    pg_dead_back: number; // Number of dead backlogs during PG (1 in this case)
    pg_total_back: number; // Total number of backlogs (live + dead) in PG
    pg_specialization: string; // Specialization in PG (e.g., Data Science)
  };
}

export interface CompanyDetails {
  c_id: string;
  c_name: string;
}

export interface RecruitmentDetails {
  r_id: string;
  c_id: string;
  job_profile: string;
  hr_name: string;
  hr_email: string;
  hr_number: string;
  c_details: string;
  criteria: string;
  eligible_branch: string;
  degree: string;
  deadline: string;
  accept_concern: boolean;
}

export interface CompanyData {
  id: string;
  c_id: string;
  r_id: string;
  enrollment: string;
  job_role: string;
  resume_url: string | null;
  is_concern: boolean;
  company: CompanyDetails;
  recruitment: RecruitmentDetails;
}

export interface CompaniesResponse extends BaseResponse {
  data: CompanyData[];
}

export interface SingleCompanyResponse extends BaseResponse {
  data: {
    r_id: string;
    c_id: string;
    job_profile: string;
    hr_name: string;
    hr_email: string;
    hr_number: string;
    c_details: string;
    criteria: string;
    eligible_branch: string;
    degree: string;
    accept_concern: boolean;
    c_name: string;
    jobrole_limit: number;
    deadline: string;
    t_and_c: string;
    company: CompanyDetails;
  };
}

export interface ConcernedConsent {
  id: string;
  c_id: string;
  r_id: string;
  enrollment: string;
  job_role: string;
  resume_url: string | null;
  is_concern: boolean;
  recruitment: RecruitmentDetails;
  company: CompanyDetails;
}

export interface AppliedCompanyResponse extends BaseResponse {
  data: ConcernedConsent[];
}

export interface Schedule {
  s_id: string;
  r_id: string;
  dateTime: string;
  venue: string;
  process: string;
  mode: boolean; // false(offline) || true(online)
}

export interface ScheduleResponse extends BaseResponse {
  data: {
    schedules: Schedule[]; // Array of schedules
    company: CompanyDetails; // Company details
  };
}

export interface NoticeData {
  n_id: string;
  r_id: string;
  notice: string; // This can include HTML, so it's treated as a string
  deadline: string; // ISO date string for the deadline
  createdAt: string; // ISO date string for when the notice was created
}

export interface NoticeResponse extends BaseResponse {
  data: {
    notices: NoticeData[];
    company: CompanyDetails;
  };
}
