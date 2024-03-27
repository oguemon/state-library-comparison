import { FC } from "react";
import { FormProvider } from "./contexts/useFormContexts";
import { Native } from "./Native";

export const NativeWithContext: FC = () => {
  return (
    <FormProvider>
      <Native />
    </FormProvider>
  );
};
