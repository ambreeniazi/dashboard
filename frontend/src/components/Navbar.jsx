import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      <div className="bg-blue-600 w-full">
      {auth?
      <ol className="flex p-4 gap-8 justify-end text-white text-[20px]">
          <li><Link to="/">Products</Link></li>
          <li> <Link to="/addproducts">Add Prodcts</Link></li>
          <li><Link to="/update">Update Products</Link></li>
          <li><Link to="/profile">Profile</Link></li>
            <li><Link onClick={logout} to="/signup">
                Logout({JSON.parse(auth).name})
              </Link>
            </li></ol>:
            <ol className="flex p-4 gap-8 justify-end text-white text-[20px]">
              <li>
                  <Link to="/signup">SignUp</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li></ol>
                }
               </div>
               </> 
  );
};

export default Navbar;
