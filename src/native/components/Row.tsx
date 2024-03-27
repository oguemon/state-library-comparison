import { FC, memo } from "react";
import { RowInput } from "./RowInput";
import { DeleteRowButton } from "./DeleteRowButton";
import { FormState } from "../../type";

type Props = {
  form: FormState["form"][number];
  onChangeInput: (newValue: boolean) => void;
  onClickDeleteRowButton: () => void;
};

const Component: FC<Props> = ({
  form,
  onChangeInput,
  onClickDeleteRowButton,
}) => {
  return (
    <p>
      <RowInput
        label={form.label}
        checked={form.checked}
        onChange={onChangeInput}
      />
      <DeleteRowButton onClick={onClickDeleteRowButton} />
    </p>
  );
};

export const Row = memo(Component);
