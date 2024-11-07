export type LoginCredentials = {
  enrollment: string;
  password: string;
};

export type ForgetPasswordCredentials = {
  enrollment: string;
  otp?: string; // optional since not used in step 1
  password?: string;
  confirmPassword?: string;
};

export type BasicDetailsFormSchema = {
  name: string;
  surname: string;
  father_name: string;
  dob: string;
  gender: string;
  degree: string;
  mobile_no: number;
  email: string;
  parent_email: string;
  parent_mob: number;
  caste: string;
  blood_group: string;
  physical_handicapped: boolean;
  height_cm: number;
  weight_kg: number;
  aadhar_no: string;
  aadhar_name: string;
  pan_no: string;
  pay_ref_no: string;
};

export type AddressDetailsFormSchema = {
  perm_address: string;
  perm_city: string;
  perm_pin: number;
  perm_state: string;
  pres_address: string;
  pres_city: string;
  pres_pin: number;
};
