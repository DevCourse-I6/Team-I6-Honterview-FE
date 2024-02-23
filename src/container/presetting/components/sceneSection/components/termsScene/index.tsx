import React from 'react';

import TermsAgreeSection from './components/termsAgreeSection';
import TermsDescriptionSection from './components/termsDescriptionSection';
import TermsHeaderSection from './components/termsHeaderSection';

const TermsScene = () => {
  return (
    <div className="flex h-full flex-col justify-center text-medium">
      <TermsHeaderSection />
      <TermsDescriptionSection />
      <TermsAgreeSection />
    </div>
  );
};

export default TermsScene;
