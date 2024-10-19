import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import { DefaultLayout } from "./Layout";
import { Fragment } from "react";
import SellerLayout from "./Layout/SellerLayout/SellerLayout";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout === "no-layout") {
              Layout = Fragment;
            }
            if (route.layout === "seller-layout") {
              Layout = SellerLayout;
            }
            return (
              <Route
                key={index}
                path={route.path}
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
