import logo from './logo.svg';
import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';

const Home = lazy(() => import('./pages/Home'));
const Signup = lazy(() => import('./pages/Signup'));
const Login =  lazy(() => import('./pages/Login'));;

function App() {
  const ctx = useSelector((state)=>state.user)
  console.log(ctx)
  let login = ctx.login
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/' element={login===true?<Home/>:<Navigate to={'/login'}/>}/>
            <Route path='/login' element={login===false?<Login/>:<Navigate to={'/'}/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
        </Suspense>
     </BrowserRouter>
    </div>
  );
}

export default App;
