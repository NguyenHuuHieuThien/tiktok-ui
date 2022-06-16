import Header from './Header';

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="Container">
        <div className="Content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
