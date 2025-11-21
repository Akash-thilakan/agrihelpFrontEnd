
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './common/Pages/LandingPage'
import Auth from './common/Pages/Auth'
import AdminHome from './admin/pages/AdminHome'
import AdminNews from './admin/pages/AdminNews'
import AdminVedios from './admin/pages/AdminVedios'
import FarmerHome from './farmer/pages/FarmerHome'
import AddCrops from './farmer/pages/AddCrops'
import AddTips from './farmer/pages/AddTips'
import FarmerCart from './farmer/pages/FarmerCart'
import UserCart from './user/pages/UserCart'
import UserHome from './user/pages/UserHome'
import News from './user/pages/UserNews'
import Vedios from './common/Pages/Vedios'
import SellProducts from './user/pages/SellProducts'

import UserNews from './user/pages/UserNews'
import UserTips from './user/pages/UserTips'
import View from './common/Pages/View'
import FarmerNews from './farmer/pages/FarmerNews'
import FarmerTips from './farmer/pages/FarmerTips'
import Users from './admin/pages/Users'
import FarmerProdcts from './admin/pages/FarmerProdcts'
import UserProducts from './admin/pages/UserProducts'
import AdminTips from './admin/pages/AdminTips'
import FarmerPayment from './farmer/pages/FarmerPayment'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}  />
      <Route path='/login' element={<Auth/>}  />
      <Route path='/register' element={<Auth register />}  />
      <Route path='/adminhome' element={<AdminHome/>}  />
      <Route path='/adminnews' element={<AdminNews/>}  />
      <Route path='/admintips' element={<AdminTips/>}  />
      <Route path='/adminvedios' element={<AdminVedios/>}  />
      <Route path='/users' element={<Users/>}  />
      <Route path='/farmerproducts' element={<FarmerProdcts/>}  />
      <Route path='/userproducts' element={<UserProducts/>}  />
      <Route path='/farmerhome' element={<FarmerHome/>}  />
      <Route path='/addcrops' element={<AddCrops/>}  />
      <Route path='/addtips' element={<AddTips/>}  />
      <Route path='/farmercart' element={<FarmerCart/>}  />
      <Route path='/farmernews' element={<FarmerNews/>}  />
      <Route path='/farmertips' element={<FarmerTips/>}  />
      <Route path='/farmerpayment' element={<FarmerPayment/>}  />
      <Route path='/usercart' element={<UserCart/>}  />
      <Route path='/userhome' element={<UserHome/>}  />
      <Route path='/usernews' element={<UserNews/>}  />
      <Route path='/sellproducts' element={<SellProducts/>}  />    
      <Route path='/usertips' element={<UserTips/>}  />
      <Route path='/view' element={<View/>}  />
      <Route path='/vedios' element={<Vedios/>}  />







     </Routes>

    </>
  )
}

export default App
