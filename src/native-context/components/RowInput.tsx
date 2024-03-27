import { FC, memo } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  rowIndex: number;
};

const Component: FC<Props> = ({ rowIndex }) => {
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

export const RowInput = memo(Component);
