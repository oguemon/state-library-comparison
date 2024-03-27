import { FC } from "react";
import { Native } from "./native/Native";
import { NativeWithContext } from "./native-context/NativeWithContext";
import { Zustand } from "./zustand/Zustand";

export const App: FC = () => {
  return (
    <div>
      <Native />
      <NativeWithContext />
      <Zustand />
    </div>
  );
};
