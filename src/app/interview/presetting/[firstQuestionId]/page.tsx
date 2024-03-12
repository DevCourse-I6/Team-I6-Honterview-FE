import PreSetting from '@/container/presetting';

import { PreSettingPageProps } from './type';

const PreSettingPage = ({ params }: PreSettingPageProps) => {
  const { firstQuestionId } = params;
  return <PreSetting firstQuestionId={Number(firstQuestionId)} />;
};

export default PreSettingPage;
