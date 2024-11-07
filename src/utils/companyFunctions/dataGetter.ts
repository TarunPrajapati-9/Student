import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import {
  AppliedCompanyResponse,
  CompaniesResponse,
  NoticeResponse,
  ScheduleResponse,
  SingleCompanyResponse,
} from "../types";

export async function getEligibleCompanies(): Promise<CompaniesResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/eligible-companies`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    // console.log(err.response?.data);
    return err.response?.data as CompaniesResponse;
  }
}

export async function getSingleCompanyDetails(
  r_id: string
): Promise<SingleCompanyResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/recruitment/${r_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    // console.log(err.response?.data);
    return err.response?.data as SingleCompanyResponse;
  }
}

export async function getAppliedConsents(): Promise<AppliedCompanyResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/concerned-consents`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    // console.log(err.response?.data);
    return err.response?.data as AppliedCompanyResponse;
  }
}

export async function getSchedule(
  consentId: string
): Promise<ScheduleResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/schedule/${consentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    // console.log(err.response?.data);
    return err.response?.data as ScheduleResponse;
  }
}

export async function getNotice(consentId: string): Promise<NoticeResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/notice/${consentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    // console.log(err.response?.data);
    return err.response?.data as NoticeResponse;
  }
}
