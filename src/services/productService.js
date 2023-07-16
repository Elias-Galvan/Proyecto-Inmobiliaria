import { defaultUrl } from "../constants/types";
import api from "../helpers/axiosInstance";

export const getProductService = async () => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/productos`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};

export const getProductByIdService = async (id) => {
  try {
    const resp = await api.get(`${defaultUrl}/api/v1/producto/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};

export const deleteProduct = async (id) => {
  try {
    const resp = await api.delete(`${defaultUrl}/api/v1/borrar/${id}`);
    return resp.data;
  } catch (error) {
    console.log("Rompio el servicio");
  }
};
