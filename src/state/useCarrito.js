import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  carrito: [],

  addProduct: (producto) => {
    set((state) => ({
      carrito: [...state.productos, producto],
    }));
  },

  removeProduct: (productoId) => {
    set((state) => ({
      carrito: state.productos.filter((producto) => producto.id !== productoId),
    }));
  },
});

const useCarrito = create(devtools(immer(store)));
export default useCarrito;
