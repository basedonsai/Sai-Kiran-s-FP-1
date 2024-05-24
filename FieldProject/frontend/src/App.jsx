// app.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import UserDashboard from './pages/UserDashboard';
import ChangePassword from './components/ChangePassword';
import { useAuth } from "./AuthContext";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Bids from './pages/Bids';
import JobDetailPage from './pages/JobDetailed';
import MyJobsDetailed from './pages/MyJobsDetailed';
import Contracts from './pages/Contracts';
import { AuthProvider } from './AuthContext';
import ContractDetail from './components/ContractDetail';


import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  // Check if the user is authenticated (e.g., by checking cookies or the authentication state)
  const { authenticated } = useAuth();
console.log(authenticated)
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          {/* Default Route */}
          <Route
            path="/"
            element={<Home />}
          />  
        <Route path="/contracts/:contractId" element={<ContractDetail />} />
        
        {/* Signup Route: Renders the Signup component if the user is not authenticated; otherwise, navigates to the Dashboard. */}
        <Route
          path="/signup"
          element={authenticated ? <Navigate to="/user/dashboard" /> : <Signup/>}
        />        
        
        {/* Login Route: Renders the Login component if the user is not authenticated; otherwise, navigates to the Dashboard. */}
        <Route
          path="/login"
          element={authenticated ? <Navigate to="/user/dashboard" /> : <Login />}
        />              
        
        {/* Change Password Route: Renders the ChangePassword component. */}
        {/* TODO */}
        <Route
          path="/change-password"
          element={authenticated ? <ChangePassword /> : <Navigate to="/login" /> }
        />        
        
        {/* Dashboard Route: Renders the Dashboard component if the user is authenticated; otherwise, navigates to the Login page. */}
        {/* <Route 
          path="/dashboard" 
          element={authenticated ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
        <Route 
          path="/user/dashboard"
          element={authenticated ? <UserDashboard /> : <Navigate to="/login" /> }
        />


        <Route
          path="/user/profile"
          element={<Profile />}
        />
        <Route
          path="/user/jobs"
          element={<Jobs />}
        />
        <Route
          path="/user/jobs/:id"
          element={<JobDetailPage />}
        />
        <Route
          path="/user/myjobs"
          element={<Contracts />}
        />
        <Route
          path="/user/myjobs/:id/:bidId"
          element={<MyJobsDetailed />}
        />
        <Route
          path="/user/bids"
          element={<Bids />}
        />
        {/* <Route
          path="/freelancer/profile"
          element={<Profile />}
        /> */}


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        
        <Route path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
