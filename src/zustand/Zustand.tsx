import { FC } from "react";
import { AddRowButton } from "./components/AddRowButton";
import { useAllFormState } from "./hooks/useForm";
import { Row } from "./components/Row";

export const Zustand: FC = () => {
  const form = useAllFormState();

  return (
    <section>
      <h1>Zustand</h1>
      <AddRowButton />
      {form.map(({ id }, index) => {
        return <Row key={id} rowIndex={index} />;
      })}
    </section>
  );
};
