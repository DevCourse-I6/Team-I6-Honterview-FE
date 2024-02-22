import { StepBarProps } from '../../type';

const StepBar = ({ isPassed }: StepBarProps) => {
  const bgColor = isPassed ? 'bg-primaries-primary' : 'bg-gray-100';

  return (
    <div
      className={`inline-flex ${bgColor} h-[0.8rem] w-[11rem] rounded-3xl`}
    />
  );
};

export default StepBar;
