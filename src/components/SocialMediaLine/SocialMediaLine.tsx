import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import './SocialMediaLine.scss';

const SocialMediaLine = () => {
    return (
        <div className="smcomponent">
            <div className="sm">
                <div className="sm__text">
                    Follow us on our social media platforms
                </div>
                <ul className="sm__links">
                    <li className="sm__links--item">
                        <a href="https://web.facebook.com/pneumalife.cc/?_rdc=1&_rdr"  target="_blank" rel="noreferrer" className="sm__links--item-link">
                            <FacebookIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Faithbreed
                        </a>
                    </li>
                    <li className="sm__links--item">
                        <a href="https://twitter.com/pneumalife_cc"target="_blank" rel="noreferrer" className="sm__links--item-link">
                            <TwitterIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Pneumalife_cc
                        </a>
                    </li>
                    <li className="sm__links--item">
                        <a href="https://www.instagram.com/pneumalife_cc/" target="_blank" rel="noreferrer" className="sm__links--item-link">
                            <InstagramIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            :pneumalife_cc
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SocialMediaLine;
