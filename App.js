import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Login from './routes/Login';
import Home from './routes/Home';
import Restaurants from './routes/Restaurants';
import SignUp from './routes/SignUp';

import OrderPage from './components/OrderPage';
import RestaurantFoodMenu from './components/RestaurantFoodMenu';
import RestaurantFoodGallery from './components/RestaurantFoodGallery';
import BookTable from './components/BookTable';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/restaurants' element={<Restaurants/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/order' element={<OrderPage/>} />
        <Route path='/restaurantfoodmenu' element={<RestaurantFoodMenu/>}/>
        <Route path='/restaurantfoodgallery' element={<RestaurantFoodGallery/>}/>
        <Route path='/booktabel'  element={<BookTable/>}/>
      </Routes>

      <Navbar/>

      
    </div>
  );
}

export default App;
