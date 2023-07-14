import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  usuario: null,
  usuarios: [],
  setAllUsuarios: (traerUsuarios) => set({ usuarios: traerUsuarios }),

  iniciarSesion: (datosUsuario) => {
    sessionStorage.setItem("nombreUsuario", datosUsuario.nombreUsuario);
    set({ usuario: datosUsuario });
  },
  cerrarSesion: () => {
    sessionStorage.clear();
    set({ usuario: null });
  },
});

const useUsersStore = create(devtools(immer(store)));
export default useUsersStore;
