import React, { useEffect, useState } from 'react';

interface ProgressCheckboxProps {
    onChange: (value: boolean) => void;
    label: string;
    initialChecked: boolean;
}

const ProgressCheckbox: React.FC<ProgressCheckboxProps> = ({
  initialChecked, label, onChange,
}: ProgressCheckboxProps) => {
  const [checked, setChecked] = useState(!!initialChecked);

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange]);

  const handleKeyDown = (): void => {
    setChecked((prev) => !prev);
  };

  const handleClick = (): void => {
    setChecked((prev) => !prev);
  };

  return (
    <div
      role="checkbox"
      aria-checked={checked}
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {label}
      {' '}
      -
      {checked && 'siema'}
    </div>
  );
};
export default ProgressCheckbox;
