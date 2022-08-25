import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import { LoadingButton } from '@mui/lab';
import Alert from '@mui/material/Alert';
import axios from '../../api/index'
import './footer.scss'

const Footer = () => {
    const [errormsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = React.useState('');
    const [loading, setLoading] = useState(false);


    const handleSubmit = async () => {
        const newsletterUrl = `newsletter`
        setLoading(true)
        setSuccessMsg('');
        setErrorMsg('');
        //e.preventsDefault();
        try {
            const response = await axios.post(
                newsletterUrl,
                JSON.stringify({ email }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
            setSuccess(true);
            //setNewsletterCredential({email: ''})
            setEmail('')
            setLoading(false)
            setSuccessMsg('Email successfully added to newsletter')
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false)
              } else {
                setErrorMsg(" Unable to add email to the newsletter");
                setLoading(false);
              }
          
        }
        
    }

    return (
        <div className="footer">
            <div className="footer__top"></div>
            <div className="pre-footer">
            <div className="footer__contact">
                <div className="footer__contact--head  footer__group--head">
                    Contact
                </div>
                <div className="footer__contact--address">
                    Faithbreed Auditiorium, Adjacent Anchorite School, FUTA Junction
                </div>
                <div className="footer__contact--link">
                    <a href="mailto:info@faithbreed.org" className="">info@faithbreed.org</a>
                </div>
                <div className="footer__contact--link">
                    <a href="tel:+2348064413229" className="">(+234)-806-4413-229</a>
                </div>
            </div>
            <div className="footer__links">
                <div className="footer__links--group">
                    <div className="footer__link--head  footer__group--head">
                        Quick Links
                    </div>
                    <div className="footer__link--item">
                        <Link to="/events" className="">Events</Link>
                    </div>
                    <div className="footer__link--item">
                        <a href="/gallery" className="">Gallery</a>
                    </div>
                    <div className="footer__link--item">
                        <Link to="/aboutus" className="">About</Link>
                    </div>
                    <div className="footer__link--item">
                        <Link to="/store">Sermons</Link>
                    </div>
                </div>
                <div className="footer__links--group">
                    <div className="footer__link--head footer__group--head">
                        Socials
                    </div>
                    <div className="footer__link--item">
                        <a href="https://web.facebook.com/pneumalife.cc/?_rdc=1&_rdr" target="_blank" rel="noreferrer" className="">
                            <FacebookIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Facebook
                        </a>
                    </div>
                    <div className="footer__link--item">
                        <a href="https://twitter.com/pneumalife_cc" target="_blank" rel="noreferrer" className="">
                            <TwitterIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Twitter
                        </a>
                    </div>
                    <div className="footer__link--item">
                        <a href="https://www.instagram.com/pneumalife_cc/" target="_blank" rel="noreferrer" className="">
                            <InstagramIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer__newsletter">
                <div className="footer__newsletter--head  footer__group--head">
                    Newsletter
                </div>
                <div className="form">
                    <div className="form__item">
                        <TextField
                            value={email}
                            id="email"
                            label="Email"
                            type="email"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)' }}
                            variant="standard"
                            onChange={(e : any)=>setEmail(e.target.value)}
                        />
                        { errormsg ? 
                            <Alert severity="error" variant="outlined">
                                {errormsg}
                            </Alert> 
                            : null }
                        { successMsg ?
                            <Alert severity="success" variant="outlined" >
                                {successMsg}
                            </Alert>
                        : null}
                    </div>
                    {/* <div className="form__item">
                        <TextField
                            value={newsletterCredential.email}
                            id="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)' }}
                            onChange={(e)=>setNewsletterCredential({...newsletterCredential, email: e.target.value})}
                        />
                    </div> */}
                    <div className="form__item">
                        <button 
                        disabled={loading}
                        className="btn icon-btn form__button"
                        onClick={handleSubmit}>
                            <SendIcon />
                            <span>Send</span>
                            {loading && <LoadingSpinner /> }
                        </button>
                    </div>
                </div>
            </div>
            </div>
            <div className="post-footer">
                <div className="post-footer__text">
                    Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in in every place. [2Cor 2 vs 14 ]
                </div>
            </div>
        </div>

    )
}
export default Footer
