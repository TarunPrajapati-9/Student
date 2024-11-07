import {
  BEFormSchema,
  DiplomaSchema,
  HSCSchema,
  MCAFormSchema,
  MESchema,
  SSCFormSchema,
} from "@/schema/academicDetailsSchema";
import {
  AddressDetailsFormSchema,
  BasicDetailsFormSchema,
} from "@/schema/personalDetailsSchema";
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
  SSCDetailsResponse,
} from "../types";

export async function addBasicDetails(
  params: BasicDetailsFormSchema
): Promise<BasicDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/personal`,
      {
        ...params,
        height_cm: parseInt(params.height_cm.toString(), 10),
        weight_kg: parseInt(params.weight_kg.toString(), 10),
      },
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

export async function addAddressDetails(
  params: AddressDetailsFormSchema
): Promise<AddressDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/address`,
      {
        ...params,
        perm_pin: parseInt(params.perm_pin.toString(), 10),
        pres_pin: parseInt(params.pres_pin.toString(), 10),
      },
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

export async function addSSCDetails(
  params: SSCFormSchema
): Promise<SSCDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/ssc`,
      {
        ...params,
        ssc_passing_year: parseInt(params.ssc_passing_year.toString(), 10),
        ssc_per: parseFloat(params.ssc_per.toString()),
        ssc_cpi: parseFloat(params.ssc_cpi.toString()),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as SSCDetailsResponse;
  }
}

export async function addHSCDetails(
  params: HSCSchema
): Promise<HSCDetailsResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/hsc`,
      {
        ...params,
        hsc_passing_year: parseInt(params.hsc_passing_year.toString(), 10),
        hsc_per: parseFloat(params.hsc_per.toString()),
        hsc_cpi: parseFloat(params.hsc_cpi.toString()),
        physics: parseInt(params.physics.toString(), 10),
        math: parseInt(params.math.toString(), 10),
        chemistry: parseInt(params.chemistry.toString(), 10),
        total_mark: parseInt(params.total_mark.toString(), 10),
        obtain_mark: parseInt(params.obtain_mark.toString(), 10),
        jee_percentile: parseFloat(params.jee_percentile.toString()),
        gujcet_score: parseFloat(params.gujcet_score.toString()),
        gujcet_physics: parseFloat(params.gujcet_physics.toString()),
        gujcet_math: parseFloat(params.gujcet_math.toString()),
        gujcet_chem: parseFloat(params.gujcet_chem.toString()),
        gujcet_percentile: parseFloat(params.gujcet_percentile.toString()),
        gujcet_total: parseInt(params.gujcet_total.toString(), 10),
        gap_10_12: parseInt(params.gap_10_12.toString(), 10),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as HSCDetailsResponse;
  }
}

export async function addDiplomaDetails(
  params: DiplomaSchema
): Promise<DiplomaResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/diploma`,
      {
        ...params,
        ddcet_score: parseInt(params.ddcet_score?.toString() || "0", 10),
        diploma_passing_year: parseInt(
          params.diploma_passing_year.toString(),
          10
        ),
        diploma_cpi: parseFloat(params.diploma_cpi.toString()),
        diploma_per: parseFloat(params.diploma_per.toString()),
        diploma_cgpa: parseFloat(params.diploma_cgpa.toString()),
        diploma_dead_back: parseInt(params.diploma_dead_back.toString(), 10),
        gap_10_diploma: parseInt(params.gap_10_diploma.toString(), 10),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as DiplomaResponse;
  }
}

export async function addBEDetails(params: BEFormSchema): Promise<BEResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/be`,
      {
        ...params,
        be_passing_year: parseInt(params.be_passing_year.toString(), 10),
        be_sem1_spi: parseFloat(params.be_sem1_spi.toString()),
        be_sem2_spi: parseFloat(params.be_sem2_spi.toString()),
        be_sem3_spi: parseFloat(params.be_sem3_spi.toString()),
        be_sem4_spi: parseFloat(params.be_sem4_spi.toString()),
        be_sem5_spi: parseFloat(params.be_sem5_spi.toString()),
        be_sem6_spi: parseFloat(params.be_sem6_spi?.toString() || "0"),
        be_sem7_spi: parseFloat(params.be_sem7_spi?.toString() || "0"),
        be_sem8_spi: parseFloat(params.be_sem8_spi?.toString() || "0"),
        be_cpi: parseFloat(params.be_cpi.toString()),
        be_cgpa: parseFloat(params.be_cgpa.toString()),
        be_dead_back: parseInt(params.be_dead_back.toString(), 10),
        be_live_back: parseInt(params.be_live_back.toString(), 10),
        gap_12_dip_BE: parseInt(params.gap_12_dip_BE.toString()),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as BEResponse;
  }
}

