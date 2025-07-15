import { SlArrowDown } from "react-icons/sl"
import "./index.css"

const Header=()=>{
    console.log("header")
    return <nav className="header">
        <ul className="head-ul">
            <li >About</li>
            <li>
                service<SlArrowDown/>
            </li>
        </ul>
    </nav>
}

export default Header