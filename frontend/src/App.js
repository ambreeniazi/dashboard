import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComp from './components/PrivateComp';
import Login from './components/Login';
import AddProduct from './components/AddProduct';



function App() {
  return (
    <>  
  <BrowserRouter>
  <Navbar/>
  <Routes>
    {/* <Route element={<PrivateComp/>}> */}
    <Route path='/' exact element={<h1>Product Component</h1>}/>
    <Route path='/addproducts' element={<AddProduct />}/>
    <Route path='/update' element={<h1>Products</h1>}/>
    <Route path='/profile' element={<h1>Products</h1>}/>
    {/* </Route> */}
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>

  );
}

export default App;
