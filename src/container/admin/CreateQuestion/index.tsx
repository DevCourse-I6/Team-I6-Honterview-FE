import Button from '@/components/button';
import Input from '@/components/input';

const CreateQuestion = () => {
  return (
    <div className="rounded-lg border-[1px] border-dotted p-8">
      <h1 className="mb-5 text-large">질문 생성</h1>
      <div className="space-y-10">
        <div className="flex flex-col space-y-6">
          <Input className="w-full">
            <Input.Text placeholder="질문 내용" />
          </Input>
          <Input className="w-full">
            <Input.Text placeholder="카테고리 아이디 번호 e.g. 1 7 12" />
          </Input>
        </div>
        <Button className="w-full">질문 생성</Button>
      </div>
    </div>
  );
};

export default CreateQuestion;
