'use client';

import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AutocompleteSearch from '@/components/autocompleteSearch';
import { AutocompleteDataType } from '@/components/autocompleteSearch/type';
import Button, { ButtonType } from '@/components/button';
import { BookmarkIcon, XIcon } from '@/components/icon';
import Modal from '@/components/modal';
import Tag from '@/components/tag';
import { notify } from '@/components/toast';
import { MAX_TAG_COUNT } from '@/container/presetting/components/sceneSection/components/firstQuestionScene/constants';
import { dummyTags } from '@/container/presetting/components/sceneSection/components/firstQuestionScene/dummydata';
import { clickQuestionHeart } from '@/container/questions/services';

import { IProps } from './types';

const HeaderButton = ({
  questionId,
  isHearted: initialIsHearted,
  questionHeartCount: initialHeartsCount,
}: IProps) => {
  const [isHearted, setIsHearted] = useState(initialIsHearted);
  const [heartsCount, setHeartsCount] = useState(initialHeartsCount);
  const [visible, setVisible] = useState(false);
  const [selectedList, setSelectedList] = useState<AutocompleteDataType[]>([
    { id: 1, name: 'react' },
  ]);

  const { mutate } = useMutation({
    mutationFn: () => clickQuestionHeart(questionId),
    onSuccess: () => {
      setIsHearted(!isHearted);
      setHeartsCount(isHearted ? heartsCount - 1 : heartsCount + 1);
    },
  });

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <button
          onClick={toggleVisible}
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          수정
        </button>
        <button
          type="button"
          className="rounded-3xl bg-slate-100 px-5 py-2"
        >
          삭제
        </button>
      </div>
      <div className="flex items-center gap-1">
        <span className=" text-large">{heartsCount}</span>

        <button
          type="button"
          onClick={() => mutate()}
        >
          <BookmarkIcon
            className={`${isHearted ? 'fill-primaries-active' : 'fill-slate-300 hover:fill-blue-300'}`}
          />
        </button>
      </div>
      <Modal
        visible={visible}
        onClose={toggleVisible}
        className="h-[35rem] w-[50rem] rounded-3xl bg-white px-6 py-10"
      >
        <input
          placeholder="JVM의 역할에 대해 설명해주세요."
          className=" mb-7 w-full appearance-none border-b-[1px] border-blue-300 bg-transparent px-5 py-2 text-extraLarge focus:border-b-primaries-active focus:outline-none"
        />

        <div className="flex flex-col gap-4">
          <AutocompleteSearch
            totalDatas={dummyTags}
            selectedList={selectedList}
            onSelectItem={(tag) => {
              if (selectedList.length >= MAX_TAG_COUNT) {
                notify('warning', '제한된 태그 개수를 초과하였습니다');
                return;
              }
              setSelectedList((prevSelectedList) => [...prevSelectedList, tag]);
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
          <Button className="w-1/2">수정하기</Button>
          <Button
            onClick={toggleVisible}
            styleType={ButtonType.Type2}
            className="w-1/2"
          >
            취소
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default HeaderButton;
