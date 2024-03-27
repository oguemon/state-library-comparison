import { FC } from "react";
import { useForm } from "./hooks/useForm";
import { DeleteRowButton } from "../common/components/DeleteRowButton";
import { AddRowButton } from "../common/components/AddRowButton";
import { RowInput } from "../common/components/RowInput";

export const Native: FC = () => {
  const { formState, addFormRow, deleteFormRow, setFormRow } = useForm();

  return (
    <section>
      <h1>useReducer</h1>
      {formState.form.map((form, index) => {
        return (
          <p key={form.id}>
            <RowInput
              label={form.label}
              checked={form.checked}
              onChange={(newValue) => setFormRow(index, newValue)}
            />
            <DeleteRowButton onClick={() => deleteFormRow(index)} />
          </p>
        );
      })}
      <AddRowButton onClick={() => addFormRow()} />
    </section>
  );
};
