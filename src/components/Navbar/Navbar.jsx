import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
                const[open,setOpen]=useState()
            const routes = [
                        { name: "Home", id: 1, path: "/" },
                        { name: "About", id: 2, path: "/about" },
                        { name: "Services", id: 3, path: "/services" },
                        { name: "Products", id: 4, path: "/products" },
                        { name: "Contact", id: 5, path: "/contact" }
                      ];
               
                      
            return (
                        <nav className="bg-red-600 px-6">
                        <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
                          {
                              open===true?<AiOutlineClose></AiOutlineClose>:<AiOutlineMenu className="text-2xl"></AiOutlineMenu>
                          }
                        

                        </div>

                               <ul className={`md:flex  duration-1000 absolute
                               md:static
                               ${open?'top-6':'-top-40'} bg-red-600`}>
                               {
                                    routes.map(route=> <Link key={route.id} route={route}></Link>)
                               }     
                               </ul>
                        </nav>
            );
};

export default Navbar;
