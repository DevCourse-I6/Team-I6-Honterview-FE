const PresettingLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="wrap flex items-center justify-center bg-opacity-10">
      {children}
    </div>
  );
};

export default PresettingLayout;
