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
import BarChart from './components/client/test/BarChart ';
import PieChart from './components/client/test/PieChart';
import StackedBarChart from './components/client/test/StackedBarChart ';
import LineChart from './components/client/test/LineChart ';
import Chart from './components/client/test/Chart';
import StackedColumnChart from './components/client/test/StackedColumnChart ';
import AreaChart from './components/client/test/AreaChart';
import ProductContext from './context/ProductContext';
import AppContext from './context/AppContext';
import CategoryContext from './context/CategoryContext';
import ProductList from './pages/admin/product/ProductList';
import ProductAdd from './pages/admin/product/ProductAdd';
import ProductEdit from './pages/admin/product/ProductEdit';
import CategoryList from './pages/admin/category/CategoryList';
import CategoryAdd from './pages/admin/category/CategoryAdd';
import CategoryEdit from './pages/admin/category/CategoryEdit';

function App() {

  const routes = useRoutes([
    {
      path: "", element: <AppContext><ProductContext><CategoryContext><LayoutClient /></CategoryContext></ProductContext></AppContext>, children: [
        { path: "", element: <Home /> },
        { path: "detail/:id", element: <Detail /> },
        { path: "category/:categoryId", element: <Categorys /> },

      ]
    },
    {
      path: "chart", element: <Chart />, children: [
        { path: "", element: <BarChart /> },
        { path: "pie", element: <PieChart /> },
        { path: "stackedbar", element: <StackedBarChart /> },
        { path: "line", element: <LineChart /> },
        { path: "sackedsolumnshart", element: <StackedColumnChart /> },
        { path: "areachart", element: <AreaChart /> },
      ]
    },
    {
      path: "admin",
      element: <AppContext><ProductContext><CategoryContext><LayoutAdmin /></CategoryContext></ProductContext></AppContext>, children: [
        { path: "", element: <ProductList /> },
        { path: "product/add", element: <ProductAdd /> },
        { path: "product/edit/:id", element: <ProductEdit /> },
        { path: "category", element: <CategoryList /> },
        { path: "category/add", element: <CategoryAdd /> },
        { path: "category/edit/:id", element: <CategoryEdit /> },
      ],
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
