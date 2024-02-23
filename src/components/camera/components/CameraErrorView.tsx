import { CameraErrorViewProps } from '../type';

const CameraErrorView = ({ error }: CameraErrorViewProps) => {
  return (
    <div className="flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        에러가 발생했습니다. 다시 시도해주세요.
      </div>
      <div className="flex items-center justify-center">ERROR: {error}</div>
    </div>
  );
};

export default CameraErrorView;
