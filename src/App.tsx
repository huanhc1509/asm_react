import { useRoutes } from 'react-router-dom';
import './App.css'
import Home from './pages/client/Home';
import LayoutClient from './components/LayoutClient';
import Categorys from './pages/client/Categorys';
import Detail from './pages/client/Detail';
import LayoutAdmin from './components/LayoutAdmin';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import NotFound from './pages/auth/NotFound';

function App() {

  const routes = useRoutes([
    {
      path: "", element: <LayoutClient />, children: [
        { path: "", element: <Home /> },
        { path: "detail", Component: Detail },
        { path: "category", Component: Categorys },
      ]
    },
    {
      path: "admin",
      element: <LayoutAdmin />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

export default App
