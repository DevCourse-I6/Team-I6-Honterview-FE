import InterviewResultImage from '@/container/main/images/interview_result.png';

import ScreenShotsScreens from '../components/ScreenShotsScreens';

const MainResultScreenSection = () => {
  return (
    <ScreenShotsScreens
      imageSrc={InterviewResultImage}
      imageTitle="모의 면접 - 면접결과"
    >
      <>
        <h2>
          내 <span className="text-primaries-primary">답변 기록</span>과
        </h2>
        <h2>
          영상
          <span className="text-primaries-primary"> 다운로드</span>로
        </h2>
        <h2>셀프 피드백까지</h2>
      </>
    </ScreenShotsScreens>
  );
};

export default MainResultScreenSection;
