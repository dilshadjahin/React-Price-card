
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {

    const [open, setOpen] = useState(false)


    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Admission', path: '*' },
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: '404 Not Found', path: '*' },
      ];

      
    return (
        <nav className="text-black p-10 bg-blue-300">
            <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
                {
                    open == true ? <AiOutlineClose></AiOutlineClose> 
                    : <AiOutlineMenu className=" " />
                }
            
            </div>

           <ul className={`md:flex duration-1000 absolute ${open ? '' : 'hidden'}
           bg- bg-blue-300 px-16 font-bold gap-4 `}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            
           </ul>
        </nav>
    );
};

export default NavBar;