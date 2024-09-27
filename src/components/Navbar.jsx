import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/UserSlice';

const Navbar = () => {
  let ctx = useSelector((state)=>state.user);
  console.log(ctx)
  let dispatch = useDispatch()

  const handleLogout = ()=>{
    localStorage.removeItem('socialDetails')
    dispatch(logout());

   
  }
  return (
    <nav>
      <ul>
        <li className='nav-link'><Link to={'/'}>Home</Link></li>
        <li><Link to={'/signup'}>Signup</Link></li>
        <li><Link to={'/login'}>Login</Link></li>
        <li onClick={handleLogout} className='btn btn-outline-primary'>Logout</li>
      </ul>
    </nav>
  )
}

export default Navbar
