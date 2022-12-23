import TopBar from "./TopBar";

function Layout({ children }) {
  return (
    <div>
      <TopBar />
      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
