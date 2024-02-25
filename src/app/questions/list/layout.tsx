const QuestionsListLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return <div className="wrap m-auto max-w-[120rem]">{children}</div>;
};

export default QuestionsListLayout;
