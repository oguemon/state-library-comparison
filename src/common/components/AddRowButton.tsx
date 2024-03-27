import { FC } from "react";

type Props = {
  onClick: () => void;
};

export const AddRowButton: FC<Props> = ({ onClick }) => {
  return (
    <button type="button" onClick={() => onClick()}>
      チェックボックスを増やす
    </button>
  );
};
