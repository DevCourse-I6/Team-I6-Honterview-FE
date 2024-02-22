import { TERMS_DESCRIPTION, TERMS_HEADER } from '../../constants';

const TermsHeaderSection = () => {
  return (
    <>
      <h1 className="mb-[1rem] flex w-full justify-center text-extraLarge font-bold">
        {TERMS_HEADER}
      </h1>
      <div className="mb-[5rem] w-full flex-col">
        <p className="flex justify-center ">{TERMS_DESCRIPTION[0]}</p>
        <p className="flex justify-center">{TERMS_DESCRIPTION[1]}</p>
      </div>
    </>
  );
};

export default TermsHeaderSection;
