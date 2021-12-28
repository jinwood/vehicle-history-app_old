const Group = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="form-group flex content-around w-9/12 justify-between mt-3">
      {children}
    </div>
  );
};

export default Group;
