import Header from './Header';
import Sidebar from './SideBar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="Container">
        <Sidebar />
        <div className="Content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
