import { StepCircleProps } from '../../type';

const StepCircle = ({
  number,
  isPassed,
  title,
  isCurrent,
}: StepCircleProps) => {
  const bgColor = isPassed ? 'bg-primaries-primary' : 'bg-gray-100';
  const textColor = isPassed ? 'text-text-20' : 'text-neutral-600';
  const titleColor = isCurrent ? 'text-primaries-primary' : 'text-text-80';

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={`border-box inline-flex h-[4rem] w-[4rem] items-center justify-center rounded-full text-medium ${bgColor} ${textColor}`}
      >
        {number}
      </div>
      <p className={`${titleColor} absolute bottom-0 text-medium`}>{title}</p>
    </div>
  );
};

export default StepCircle;
