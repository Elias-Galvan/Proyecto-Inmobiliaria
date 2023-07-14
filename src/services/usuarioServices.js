import api from "../helpers/axiosInstance";
import { defaultUrl } from "../constants/types";

export const getUsuarios = async () => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/usuarios`);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};

export const altaUsuarioService = async (id) => {
  try {
    const resp = await api.post(`${defaultUrl}/api/v1/alta/${id}`, { id });
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};

export const bajaUsuarioService = async (id) => {
  try {
    const resp = await api.post(`${defaultUrl}/api/v1/baja/${id}`, { id });

    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
