import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Common/Navbar';
import Topbar from './Components/Common/Topbar';
import Home from './Pages/Home';
import Footer from './Components/Common/Footer';
import ContactMain from './Pages/ContactMain';
import ServiceMain from './Pages/ServiceMain';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicSingleService from './Homes/BasicSingleService';
import MainSingleservice from './Homes/MainSingleservice';
import Login from './Pages/Login'
import Register from './Pages/Register'
import Admin from './Pages/Admin';
import AdminLogin from './Pages/AdminLogin';
import ServiceAdmin from './Pages/ServiceAdmin';
import ContactAdmin from './Pages/ContactAdmin';
function App() {
  function PrivateRoute({ children }) {
    const token = localStorage.getItem("admin_token")
    return token !== null && token !== undefined ? (
      children
    ) : (
      <Navigate to="/adminlogin" />
    );
  }
  const publicRoutes = [
    {
      path: '/',
      component: <Home />
    },
    {
      path: '/contact',
      component: <ContactMain />
    },
    {
      path: '/service',
      component: <ServiceMain />
    },
    {
      path: '/login',
      component: <Login />
    },
    {
      path: '/register',
      component: <Register />
    },
    {
      path: '/adminlogin',
      component: <AdminLogin />
    },
    {
      path: '/service/:id',
      component: <BasicSingleService />
    },
    {
      path: '/mainservice/:id',
      component: <MainSingleservice />
    }
  ]
  const protectedRoutes = [
    {
      path: '/admin',
      component: <Admin />
    },
    {
      path : '/admin/servicerequest',
      component : <ServiceAdmin/>
    },
    {
      path : '/admin/contactrequest',
      component : <ContactAdmin/>
    }
  ]
  return (
    <>
      <Router>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored" />
        <Topbar />
        <Navbar />
        <Routes>
          {publicRoutes?.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={route?.component}
              />
            )
          })}
          {/* Protect Route */}
          {protectedRoutes?.map((route) => {
            return (
              <Route
                path={route.path}
                element={<PrivateRoute>{route?.component}</PrivateRoute>}
              />
            )

          })}
        </Routes>
        <Footer />
      </Router>

    </>
  );
}

export default App;
