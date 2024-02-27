import Divider from '@/components/divider';
import CheckBox from '@/container/interviewResult/components/CheckBox/CheckBox';

const InterviewResultPage = () => {
  return (
    <div>
      <div className="m-auto w-fit max-w-6xl">
        <div className="mb-5 aspect-video rounded bg-slate-50">영상</div>
        <div className="flex w-full justify-between">
          <h1 className="mb-10 text-extraLarge font-bold">
            브라우저 렌더링 원리에 대해서 설명해보세요.
          </h1>

          <CheckBox checkId="test" />
        </div>
        <div className="max-w-6xl rounded-lg bg-[#F2F2F2] px-5 py-14">
          <p className="text-large ">
            브라우저 렌더링은 HTML, CSS, JavaScript 등의 웹 페이지 자원을
            브라우저가 화면에 그리는 과정을 말합니다. 브라우저 렌더링 원리와
            순서는 크게 다음과 같은 단계로 구성됩니다. 먼저 DOM을 생성합니다.
            브라우저는 HTML 문서를 파싱하여 DOM 트리를 생성합니다. 이때, HTML
            태그를 노드로 변환하고, 노드간의 계층 관계를 형성합니다. 두 번째로
            CSSOM을 생성합니다. 브라우저는 CSS 파일을 파싱하여 CSSOM 트리를
            생성합니다. 이때, CSS 속성을 노드로 변환하고, 노드간의 계층 관계를
            형성합니다. 세 번째로 DOM트리와 CSSOM을 결합하여 렌더 트리를 생성
            합니다. 이때, 실제 화면에 표시될 요소만을 선택하여 렌더 트리를
            형성합니다. 이제, 브라우저는 렌더 트리를 이용하여 각 요소의 크기와
            위치를 계산하는 과정인 레이아웃을 거쳐 화면에 요소를 그리는 페인팅
            과정을 거치게 됩니다. 이때, 요소의 배경, 테두리, 글자 등을 그리게
            됩니다.
          </p>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default InterviewResultPage;
