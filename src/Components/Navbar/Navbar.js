import Searchbar from '../Search/Searchbar'
import './Navbar.css'
import { Menu, Person } from '@material-ui/icons'
import Banner from './Banner/Banner'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import{ Link} from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
    const [hamBurger,setHamBurger]=useState(false);
    const quantity=useSelector(state=>state.cart.quantity)
    const user = useSelector(state => state.user)

    const handleHamburger=()=>{
        setHamBurger(!hamBurger);
    }
    return (
        <div>
            <div className="banner"><Banner /></div>
            <div className="navbar_box">
                {/* <div className="logo"><img src={logo}alt="logo" /></div> */ }
                <div className="hamBurger"  onClick={handleHamburger}>
                    <Menu fontSize='large' style={{color:"white"}}   />
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
                    {!user.currentUser && <Link to='/login'>  <button className="select_logs">Login</button></Link>}
                    {!user.currentUser && <Link to="/Register"> <button className="select_logs">SignUp</button></Link>}
                        </div>
                <Link to='/cart'><button className="cart_button" ><Badge badgeContent={quantity} color="secondary"><ShoppingCartOutlined/></Badge></button></Link>
                {user.currentUser?.isAdmin && <Link to='/Admin'><button className="person_button" ><Person/></button></Link>}
                </div>
            </div>
           
        </div>
    )
}
export default Navbar