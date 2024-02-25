import Link from 'next/link';

import Button, { ButtonType } from '@/components/button';
import Select from '@/components/select';

import { IProps } from './types';

const ListQuestions = ({
  data,
  listSort,
  setListSort,
  handleTagClick,
}: IProps) => {
  return (
    <div>
      <div className="flex justify-end">
        <Select
          options={['최신순', '좋아요순']}
          value={listSort}
          className="py-1 "
          onChange={(e) => setListSort(e.target.value)}
        />
      </div>

      <div className="my-[6rem]">
        {data.map(({ content, name }) => (
          <div key={name}>
            <div className="my-[3rem]  flex justify-between">
              <Link
                href="/"
                className="text-doubleLarge font-semibold"
              >
                <span className="text-text-40">Q.</span> {content}
              </Link>
              <Button className="h-[4rem] flex-none px-6 py-6">
                모의 면접 시작
              </Button>
            </div>
            <Button
              className="rounded-full border-none bg-[#e5e7eb] px-4  py-3 font-semibold text-black"
              styleType={ButtonType.Type2}
              onClick={() => handleTagClick(name)}
            >
              {name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListQuestions;
