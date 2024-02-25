import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button, { ButtonType } from '@/components/button';
import { ArrowDown, ArrowUp, Reset, Search, XIcon } from '@/components/icon';
import Input from '@/components/input';

import { IProps } from './types';

const ListFilter = ({
  setSelectedTags,
  handleTagClick,
  selectedTags,
}: IProps) => {
  const [toggle, setToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleResetClick = () => {
    setSelectedTags([]);
  };

  return (
    <div className="">
      <div
        className="relative flex gap-4 "
        style={toggle ? { overflow: 'hidden' } : { flexWrap: 'wrap' }}
      >
        <Input className="h-[4rem] w-[20rem] flex-none rounded-[1rem] px-[12px] py-[5px]">
          <Input.Text
            onChange={handleSearchInputChange}
            value={searchQuery}
            placeholder="기술 검색"
            className="text-[1.6rem]"
          />
          <Search className="cursor-pointer text-[#e5e7eb]" />
        </Input>
        <div className="contents gap-4">
          {[
            'JavaScript',
            'Java',
            'React',
            'TypeScript',
            'HTML/CSS',
            'SQL',
            'MSSQL',
            'Vue.js',
            'Next.js',
            'Spring',
            'REST API',
            'vanilla-javascript',
            'Node.js',
            'ES6',
            'ES5',
            'Python',
            'Express',
            'Mongo DB',
            'Firebase',
            'Django',
            'jQuery',
          ]
            .filter((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase()),
            )
            .map((tag) => (
              <Button
                className="h-[4rem] flex-none rounded-[1rem] border-text-40 px-2 py-2 text-black"
                styleType={ButtonType.Type2}
                key={uuidv4()}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </Button>
            ))}
        </div>
        <div className="absolute right-0 bg-gradient-to-r from-transparent via-white/50 to-white pl-5 ">
          <Button
            className="h-[4rem] flex-none rounded-[1rem] px-2 py-2 text-black"
            styleType={ButtonType.Type2}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <ArrowDown /> : <ArrowUp />}
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 py-4">
        {selectedTags.map((tag: string) => (
          <Button
            key={uuidv4()}
            styleType={ButtonType.Type2}
            className="flex h-[4rem] gap-2 rounded-[1rem] px-2 py-2 text-primaries-primary"
          >
            {tag}
            <XIcon
              className=""
              onClick={() => handleTagClick(tag)}
            />
          </Button>
        ))}
        {selectedTags.length > 0 && (
          <div className="flex items-center">
            <Reset
              onClick={handleResetClick}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListFilter;
