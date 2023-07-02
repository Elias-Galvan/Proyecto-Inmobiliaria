import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set) => ({
  horarios: [],
  setHorarios: (nuevosHorarios) => set({ horarios: nuevosHorarios }),
});

const useHorarios = create(devtools(immer(store)));
export default useHorarios;
