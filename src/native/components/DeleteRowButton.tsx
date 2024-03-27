import { FC, memo } from "react";

type Props = {
  onClick: () => void;
};

const Component: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      この行を削除
    </button>
  );
};

export const DeleteRowButton = memo(Component);
