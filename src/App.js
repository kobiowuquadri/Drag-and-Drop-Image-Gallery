import './App.css';
import {Routes, Route} from 'react-router-dom'
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/SignUp/SignUp';
function App() {
  return (
    <Routes>
       <Route index element={<ImageGallery/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
  );
}

export default App;