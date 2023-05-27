import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

const store = (set, get) => ({
  token: "",
  setToken: (token) => {
    localStorage.setItem("token", token);
    set(
      (state) => {
        state.token = token;
      },
      null,
      { type: "setToken", token }
    );
  },
});

const useStore = create(devtools(immer(store)));
export default useStore;
