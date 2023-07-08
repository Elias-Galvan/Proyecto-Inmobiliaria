import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  usuario: null,
  iniciarSesion: (datosUsuario) => {
    sessionStorage.setItem("nombreUsuario", datosUsuario.nombreUsuario);
    set({ usuario: datosUsuario });
  },
  cerrarSesion: () => {
    sessionStorage.clear();
    set({ usuario: null });
  },
});

const useUserStore = create(devtools(immer(store)));
export default useUserStore;
