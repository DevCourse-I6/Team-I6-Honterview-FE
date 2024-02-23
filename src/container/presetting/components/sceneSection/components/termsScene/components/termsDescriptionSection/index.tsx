import {
  TERMS_DENY_TEXT,
  TERMS_DURATION_TEXT,
  TERMS_DURATION_TITLE,
  TERMS_GOAL_TEXT,
  TERMS_GOAL_TITLE,
  TERMS_TARGET_TEXT,
  TERMS_TARGET_TITLE,
  TERMS_TITLE,
} from '../../constants';

const TermsDescriptionSection = () => {
  return (
    <>
      <p className="mb-[1rem] font-semibold">{TERMS_TITLE}</p>
      <div className="mb-[1rem] flex">
        <div className="w-[23rem] border border-r-0">
          <div className="bg-background-20 py-[1rem] pl-[1rem]">
            {TERMS_GOAL_TITLE}
          </div>
          <div className="h-[5rem] py-[1rem] pl-[1rem]">{TERMS_GOAL_TEXT}</div>
        </div>
        <div className="w-[32rem] border border-r-0">
          <div className="bg-background-20 py-[1rem] pl-[1rem]">
            {TERMS_TARGET_TITLE}
          </div>
          <div className="py-[1rem] pl-[1rem]">{TERMS_TARGET_TEXT}</div>
        </div>
        <div className="w-[20rem] border">
          <div className="bg-background-20 py-[1rem] pl-[1rem]">
            {TERMS_DURATION_TITLE}
          </div>
          <ul className="py-[1rem] pl-[1rem]">
            <li>{TERMS_DURATION_TEXT[0]}</li>
            <li>{TERMS_DURATION_TEXT[1]}</li>
          </ul>
        </div>
      </div>
      <div className="mb-[5rem]">{TERMS_DENY_TEXT}</div>
    </>
  );
};

export default TermsDescriptionSection;
