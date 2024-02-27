import { useState } from 'react';

import FilterInput from './components/filterInput';
import SelectedTags from './components/selectedTags';
import Toggle from './components/toggle';
import UnSelectedTags from './components/unSelectedTags';
import { IProps } from './types';

const data = [
  { name: 'JavaScript', id: '1' },
  { name: 'Java', id: '2' },
  { name: 'React', id: '3' },
  { name: 'TypeScript', id: '4' },
  { name: 'HTML/CSS', id: '5' },
  { name: 'SQL', id: '6' },
  { name: 'MSSQL', id: '7' },
  { name: 'Vue.js', id: '8' },
  { name: 'Next.js', id: '9' },
  { name: 'Spring', id: '10' },
  { name: 'REST API', id: '11' },
  { name: 'vanilla-javascript', id: '12' },
  { name: 'Node.js', id: '13' },
  { name: 'ES6', id: '14' },
  { name: 'ES5', id: '15' },
  { name: 'Python', id: '16' },
  { name: 'Express', id: '17' },
  { name: 'Mongo DB', id: '18' },
  { name: 'Firebase', id: '19' },
  { name: 'Django', id: '20' },
  { name: 'jQuery', id: '21' },
];

const ListFilter = ({
  setSelectedTags,
  handleTagClick,
  selectedTags,
}: IProps) => {
  const [toggle, setToggle] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter((tag) =>
    tag.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <div
        className="relative flex gap-4 "
        style={toggle ? { overflow: 'hidden' } : { flexWrap: 'wrap' }}
      >
        <FilterInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <UnSelectedTags
          filteredData={filteredData}
          handleTagClick={handleTagClick}
        />
        <Toggle
          toggle={toggle}
          setToggle={setToggle}
        />
      </div>

      <SelectedTags
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
        handleTagClick={handleTagClick}
      />
    </div>
  );
};

export default ListFilter;
