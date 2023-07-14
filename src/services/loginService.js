import { defaultUrl } from "../constants/types";
import api from "../helpers/axiosInstance";

export const loginService = async (data) => {
  try {
    const resp = await api.post(`${defaultUrl}/auth/login`, data);
    const user = await resp.data;

    return user;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
