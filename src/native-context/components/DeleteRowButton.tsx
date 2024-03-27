import { FC, memo } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  rowIndex: number;
};

const Component: FC<Props> = ({ rowIndex }) => {
  const { deleteFormRow } = useFormContext();

  return (
    <button type="button" onClick={() => deleteFormRow(rowIndex)}>
      この行を削除
    </button>
  );
};

export const DeleteRowButton = memo(Component);
