import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import cn from 'classnames';
import styles from './ProgressCheckbox.module.scss';
import pop from '../../assets/pop.mp3';
import unpop from '../../assets/unpop.mp3';

interface ProgressCheckboxProps {
    onChange: (value: boolean) => void;
    label: string;
    initialChecked?: boolean;
}

const ProgressCheckbox: React.FC<ProgressCheckboxProps> = ({
  initialChecked,
  label,
  onChange,
}) => {
  const [checked, setChecked] = useState(!!initialChecked);
  const [playPop] = useSound(pop, { volume: 0.5, playbackRate: 1.5 });
  const [playUnpop] = useSound(unpop, { volume: 0.5, playbackRate: 1.5 });

  useEffect(() => {
    onChange(checked);
  }, [checked, onChange, playPop]);

  const toggleChecked = (): void => {
    if (checked) {
      playUnpop();
      setChecked(false);
    } else {
      playPop();
      setChecked(true);
    }
  };

  const handleKeyDown = (): void => {
    toggleChecked();
  };

  const handleClick = (): void => {
    toggleChecked();
  };

  return (
    <div className={styles.checkboxWrapper}>
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        className={styles.checkbox}
      >
        <div
          className={cn(
            styles.checkboxInside,
            {
              [styles.checkboxInsideChecked]: checked,
            },
          )}
        />
      </div>
      <span>{label}</span>
    </div>
  );
};
export default ProgressCheckbox;
