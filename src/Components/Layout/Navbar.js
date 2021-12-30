import './Navbar.css' 
import React ,{useState} from 'react';
import {Link} from 'react-router-dom'
import {FaBars , FaTimes} from 'react-icons/fa'
function Navbar ()  {
    
    
    const [icon, setIcon] = useState(false)
    const handleClick = () => {
        setIcon(!icon)
    }
     const closeSideDrawer = ()=> {
            setIcon(!icon)  
    }

    return (
        <>  
        <nav className = 'navbar'>
            <Link to = '/'className =' nav-logo' onClick= {closeSideDrawer}>Logout</Link>
            <div className = 'menu-icon' onClick = {handleClick}>
                {
                    icon ? <FaTimes className = 'fa-times'></FaTimes> : <FaBars className = 'fa-bars'>
                    </FaBars>
                }

            </div>
           <ul className = {
                icon ? 'nav-menu active': 'nav-menu'
             }>
                <li>
                    <Link to ='/' className= 'nav-links' onClick={closeSideDrawer}>Home</Link>
                </li>
            
               <li>
                    <Link to ='/About'className='nav-links'onClick={closeSideDrawer}>About</Link>
               </li>
               <li>  
                    <Link to ='/Contact'className='nav-links' onClick={closeSideDrawer}>Login</Link>
               </li>
               <li>
                   <Link to ='/Userdetails' className='nav-links' onClick={closeSideDrawer}>Userdetails</Link>
                   
               </li>

               <li>
                  <Link to ='/Signup'className='nav-links'onClick={closeSideDrawer}>Registration</Link>
               </li>
          </ul>
     </nav>
            
        </>
    )
}

export default Navbar;
