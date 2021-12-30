import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Public from './pages/Public';
import Protected from './pages/Protected';
import RequireAuth from './components/RequireAuth';
import Login from './pages/Login';
import Layout from './components/Layout';
import Register from './pages/Register';
import Users from './pages/Users';
import UserProfile from './pages/UserProfile';
import Posts from './pages/Posts';


function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/public" element={<Public />} />
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/protected" element={<Protected />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/posts" element={<Posts />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
