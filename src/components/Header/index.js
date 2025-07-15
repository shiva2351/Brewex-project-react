import { SlArrowDown } from "react-icons/sl"
import "./index.css"

const Header=()=>{
    console.log("header")
    return <nav className="header">
        <ul className="head-ul"><li className="logo-card">About</li>
        <li className="head-user">
        service</li> <SlArrowDown/></ul>
    </nav>
}

export default Header