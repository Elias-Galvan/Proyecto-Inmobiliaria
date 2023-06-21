import api from "../helpers/axiosInstance";
import { defaultUrl } from "../store/action/types";

export const productoService = async (data) => {
  try {
    const resp = await api.post(`${defaultUrl}api/v1/nuevo-producto`, data);

    return resp;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
