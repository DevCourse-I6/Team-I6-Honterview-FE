import MainCamerScreenSection from './components/cameraScreen';
import MainChattingScreenSection from './components/chattingScreen';
import MainResultScreenSection from './components/resultScreen';

const MainScreenShotsSection = () => {
  return (
    <div className="flex w-full flex-col bg-gradient-to-b from-blue-100 via-blue-50 to-white to-95%">
      <MainCamerScreenSection />
      <MainChattingScreenSection />
      <MainResultScreenSection />
    </div>
  );
};

export default MainScreenShotsSection;
