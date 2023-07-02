import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  usuario: null,
  iniciarSesion: (datosUsuario) => set({ usuario: datosUsuario }),
  cerrarSesion: () => set({ usuario: null }),
});

const useUserStore = create(devtools(immer(store)));
export default useUserStore;
