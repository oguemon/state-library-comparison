import { FC } from "react";

type Props = {
  label: string;
  checked: boolean;
  onChange: (newValue: boolean) => void;
};

export const RowInput: FC<Props> = ({ label, checked, onChange }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label}
    </label>
  );
};
