const QuestionDetailLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap m-auto my-9 max-w-[70rem] px-5">{children}</div>;
};

export default QuestionDetailLayout;
