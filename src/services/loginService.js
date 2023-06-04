import api from "../helpers/axiosInstance";
import { defaultUrl } from "../store/action/types";

export const loginService = async (data) => {
  try {
    // const OPCIONES_PETICION = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: data,
    // };
    const resp = await api.post(`${defaultUrl}auth/login`, data);
    const json = await resp.data;

    console.log({ json });
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
