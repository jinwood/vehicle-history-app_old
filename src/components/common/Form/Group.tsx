const Group = ({
  children,
  halfWidth = false,
}: {
  children: React.ReactNode;
  halfWidth?: boolean;
}) => {
  return (
    <div
      className={halfWidth ? "md:w-1/2 px-3 mb-6 md:mb-0" : "md:w-full px-3"}
    >
      {children}
    </div>
  );
};

export default Group;
