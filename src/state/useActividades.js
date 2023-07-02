import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  actividades: [],
  actividad: {},
  setActividad: (nuevaActividad) => set({ actividad: nuevaActividad }),
  setActividades: (nuevasActividades) =>
    set({ actividades: nuevasActividades }),
});

const useActividades = create(devtools(immer(store)));
export default useActividades;
