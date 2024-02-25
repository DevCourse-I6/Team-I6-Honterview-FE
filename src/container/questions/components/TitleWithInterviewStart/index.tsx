import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/button';
import Tag from '@/components/tag';

const TitleWithInterviewStart = () => {
  return (
    <div>
      <div className="relative flex flex-col gap-7">
        <h1 className="text-[3.2rem] font-medium leading-tight text-[#3C4654]">
          어떤 프레임워크를 사용하여 개발했나요? 왜 그 프레임워크를 선택했나요?
        </h1>
        <ul className="flex w-1/2 flex-wrap gap-4">
          {['JavaScript', 'React', 'JavaScript', 'React'].map((tag) => (
            <li key={uuidv4()}>
              <Tag
                style={{
                  backgroundColor: 'rgb(227, 228, 231)',
                  color: 'black',
                  borderRadius: '1.5rem',
                  fontWeight: '600',
                }}
              >
                {tag}
              </Tag>
            </li>
          ))}
        </ul>
        <Button
          className="bottom-0 right-0 text-xl"
          style={{ position: 'absolute', fontSize: '1.5rem' }}
        >
          모의 면접 시작
        </Button>
      </div>
    </div>
  );
};

export default TitleWithInterviewStart;
