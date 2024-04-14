// MJS 4.15.24. React portfolio front-end. 
import ReactDOM from 'react-dom/client'; 
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'; 

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';

// Old way without a router. 
// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

// New way - create a browser router.
const router = createBrowserRouter([ 
  { path: '/',
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [ 
      {index: true,         element: <HomePage />,    },
      {path: 'profile/:id', element: <ProfilePage />, }, 
      {path: 'about',       element: <AboutPage />,   },
    ], // end children array
  }, 
]);  // end creatRouterBrowser 

// Now create the root using the router object just created
