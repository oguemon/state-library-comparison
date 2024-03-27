import { FC } from "react";
import { useFormContext } from "../contexts/useFormContexts";

type Props = {
  // empty
};

export const AddRowButton: FC<Props> = () => {
  const { addFormRow } = useFormContext();

  return (
    <button type="button" onClick={() => addFormRow()}>
      チェックボックスを増やす
    </button>
  );
};
