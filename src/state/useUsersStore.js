import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  usuario: null,
  usuarios: [],
  setAllUsuarios: (traerUsuarios) => set({ usuarios: traerUsuarios }),

  iniciarSesion: (datosUsuario) => {
    const isAdmin = datosUsuario?.authorities.some(
      (el) => el.authority === "ROLE_ADMIN"
    );
    sessionStorage.setItem("nombreUsuario", datosUsuario.nombreUsuario);
    sessionStorage.setItem("isAdmin", isAdmin ? "ROLE_ADMIN" : "ROLE_USER");
    set({ usuario: datosUsuario });
  },
  cerrarSesion: () => {
    sessionStorage.clear();
    set({ usuario: null });
  },
});

const useUsersStore = create(devtools(immer(store)));
export default useUsersStore;
