import { ConcernSchema } from "@/pages/CompanyDetail";
import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";

export async function setConsent(params: ConcernSchema, consentId: string) {
  try {
    const token = Cookies.get("studentToken");
    const url = `${import.meta.env.VITE_BACKEND_URL}/set/concern/${consentId}`;

    const { data } = await axios.put(url, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // console.log(data);
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data;
  }
}
