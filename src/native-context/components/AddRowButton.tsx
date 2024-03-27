import { FC, memo } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  // empty
};

const Component: FC<Props> = () => {
  const { addFormRow } = useFormContext();

  return (
    <button type="button" onClick={() => addFormRow()}>
      チェックボックスを増やす
    </button>
  );
};

export const AddRowButton = memo(Component);
