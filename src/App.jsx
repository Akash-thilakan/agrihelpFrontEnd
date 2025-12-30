
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
import Products from './common/Pages/Products'
import UserNews from './user/pages/UserNews'
import UserTips from './user/pages/UserTips'
import View from './common/Pages/View'
import FarmerNews from './farmer/pages/FarmerNews'
import FarmerTips from './farmer/pages/FarmerTips'
import Users from './admin/pages/Users'
import AdminTips from './admin/pages/AdminTips'
import { ToastContainer } from 'react-toastify'
import UserViewProduct from './user/pages/UserViewProduct'
import UserTools from './user/pages/UserTools'
import FarmerViewProduct from './farmer/pages/FarmerViewProducts'
import FarmerViewVedios from './farmer/pages/FarmerViewVedios'
import Farmers from './admin/pages/Farmers'
import AdminViewNews from './admin/pages/AdminViewNews'
import PaymentSucces from './common/Pages/PaymentSuccess'
import PaymentError from './common/Pages/PaymentError'


function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<LandingPage/>}  />
      <Route path='/paymentsuccess' element={<PaymentSucces/>}  />
      <Route path='/paymenterror' element={<PaymentError/>}  />
      <Route path='/login' element={<Auth/>}  />
      <Route path='/register' element={<Auth register />}  />
      <Route path='/adminhome' element={<AdminHome/>}  />
      <Route path='/adminnews' element={<AdminNews/>}  />
      <Route path='/adminviewnews' element={<AdminViewNews/>}  />
      <Route path='/admintips' element={<AdminTips/>}  />
      <Route path='/adminvedios' element={<AdminVedios/>}  />
      <Route path='/users' element={<Users/>}  />
      <Route path='/farmers' element={<Farmers/>}  />
      <Route path='/products' element={<Products/>}  />
      <Route path='/farmerhome' element={<FarmerHome/>}  />
      <Route path='/addcrops' element={<AddCrops/>}  />
      <Route path='/addtips' element={<AddTips/>}  />
      <Route path='/farmercart' element={<FarmerCart/>}  />
      <Route path='/farmertips' element={<FarmerTips/>}  />
      <Route path='/farmernews' element={<FarmerNews/>}  />
      <Route path='/farmerviewvedios' element={<FarmerViewVedios/>}  />
      <Route path="/farmerviewproduct/:type/:id" element={<FarmerViewProduct/>}  />
      <Route path='/usercart' element={<UserCart/>}  />
      <Route path='/userhome' element={<UserHome/>}  />
      <Route path='/usernews' element={<UserNews/>}  />
      <Route path='/usertools' element={<UserTools/>}  />
      <Route path="/userviewproduct/:type/:id" element={<UserViewProduct/>}  />
      <Route path='/sellproducts' element={<SellProducts/>}  />    
      <Route path='/usertips' element={<UserTips/>}  />
      <Route path='/view' element={<View/>}  />
      <Route path='/vedios' element={<Vedios/>}  />
     </Routes>
     <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="colored"
        
      />

    </>
  )
}

export default App
