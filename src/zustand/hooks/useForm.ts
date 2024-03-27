import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { FormState } from "../../type";
import { getRandomId } from "../../common/functions/getRandomId";

type State = {
  formState: FormState;
  addFormRow: () => void;
  deleteFormRow: (rowIndex: number) => void;
  setFormRow: (rowIndex: number, checked: boolean) => void;
};

const useForm = create(
  immer<State>((set) => ({
    formState: { form: [] },
    addFormRow: () =>
      set((state) => {
        state.formState.form.push({
          id: getRandomId(),
          label: "おにゅーの項目",
          checked: false,
        });
      }),
    deleteFormRow: (rowIndex: number) =>
      set((state) => {
        state.formState.form.splice(rowIndex, 1);
      }),
    setFormRow: (rowIndex: number, checked: boolean) =>
      set((state) => {
        state.formState.form[rowIndex].checked = checked;
      }),
  }))
);

export const useAllFormState = () => useForm((state) => state.formState.form);

export const useFormState = (rowIndex: number) =>
  useForm((state) => state.formState.form[rowIndex]);

export const useAddFormRow = () => useForm((state) => state.addFormRow);

export const useDeleteFormRow = () => useForm((state) => state.deleteFormRow);

export const useSetFormRow = () => useForm((state) => state.setFormRow);
