import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import {
  AddressDetailsResponse,
  BasicDetailsResponse,
  BEResponse,
  DiplomaResponse,
  HSCDetailsResponse,
  MCAResponse,
  MEResponse,
  RegisterResponse,
  SSCDetailsResponse,
} from "../types";

export async function getIsRegistered(): Promise<RegisterResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/registered`,
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
    return err.response?.data as RegisterResponse;
  }
}

export async function getBasicDetails(): Promise<BasicDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/personal`,
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
    return err.response?.data as BasicDetailsResponse;
  }
}

export async function getAddressDetails(): Promise<AddressDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/address`,
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
    return err.response?.data as AddressDetailsResponse;
  }
}

export async function getSSCDetails(): Promise<SSCDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/ssc`,
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
    return err.response?.data as SSCDetailsResponse;
  }
}

export async function getHSCDetails(): Promise<HSCDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/hsc`,
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
    return err.response?.data as HSCDetailsResponse;
  }
}

export async function getDiplomaDetails(): Promise<DiplomaResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/diploma`,
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
    return err.response?.data as DiplomaResponse;
  }
}

export async function getBEDetails(): Promise<BEResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/be`,
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
    return err.response?.data as BEResponse;
  }
}

export async function getMEDetails(): Promise<MEResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/me`,
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
    return err.response?.data as MEResponse;
  }
}

export async function getMCADetails(): Promise<MCAResponse> {
  try {
    const token = Cookies.get("studentToken");
    if (!token) {
      throw new Error("No token found");
    }

    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/get/mca`,
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
    return err.response?.data as MCAResponse;
  }
}
