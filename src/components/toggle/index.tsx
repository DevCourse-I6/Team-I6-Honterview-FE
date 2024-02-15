'use client';

import React, { useState } from 'react';

import { IToggle } from './types';

/**
 * @brief 토글 컴포넌트
 * @param labelText 토글 오른쪽 보여지는 이름
 * @param onChange toggle의 상태값을 넘겨주는 콜백 함수
 * @param defaultOn 초기 토글 상태
 * @param disabled 토글 disabled 상태
 */
const Toggle = ({
  labelText,
  onChange,
  defaultOn = false,
  disabled = false,
  className,
}: IToggle) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleClick = () => {
    const newValue = !isOn;
    setIsOn(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const switchBaseClass =
    "h-6 w-11 rounded-full border border-text-40 bg-text-20 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:bg-text-40 after:rounded-full after:transition-all after:content-['']";
  const switchActiveClass =
    'peer-checked:border-primaries-hover peer-checked:bg-primaries-primary peer-checked:after:translate-x-full peer-checked:after:bg-text-20';
  const switchFocusClass = 'peer-focus:outline-none';
  const switchDisabledClass =
    'peer-disabled:bg-text-40 peer-disabled:after:bg-text-60';
  // const switchRTLClass = 'rtl:peer-checked:after:-translate-x-full';

  const combinedSwitchClass = `${switchBaseClass} ${switchActiveClass} ${switchFocusClass} ${switchDisabledClass} ${className}`;

  return (
    <label
      htmlFor="toggle"
      className="relative inline-flex cursor-pointer items-center"
    >
      <input
        id="toggle"
        onChange={handleClick}
        type="checkbox"
        disabled={disabled}
        className="peer sr-only"
      />
      <div className={combinedSwitchClass} />
      <span className="ms-3 text-base font-light text-text-80">
        {labelText}
      </span>
    </label>
  );
};

export default Toggle;
