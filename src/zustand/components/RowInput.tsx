import { FC, memo } from "react";
import { useFormState, useSetFormRow } from "../hooks/useForm";

type Props = {
  rowIndex: number;
};

const Component: FC<Props> = ({ rowIndex }) => {
  const { label, checked } = useFormState(rowIndex);
  const setFormRow = useSetFormRow();

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