export async function addMEDetails(params: MESchema): Promise<MEResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/me`,
      {
        ...params,
        gate_score: parseInt(params.gate_score?.toString() || "0", 10),
        pgcet_score: parseInt(params.pgcet_score?.toString() || "0", 10),
        me_passing_year: parseInt(params.me_passing_year.toString(), 10),
        me_sem1_spi: parseFloat(params.me_sem1_spi.toString()),
        me_sem2_spi: parseFloat(params.me_sem2_spi.toString()),
        me_sem3_spi: parseFloat(params.me_sem3_spi?.toString() || "0"),
        me_sem4_spi: parseFloat(params.me_sem4_spi?.toString() || "0"),
        me_cpi: parseFloat(params.me_cpi.toString()),
        me_dead_back: parseInt(params.me_dead_back.toString(), 10),
        me_live_back: parseInt(params.me_live_back.toString(), 10),
        me_total_back: parseInt(params.me_total_back.toString(), 10),
        gap_be_me: parseInt(params.gap_be_me.toString()),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as MEResponse;
  }
}

export async function addMCADetails(
  params: MCAFormSchema
): Promise<MCAResponse> {
  try {
    const token = Cookies.get("studentToken");
    const { data } = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/register/mca`,
      {
        ...params,
        ug_passing_year: parseInt(params.ug_passing_year.toString(), 10),
        ug_sem1_per: parseFloat(params.ug_sem1_per.toString()),
        ug_sem2_per: parseFloat(params.ug_sem2_per.toString()),
        ug_sem3_per: parseFloat(params.ug_sem3_per.toString()),
        ug_sem4_per: parseFloat(params.ug_sem4_per.toString()),
        ug_sem5_per: parseFloat(params.ug_sem5_per.toString()),
        ug_sem6_per: parseFloat(params.ug_sem6_per.toString()),
        ug_sem7_per: parseFloat(params.ug_sem7_per.toString()),
        ug_sem8_per: parseFloat(params.ug_sem8_per.toString()),
        ug_per: parseFloat(params.ug_per.toString()),
        ug_dead_back: parseInt(params.ug_dead_back.toString(), 10),
        gap_ug_pg: parseInt(params.gap_ug_pg.toString(), 10),
        gap_12_ug: parseInt(params.gap_12_ug.toString(), 10),
        pg_passing_year: parseInt(params.pg_passing_year.toString(), 10),
        pg_sem1_spi: parseFloat(params.pg_sem1_spi.toString()),
        pg_sem2_spi: parseFloat(params.pg_sem2_spi.toString()),
        pg_sem3_spi: parseFloat(params.pg_sem3_spi?.toString() || "0"),
        pg_sem4_spi: parseFloat(params.pg_sem4_spi?.toString() || "0"),
        pg_cpi: parseFloat(params.pg_cpi?.toString()),
        pg_live_back: parseInt(params.pg_live_back.toString(), 10),
        pg_dead_back: parseInt(params.pg_dead_back.toString(), 10),
        pg_total_back: parseInt(params.pg_total_back.toString(), 10),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  } catch (error: AxiosError | unknown) {
    const err = error as AxiosError;
    return err.response?.data as MCAResponse;
  }
}
