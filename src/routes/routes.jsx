import Home from '@/pages/accueil';
import Notification from '@/pages/notification';
import Profil from '@/pages/profil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from '@/auth/signIn';
import Login from '@/auth/login';
const AppRoutes = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    </> );
}
 
export default AppRoutes;