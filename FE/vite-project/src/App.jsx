import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Admin from './pages/Admin/Admin';
import Add from './pages/Add/Add';
function App() {
 

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
         <Route index element={<Home/>}/>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/admin' element={<Admin/>}/>
         <Route path='/add' element={<Add/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
