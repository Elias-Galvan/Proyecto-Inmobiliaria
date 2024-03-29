import { defaultUrl } from "../constants/types";
import api from "../helpers/axiosInstance";

export const getHorariosService = async () => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/horarios`);

    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
