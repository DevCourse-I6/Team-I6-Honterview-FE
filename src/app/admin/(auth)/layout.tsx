const AdminAuthLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className=" flex items-center justify-center px-5">{children}</div>
  );
};

export default AdminAuthLayout;
