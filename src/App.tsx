import { FC } from "react";
import { Native } from "./native/Native";
import { NativeWithContext } from "./native-context/NativeWithContext";

export const App: FC = () => {
  return (
    <div>
      <Native />
      <NativeWithContext />
    </div>
  );
};
