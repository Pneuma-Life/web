//import Logo from '../../assets/images/logo.png';
import LogoRed from '../../assets/images/logo_red.png'
import './BlogItem.scss'

const Navbar = () => {
    return (
        <div className="logo">
            <img src={LogoRed} alt="Pneumalife City Church Logo" className="logo--img" />
            <p className="logo-text">Pneumalife<br/> City Church</p>
        </div>
    );
};

export default Navbar
