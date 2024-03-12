'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { AutocompleteDataType } from '@/components/autocompleteSearch/type';
import Button, { ButtonType } from '@/components/button';
import { XIcon } from '@/components/icon';
import Modal from '@/components/modal';
import Tag from '@/components/tag';
import { notify } from '@/components/toast';
import { MAX_TAG_COUNT } from '@/container/presetting/components/sceneSection/components/firstQuestionScene/constants';
import { patchQuestion } from '@/libs/services/questions';
import { ICategory } from '@/types/categories';

import { IProps } from './types';

const UpdateQuestionModal = ({
  questionId,
  questionTitle,
  categoryNames,
  updateModalVisible,
  toggleUpdateModalVisible,
  categories,
  inputElement,
}: IProps) => {
  const [selectedList, setSelectedList] = useState<AutocompleteDataType[]>(
    categoryNames.map((category, index) => ({
      id: index + 1,
      name: category,
    })),
  );
  const router = useRouter();
  const [titleInput, setTitleInput] = useState(questionTitle);
  const { mutate } = useMutation({
    mutationFn: () =>
      patchQuestion(questionId, {
        content: titleInput,
        categoryIds: selectedList.map((category) => category.id as number),
      }),
    onSuccess: () => {
      notify('success', '질문 수정 완료');
      toggleUpdateModalVisible();
      router.refresh();
    },
    onError: (error) => {
      notify('error', error.message);
    },
  });

  return (
    <Modal
      visible={updateModalVisible}
      onClose={toggleUpdateModalVisible}
      className="h-[35rem] w-[50rem] rounded-3xl bg-white px-6 py-10"
    >
      <input
        onChange={(e) => setTitleInput(e.target.value)}
        value={titleInput}
        ref={inputElement}
        placeholder={questionTitle}
        className=" mb-7 w-full appearance-none border-b-[1px] border-blue-300 bg-transparent px-5 py-2 text-extraLarge focus:border-b-primaries-active focus:outline-none"
      />
      <div className="flex flex-col gap-4">
        <AutocompleteSearch
          totalDatas={categories}
          selectedList={selectedList}
          onSelectItem={(tag) => {
            if (selectedList.length >= MAX_TAG_COUNT) {
              notify('warning', '제한된 태그 개수를 초과하였습니다');
              return;
            }
            setSelectedList((prevSelectedList) => [
              ...prevSelectedList,
              tag as ICategory,
            ]);
          }}
          placeholder="예) React"
        />
        <div className="flex min-h-[2rem] w-full gap-[1rem]">
          {selectedList.map((tag) => (
            <Tag key={uuidv4()}>
              {tag.name}
              <button
                type="button"
                key={uuidv4()}
                onClick={() => {
                  const newSelectedList = selectedList.filter(
                    (prevTag) => prevTag.id !== tag.id,
                  );
                  setSelectedList(newSelectedList);
                }}
              >
                <XIcon className="h-[1.5rem] stroke-white" />
              </button>
            </Tag>
          ))}
        </div>
      </div>
      <div className="mt-[110px] flex gap-5">
        <Button
          className="w-1/2"
          onClick={() => mutate()}
        >
          수정하기
        </Button>
        <Button
          onClick={() => toggleUpdateModalVisible()}
          styleType={ButtonType.Type2}
          className="w-1/2"
        >
          취소
        </Button>
      </div>
    </Modal>
  );
};

export default UpdateQuestionModal;
