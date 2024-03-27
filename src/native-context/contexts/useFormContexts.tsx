import { FC, ReactNode, createContext, useContext } from "react";
import { useForm } from "../../native/hooks/useForm";

type ContextValue = ReturnType<typeof useForm>;

const FormContext = createContext<ContextValue>({
  formState: { form: [] },
  addFormRow: () => {},
  deleteFormRow: () => {},
  setFormRow: () => {},
});

type Props = {
  children: ReactNode;
};

export const FormProvider: FC<Props> = ({ children }) => {
  const form = useForm();
  return <FormContext.Provider value={form}>{children}</FormContext.Provider>;
};

export const useFormContext = () => useContext(FormContext);
