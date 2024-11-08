import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './Routes';
import { DefaultLayout } from './Layout';
import { Fragment } from 'react';
import SellerLayout from './Layout/SellerLayout/SellerLayout';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { userAction } from './store/user';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // Lấy token từ cookie
    const token = Cookies.get('accessToken');

    if (token) {
      try {
        const decoded = jwtDecode(token);
        dispatch(userAction.setUser(decoded));
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId="500915612685-ede76ee054sf42eoramo1ulv5ppvn8h4.apps.googleusercontent.com">
      <Router>
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout === 'no-layout') {
                Layout = Fragment;
              }
              if (route.layout === 'seller-layout') {
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
    </GoogleOAuthProvider>
  );
}

export default App;
