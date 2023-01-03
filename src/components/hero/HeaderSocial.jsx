import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {FiDribbble} from "react-icons/fi"
import "./Hero.css";
const HeaderSocial = () => {
    return(
        <div className="header__social">
            <a href="http://linkedin.com"><BsLinkedin/></a>
            <a href="http://github.com"><AiFillGithub/></a>
            <a href="http://dribble.com"><FiDribbble/></a>
        </div>
    )
} 
export default HeaderSocial