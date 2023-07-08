import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  productos: [],
  producto: {},
  setProducto: (nuevoProducto) => set({ producto: nuevoProducto }),
  setProductos: (nuevosProductos) => set({ productos: nuevosProductos }),
});

const useProductos = create(devtools(immer(store)));
export default useProductos;
