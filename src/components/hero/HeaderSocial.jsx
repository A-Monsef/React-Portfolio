import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {FaXingSquare} from "react-icons/fa"
import "./Hero.css";
const HeaderSocial = () => {
    return(
        <div className="header__social">
            <a href="https://www.linkedin.com/in/monsef-a-3231a862"><BsLinkedin/></a>
            <a href="https://www.xing.com/profile/Monsef_Amzaouri/cv"><FaXingSquare /></a>
            <a href="https://github.com/A-Monsef?tab=repositories"><AiFillGithub/></a>
        </div>
    )
} 
export default HeaderSocial