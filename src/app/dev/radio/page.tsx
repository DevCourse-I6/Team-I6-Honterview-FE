'use client';

import Radio from '@/components/radio';

const RadioDev = () => {
  const fruitOptions = [
    { id: '바나나', name: '과일', value: '바나나', label: '바나나' },
    { id: '사과', name: '과일', value: '사과', label: '사과' },
  ];

  return (
    <>
      {fruitOptions.map((option) => {
        const { id, name, value, label } = option;
        // id: label과 button 연결
        // name: 버튼 그룹을 형성하는 이름
        // value: 버튼의 데이터
        // label: label 제목
        // onChange: 선택 변경 시 콜백 함수

        return (
          <Radio
            key={id}
            id={id}
          >
            <Radio.Button
              name={name}
              value={value}
              // eslint-disable-next-line no-console
              onChange={(e) => console.log(e.target.value)}
            />
            <Radio.Label>{label}</Radio.Label>
          </Radio>
        );
      })}
    </>
  );
};

export default RadioDev;
