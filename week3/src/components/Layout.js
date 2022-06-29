const Layout = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #dcdcdc",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      {children}
    </div>
  );
};
export default Layout;
