import { FC, memo } from "react";
import { RowInput } from "./RowInput";
import { DeleteRowButton } from "./DeleteRowButton";

type Props = {
  rowIndex: number;
};

const Component: FC<Props> = ({ rowIndex }) => {
  return (
    <p>
      <RowInput rowIndex={rowIndex} />
      <DeleteRowButton rowIndex={rowIndex} />
    </p>
  );
};

export const Row = memo(Component);
