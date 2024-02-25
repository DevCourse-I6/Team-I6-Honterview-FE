'use client';

import { v4 as uuidv4 } from 'uuid';

import Button, { ButtonType } from '@/components/button';
import { Search } from '@/components/icon';
import Input from '@/components/input';

const QuestionsListPage = () => {
  return (
    <>
      <section className="flex flex-col items-center gap-10 py-10">
        <h1 className="text-tripleLarge font-bold">질문검색</h1>
        <Input className="w-[50rem] gap-5 rounded-full pl-12 pr-5 ">
          <Input.Text placeholder="질문 내용을 검색하세요." />
          <div className="flex h-[40px] w-[40px] flex-none cursor-pointer items-center justify-center rounded-full bg-primaries-primary">
            <Search className="text-white " />
          </div>
        </Input>
      </section>

      <section className="flex">
        <Input className="h-[3rem] w-[10rem] rounded-[1rem]">
          <Input.Text
            placeholder="기술 검색"
            className="text-[1.2rem]"
          />
          <Search className="text-black" />
        </Input>
        {['JavaScript', 'React', 'JavaScript', 'React'].map((tag) => (
          <Button
            className="rounded-[1rem]"
            styleType={ButtonType.Type2}
            key={uuidv4()}
          >
            {tag}
          </Button>
        ))}
      </section>
    </>
  );
};

export default QuestionsListPage;
