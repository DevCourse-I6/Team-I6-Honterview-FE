import RadioButton from './components/button';
import RadioButtonLabel from './components/label';
import { RadioProvider } from './contexts';
import { IRadioProps } from './types';

const Radio = ({ id, children, ...rest }: IRadioProps) => {
  return (
    <RadioProvider id={id}>
      <div className={`flex gap-2 ${rest.className}`}>{children}</div>
    </RadioProvider>
  );
};

Radio.Label = RadioButtonLabel;
Radio.Button = RadioButton;

export default Radio;
