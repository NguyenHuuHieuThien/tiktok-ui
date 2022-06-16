import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { publicRoutes } from '~/Routes';
import { DefaultLayout } from './Component/Layout';
import { Fragment } from 'react';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((routes, index) => {
            let Layout = DefaultLayout;
            if (routes.layout) {
              Layout = routes.layout;
            } else if (routes.layout === null) {
              Layout = Fragment;
            }
            const Page = routes.component;
            return (
              <Route
                key={index}
                path={routes.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
