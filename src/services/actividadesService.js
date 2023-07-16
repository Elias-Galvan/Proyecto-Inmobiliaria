import { defaultUrl } from "../constants/types";
import api from "../helpers/axiosInstance";

export const getActividadesService = async () => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/actividades`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};

export const getActividadById = async (id) => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/actividad/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};

export const deleteActividad = async (id) => {
  try {
    const resp = await api.delete(`${defaultUrl}/api/v1/actividad/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
