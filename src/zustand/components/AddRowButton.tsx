import { FC, memo } from "react";
import { useAddFormRow } from "../hooks/useForm";

type Props = {
  // empty
};

const Component: FC<Props> = () => {
  const addFormRow = useAddFormRow();

  return (
    <button type="button" onClick={() => addFormRow()}>
      チェックボックスを増やす
    </button>
  );
};

export const AddRowButton = memo(Component);
