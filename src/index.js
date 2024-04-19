import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppProvider } from './AppContext';

import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import './index.css';
import App from './App';
import LandingPage from './views/LandingPage';
import reportWebVitals from './reportWebVitals';
import Page3 from './pages/page3/Page3';
import Page2 from './pages/page2/Page2';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<LandingPage />} />
      <Route path='/Page3' element={<Page3 />} />
      <Route path='/Page2' element={<Page2 />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <HelmetProvider>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </HelmetProvider>
);

reportWebVitals();
