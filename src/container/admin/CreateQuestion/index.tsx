import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, FormEvent, useState } from 'react';

import Button from '@/components/button';
import Input from '@/components/input';
import { notify } from '@/components/toast';
import { createQuestionAdmin } from '@/libs/services/admin';

const CreateQuestion = () => {
  const [values, setValues] = useState({
    content: '',
    categoryIds: '',
  });
  const { mutate, isPending } = useMutation({
    mutationFn: () =>
      createQuestionAdmin({
        content: values.content.trim(),
        categoryIds: values.categoryIds
          .trim()
          .split(' ')
          .map((id) => Number(id)),
      }),

    onSuccess: () => {
      notify('success', '질문이 생성되었습니다!');
      setValues({
        content: '',
        categoryIds: '',
      });
    },
    onError: (error) => notify('error', error.message),
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleButtonClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
  };

  return (
    <div className="rounded-lg border-[1px] border-dotted p-8">
      <h1 className="mb-5 text-large">질문 생성</h1>
      <form
        className="space-y-10"
        onSubmit={handleButtonClick}
      >
        <div className="flex flex-col space-y-6">
          <Input className="w-full">
            <Input.Text
              onChange={handleChange}
              placeholder="질문 내용"
              name="content"
              value={values.content}
              required
            />
          </Input>
          <Input className="w-full">
            <Input.Text
              onChange={handleChange}
              placeholder="카테고리 아이디 번호 e.g. 1 7 12"
              name="categoryIds"
              value={values.categoryIds}
              required
            />
          </Input>
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="w-full"
        >
          질문 생성
        </Button>
      </form>
    </div>
  );
};

export default CreateQuestion;
