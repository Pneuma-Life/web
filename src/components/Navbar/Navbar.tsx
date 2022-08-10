import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../Logo/Logo';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './navbar.scss'

enum activePageEnum {
  home = '/',
  aboutUs = '/aboutus',
  live = '/live',
  // events = '/events',
  store = '/store',
  //blog = '/blog',
  communities = '/communities',
  contactus = '/contactus',
  give = '/give'
}

const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const [currentPagePath, setCurrentPagePath] = useState('')
  const [showNavBar, setShowNavBar] = useState(false);
  const toggleShowNavBar = () => setShowNavBar(!showNavBar);

  useEffect(() => {
    setCurrentPagePath(location.pathname);
  }, [location.pathname]);


  const goTo = (link : string) => {
    if(showNavBar) toggleShowNavBar();
    navigate(link);
  }

  return (
    <div className="nav">
      <div className="nav__logo">
        <span onClick={()=>goTo('/')}>
          <Logo />
        </span>

      </div>
      <ul
        className={
          "nav__link " + (showNavBar ? "nav__link-show" : "nav__link-hide")
        }
      >
        <div className="nav__link--item nav__link--item--bg-overall" onClick={toggleShowNavBar}></div>
        <li
            className={"nav__link--item" +
            (currentPagePath===activePageEnum.home ? " isActive": "")}
        >
          <span onClick={()=>goTo('/')}>Home</span>
        </li>
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.aboutUs) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/aboutus')}>About Us</span>
        </li>
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.live) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/live')}>Live</span>
        </li>
        {/* <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.events) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/events')}>Events</span>
        </li> */}
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.store) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/store')}>Store</span>
        </li>
        {/* <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.blog) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/blog')}>Blog</span>
        </li> */}
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.communities) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/communities')}>Communities</span>
        </li>
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.contactus) ? " isActive": "")}
        >
          <span onClick={()=>goTo('/contactus')}>Contact Us</span>
        </li>
        <li
            className={"nav__link--item" +
            (currentPagePath.startsWith(activePageEnum.aboutUs) ? " isActive": "")}
        >
          <Link to="/give">
          <span className="btn btn-secondary nav__button--btn">
            Give
          </span>
          </Link>
        </li>
      </ul>

      <div className="nav__button">

        <div className="nav__button--bt">
          <span className="btn btn-secondary nav__button--btn" onClick={()=>goTo('/give')}>
          Give
          </span>
        </div>
        <div
            // className={"nav__hamburger " + showNavBar ? "nav-floating-ham": ""}
            className="nav__hamburger"
            onClick={toggleShowNavBar}
        >
          {!showNavBar ?
            <MenuIcon fontSize={"large"} /> :
            <CloseIcon fontSize={"large"} />
          }
        </div>
      </div>

    </div>
  );
};

export default Navbar
