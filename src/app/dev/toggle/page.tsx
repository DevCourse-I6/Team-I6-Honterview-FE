'use client';

import Toggle from '@/components/toggle';
import { TToggleChangeEvent } from '@/components/toggle/types';

const ToggleDev = () => {
  const handleClick = ({ newValue, id }: TToggleChangeEvent) => {
    // eslint-disable-next-line no-console
    console.log(newValue, id);
  };

  return (
    <div className="flex flex-col gap-3">
      <Toggle
        labelText="Test"
        defaultOn
        onChange={handleClick}
      />
      <Toggle onChange={handleClick} />
      <Toggle disabled />
    </div>
  );
};

export default ToggleDev;
