import api from "../helpers/axiosInstance";
import { defaultUrl } from "../store/action/types";

export const getProductService = async () => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/productos`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
