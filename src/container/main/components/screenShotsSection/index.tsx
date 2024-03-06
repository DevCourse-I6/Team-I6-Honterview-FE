import MainCamerScreenSection from './components/cameraScreen';
import MainChattingScreenSection from './components/chattingScreen';
import MainResultScreenSection from './components/resultScreen';

const MainScreenShotsSection = () => {
  return (
    <div className="flex w-full flex-col overflow-y-scroll bg-gradient-to-b from-blue-100 via-blue-50 to-white">
      <MainCamerScreenSection />
      <MainChattingScreenSection />
      <MainResultScreenSection />
    </div>
  );
};

export default MainScreenShotsSection;
