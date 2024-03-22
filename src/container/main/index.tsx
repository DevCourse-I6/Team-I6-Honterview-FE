'use client';

import './style.css';

import MainIntroSection from './components/introSection';
import MainOutroSection from './components/outroSection';
import MainQuestionListSection from './components/questionsSection/questionListSection';
import MainQuestionDetailSection from './components/questionsSection/questionsDetailSection';
import MainScreenShotsSection from './components/screenShotsSection';

const Main = () => {
  return (
    <div className="h-full text-gray-800">
      <MainIntroSection />
      <MainQuestionListSection />
      <MainQuestionDetailSection />
      <MainScreenShotsSection />
      <MainOutroSection />
    </div>
  );
};

export default Main;
