import MainCamerScreenSection from './components/ScreenShotsScreens/cameraScreen';
import MainChattingScreenSection from './components/ScreenShotsScreens/chattingScreen';
import MainResultScreenSection from './components/ScreenShotsScreens/resultScreen';

const MainScreenShotsSection = () => {
  return (
    <div className="flex w-full flex-col bg-gradient-to-b from-blue-100 via-blue-50 to-white to-95% p-[2rem] laptop:p-0">
      <MainCamerScreenSection />
      <MainChattingScreenSection />
      <MainResultScreenSection />
    </div>
  );
};

export default MainScreenShotsSection;
