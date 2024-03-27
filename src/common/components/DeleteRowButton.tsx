import { FC } from "react";

type Props = {
  onClick: () => void;
};

export const DeleteRowButton: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      この行を削除
    </button>
  );
};
