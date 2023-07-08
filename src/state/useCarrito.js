import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set, get) => ({
  carrito: [],

  addProduct: (producto) => {
    set((state) => {
      const { carrito } = state;
      const existingProduct = carrito.find((p) => p.id === producto.id);

      if (existingProduct) {
        existingProduct.cantidad += 1;
      } else {
        state.carrito.push({ ...producto, cantidad: 1 });
      }
    });
  },

  removeProduct: (productoId, eliminarUnidad = false) => {
    set((state) => {
      const { carrito } = state;
      const existingProduct = carrito.find((p) => p.id === productoId);

      if (existingProduct) {
        if (eliminarUnidad && existingProduct.cantidad > 1) {
          existingProduct.cantidad -= 1;
        } else {
          state.carrito = carrito.filter((p) => p.id !== productoId);
        }
      }
    });
  },
});

const useCarrito = create(devtools(immer(store)));
export default useCarrito;
