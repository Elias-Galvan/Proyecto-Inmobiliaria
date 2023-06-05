import api from "../helpers/axiosInstance";
import { defaultUrl } from "../store/action/types";

export const loginService = async (data) => {
  try {
    const resp = await api.post(`${defaultUrl}auth/login`, data);
    const user = await resp.data;

    return user;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
