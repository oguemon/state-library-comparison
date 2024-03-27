import { FC } from "react";
import { useForm } from "./hooks/useForm";
import { AddRowButton } from "./components/AddRowButton";
import { Row } from "./components/Row";

export const Native: FC = () => {
  const { formState, addFormRow, deleteFormRow, setFormRow } = useForm();

  return (
    <section>
      <h1>useReducer</h1>
      <AddRowButton onClick={() => addFormRow()} />
      {formState.form.map((form, index) => {
        return (
          <Row
            key={form.id}
            form={form}
            onChangeInput={(newValue) => setFormRow(index, newValue)}
            onClickDeleteRowButton={() => deleteFormRow(index)}
          />
        );
      })}
    </section>
  );
};
