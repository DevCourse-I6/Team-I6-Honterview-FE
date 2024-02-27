import { Search } from '@/components/icon';
import Input from '@/components/input';

const ListInput = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10">
      <h1 className="text-tripleLarge font-bold">질문검색</h1>
      <Input className="w-[50rem] gap-5 rounded-full pl-12 pr-5 ">
        <Input.Text placeholder="질문 내용을 검색하세요." />
        <div className="flex h-[40px] w-[40px] flex-none cursor-pointer items-center justify-center rounded-full bg-primaries-primary">
          <Search className="text-white " />
        </div>
      </Input>
    </div>
  );
};

export default ListInput;
