import { FC, memo } from "react";

type Props = {
  label: string;
  checked: boolean;
  onChange: (newValue: boolean) => void;
};

const Component: FC<Props> = ({ label, checked, onChange }) => {
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

export const RowInput = memo(Component);
