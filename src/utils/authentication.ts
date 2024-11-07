import {
  ForgetPasswordCredentials,
  LoginCredentials,
} from "@/schema/personalDetailsSchema";
import { ForgetPasswordResponse, LoginResponse } from "./types";
import axios, { AxiosError } from "axios";

export async function Login(params: LoginCredentials): Promise<LoginResponse> {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/login`,
      params
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as LoginResponse;
  }
}

export async function sendOtp(
  params: ForgetPasswordCredentials
): Promise<ForgetPasswordResponse> {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/sendOTP`,
      {
        enrollment: params.enrollment,
      }
    );
    console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as ForgetPasswordResponse;
  }
}

export async function verifyOtp(
  params: ForgetPasswordCredentials
): Promise<ForgetPasswordResponse> {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/verifyOTP`,
      {
        enrollment: params.enrollment,
        otp: params.otp ? parseInt(params.otp.toString(), 10) : undefined,
      }
    );
    console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as ForgetPasswordResponse;
  }
}

export async function changePWD(
  params: ForgetPasswordCredentials
): Promise<ForgetPasswordResponse> {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/changePWD`,
      {
        enrollment: params.enrollment,
        password: params.password,
      }
    );
    console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as ForgetPasswordResponse;
  }
}
