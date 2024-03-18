import Link from "../Link/Link";
const Navbar = () => {

            const routes = [
                        { name: "Home", id: 1, path: "/" },
                        { name: "About", id: 2, path: "/about" },
                        { name: "Services", id: 3, path: "/services" },
                        { name: "Products", id: 4, path: "/products" },
                        { name: "Contact", id: 5, path: "/contact" }
                      ];
               
                      
            return (
                        <nav>
                               <ul className="md:flex">
                               {
                                    routes.map(route=> <Link key={route.id} route={route}></Link>)
                               }     
                               </ul>
                        </nav>
            );
};

export default Navbar;