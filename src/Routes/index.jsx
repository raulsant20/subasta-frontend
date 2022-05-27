import { useContext } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../pages/Landing'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Footer from '../components/Footer'
import RegisterSeller from '../pages/RegisterSeller'
import LoginSeller from '../pages/LoginSeller'
import HomeSeller from '../pages/HomeSeller';
import Create from '../pages/Create';
import Subasta from '../pages/Subasta'
import { UserContext } from '../context/userContext';
import SubGanados from '../pages/SubGanados';

function AppRoutes() {
  const { user } = useContext(UserContext);
  const condition = user.type === 'seller'
  console.log(condition, user)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={ !condition? <Landing />: <HomeSeller/>} />
        <Route path='/create' element={ !condition? <Landing />: <Create/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/seller-login' element={<LoginSeller/>} />
        <Route path='/seller-register' element={ <RegisterSeller/> } />
        <Route path='/subasta/:id' element={<Subasta />}/>
        <Route path='/ganados' element={<SubGanados/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;