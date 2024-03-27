import { FC } from "react";
import { AddRowButton } from "./components/AddRowButton";
import { useFormContext } from "./contexts/useFormContexts";
import { Row } from "./components/Row";

export const Native: FC = () => {
  const { formState } = useFormContext();

  return (
    <section>
      <h1>useReducer With Context</h1>
      <AddRowButton />
      {formState.form.map(({ id }, index) => {
        return <Row key={id} rowIndex={index} />;
      })}
    </section>
  );
};
