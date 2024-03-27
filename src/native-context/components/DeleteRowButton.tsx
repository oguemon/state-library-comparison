import { FC } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  rowIndex: number;
};

export const DeleteRowButton: FC<Props> = ({ rowIndex }) => {
  const { deleteFormRow } = useFormContext();

  return (
    <button type="button" onClick={() => deleteFormRow(rowIndex)}>
      この行を削除
    </button>
  );
};
