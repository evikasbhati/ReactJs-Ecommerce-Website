import Searchbar from '../Search/Searchbar'
import './Navbar.css'
import { Close, Menu, Person } from '@material-ui/icons'
import Banner from './Banner/Banner'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import{ Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { login } from '../../redux/apicall'
import { useDispatch } from 'react-redux'

const Navbar = () => {
    const [hamBurger,setHamBurger]=useState(false);
    const [lougoutDiv,setSetLogoutDiv]=useState(false);
    const quantity=useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user)
    const navigate=useNavigate()
    const dispatch=useDispatch()
    

    const handleHamburger=()=>{
        setHamBurger(!hamBurger);
    }
    const handleLogoutDiv=()=>{
        setSetLogoutDiv(!lougoutDiv)
    }
    const handleLogout=()=>{
        login(dispatch,null)
        navigate("/login");
    }
    console.log(user);
    return (
        <div>
            <div className="banner"><Banner /></div>
            <div className="navbar_box">
                {/* <div className="logo"><img src={logo}alt="logo" /></div> */ }
                <div className="hamBurger"  onClick={handleHamburger}>
                {!hamBurger ?  <Menu fontSize='large' style={{color:"white"}} />:<Close fontSize='large' style={{color:"white"}}  />}
                </div>
                {hamBurger &&
                <div className='hamMenu'>
                <ul className="nav_ul">
                        <li className="nav_li"><a href="/" className="nav_li_a">Home</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">About Us</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">Contact us</a></li>
                    </ul>
                </div>
                }
                <div className="menu_items" >
                    <ul className="nav_ul">
                        <li className="nav_li"><a href="/" className="nav_li_a">Home</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">About Us</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">Contact us</a></li>
                    </ul>
                </div>
                <div className="Search"><Searchbar /></div>
                <div className="nav_buttons">
                <div className="account">
                    {!user.currentUser && <Link to='/login'> <button className="select_logs">Login</button></Link>}
                    {!user.currentUser && <Link to="/register"><button className="select_logs">SignUp</button></Link>}
                        </div>
                <Link to='/cart'><button className="cart_button" ><Badge badgeContent={quantity} color="secondary"><ShoppingCartOutlined/></Badge></button></Link>
                {user.currentUser?.isAdmin && <Link to='/Admin'><button className="person_button" ><Person/></button></Link>}
                {user?.currentUser && <button className="person_button" onClick={handleLogoutDiv}><Person/></button>}
                {lougoutDiv && <div className='logout' onClick={handleLogout}><span className='logoutSpan'>Logout</span></div>} 
                </div>
            </div>
        </div>
    )
}
export default Navbar