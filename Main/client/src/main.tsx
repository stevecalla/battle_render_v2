
import ReactDOM from 'react-dom/client';  // Make sure you're importing from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';  // Adjust according to your file structure
import ErrorPage from './pages/ErrorPage.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Login.tsx';
import TeamsRoom from './pages/TeamsRoom.tsx';
import BattleRoom from './pages/BattleRoom.tsx';
import SignUp from './pages/SignUp.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/teamsRoom',
        element: <TeamsRoom />
      },
      {
        path: '/battleRoom',
        element: <BattleRoom />
      },
      {
        path: '/signUp',
        element: <SignUp />
      }
    ]
  }
]);

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <RouterProvider router={router} />
  );
}
