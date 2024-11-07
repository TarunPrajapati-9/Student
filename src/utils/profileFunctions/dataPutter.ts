import axios, { AxiosError } from "axios";
import { RegisterResponse } from "../types";
import Cookies from "js-cookie";

export async function setConfirm(register: boolean): Promise<RegisterResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.put(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/set/registered?isRegistered=${register}`,
      {},
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
    console.error(err);
    return err.response?.data as RegisterResponse;
  }
}
