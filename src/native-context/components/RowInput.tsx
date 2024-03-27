import { FC } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  rowIndex: number;
};

export const RowInput: FC<Props> = ({ rowIndex }) => {
  const { formState, setFormRow } = useFormContext();
  const { label, checked } = formState.form[rowIndex];

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setFormRow(rowIndex, !checked)}
      />
      {label}
    </label>
  );
};
