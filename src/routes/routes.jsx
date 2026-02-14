import Home from '@/pages/accueil';
import Notification from '@/pages/notification';
import Profil from '@/pages/profil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
    return ( <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
    </> );
}
 
export default AppRoutes;