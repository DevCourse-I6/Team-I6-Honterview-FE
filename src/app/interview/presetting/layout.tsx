const PresettingLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-[calc(100vh-7rem)] items-center justify-center bg-opacity-10">
      {children}
    </div>
  );
};

export default PresettingLayout;
