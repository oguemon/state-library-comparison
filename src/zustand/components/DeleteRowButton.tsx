import { FC, memo } from "react";
import { useDeleteFormRow } from "../hooks/useForm";

type Props = {
  rowIndex: number;
};

const Component: FC<Props> = ({ rowIndex }) => {
  const deleteFormRow = useDeleteFormRow();

  return (
    <button type="button" onClick={() => deleteFormRow(rowIndex)}>
      この行を削除
    </button>
  );
};

export const DeleteRowButton = memo(Component);
