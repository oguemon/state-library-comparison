import { FC, memo } from "react";

type Props = {
  onClick: () => void;
};

const Component: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      チェックボックスを増やす
    </button>
  );
};

export const AddRowButton = memo(Component);
