const InterviewResultLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap m-auto my-9 max-w-[60rem] px-5">{children}</div>;
};

export default InterviewResultLayout;
