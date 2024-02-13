import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className='bg-blue-600 w-full'>
        <ol className='flex p-4 gap-8 justify-end text-white text-[20px]'>
            <li><Link to="/">Products</Link></li>
            <li><Link to="/addproducts">Add Prodcts</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/logout">Logout</Link></li>
            <li><Link to="/signup">SignUp</Link></li>
        </ol>
    </div>
    </>
  );
}

export default Navbar;
