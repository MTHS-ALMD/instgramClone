import "./style.css"
import {AiOutlineSearch} from "react-icons/ai";
import {RiMessengerLine} from "react-icons/ri";
import {BsPlusSquare} from "react-icons/bs";
import {MdOutlineExplore, MdHomeFilled} from "react-icons/md";
import {FiHeart} from "react-icons/fi";
import {FaRegUserCircle} from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Header(){
    return(
        <header className="header">
            <div className="container">
                <img className="logo" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" />
                
                <div className="search">
                <IconContext.Provider value={{color: '8e8e8e'}}>
                    <AiOutlineSearch/>
                </IconContext.Provider>
                    <input placeholder="Pesquisar"/>
                </div>
                <div className="header-icons">
                    <IconContext.Provider value={{size: '26px'}}>
                        <div>
                            <MdHomeFilled/>
                        </div>
                        <div>
                            <RiMessengerLine/>
                        </div>
                        <div>
                            <MdOutlineExplore/>
                        </div>
                        <div>
                            <FiHeart/>
                        </div>
                        <div>
                            <FaRegUserCircle/> 
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </header>
    )
}