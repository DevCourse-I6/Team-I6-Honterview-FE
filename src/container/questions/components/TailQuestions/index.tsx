import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

import { getRandomQuestionsByCategories } from '../../services';
import { IProps } from './types';

const TailQuestions = async ({ questionId }: IProps) => {
  const { data } = await getRandomQuestionsByCategories(questionId);

  return (
    <div>
      <h3 className="mb-10 mt-5 text-[2.4rem] font-bold text-[#3C4654]">
        같은 분야의 다른 질문
      </h3>
      <ul className="flex flex-col gap-3 text-[1.8rem] font-light text-[#4e5968]">
        {data.map(({ content, id }) => (
          <li
            key={uuidv4()}
            className="w-fit cursor-pointer hover:font-medium"
          >
            <span className="mr-4 font-bold text-gray-950 opacity-30">Q</span>
            <Link href={`/questions/${id}`}>{content}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TailQuestions;
