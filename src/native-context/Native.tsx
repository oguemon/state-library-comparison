import { FC } from "react";
import { DeleteRowButton } from "./components/DeleteRowButton";
import { AddRowButton } from "./components/AddRowButton";
import { RowInput } from "./components/RowInput";
import { useFormContext } from "./contexts/useFormContexts";

export const Native: FC = () => {
  const { formState } = useFormContext();

  return (
    <section>
      <h1>useReducer With Context</h1>
      <AddRowButton />
      {formState.form.map(({ id }, index) => {
        return (
          <p key={id}>
            <RowInput rowIndex={index} />
            <DeleteRowButton rowIndex={index} />
          </p>
        );
      })}
    </section>
  );
};
