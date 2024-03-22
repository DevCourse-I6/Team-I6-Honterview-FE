import React from 'react';

import SectionAnimationWrapper from '../AnimationWrapper/SectionAnimationWrapper';
import TermsAgreeSection from './components/termsAgreeSection';
import TermsDescriptionSection from './components/termsDescriptionSection';
import TermsHeaderSection from './components/termsHeaderSection';

const TermsScene = () => {
  return (
    <SectionAnimationWrapper className="flex h-full w-full flex-col justify-center text-[1.5rem] tablet:text-[1.6rem]">
      <TermsHeaderSection />
      <TermsDescriptionSection />
      <TermsAgreeSection />
    </SectionAnimationWrapper>
  );
};

export default TermsScene;
