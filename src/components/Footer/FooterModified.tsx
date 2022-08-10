import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import TextField from '@mui/material/TextField';
import './footerModified.scss'

const FooterModified = () => {
    const [newsletterCredential, setNewsletterCredential] = React.useState({ email: '', name: '' })
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
                        <a href="/events" className="">Events</a>
                    </div>
                    <div className="footer__link--item">
                        <a href="/gallery" className="">Gallery</a>
                    </div>
                    <div className="footer__link--item">
                        <a href="/about" className="">About</a>
                    </div>
                    <div className="footer__link--item">
                        <a href="/sermons" className="">Sermons</a>
                    </div>
                </div>
                <div className="footer__links--group">
                    <div className="footer__link--head footer__group--head">
                        Socials
                    </div>
                    <div className="footer__link--item">
                        <a href="/events" target="_blank" rel="noreferrer" className="">
                            <FacebookIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Facebook
                        </a>
                    </div>
                    <div className="footer__link--item">
                        <a href="/events" target="_blank" rel="noreferrer" className="">
                            <TwitterIcon style={{ color: '#EC100C', marginRight: '7px' }} />
                            : Twitter
                        </a>
                    </div>
                    <div className="footer__link--item">
                        <a href="/events" target="_blank" rel="noreferrer" className="">
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
                            value={newsletterCredential.email}
                            id="email"
                            label="Email"
                            type="email"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)' }}
                            variant="standard"
                            onChange={(e)=>setNewsletterCredential({...newsletterCredential, email: e.target.value})}
                        />
                    </div>
                    <div className="form__item">
                        <TextField
                            value={newsletterCredential.email}
                            id="password"
                            label="Password"
                            type="password"
                            variant="standard"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)' }}
                            onChange={(e)=>setNewsletterCredential({...newsletterCredential, email: e.target.value})}
                        />
                    </div>
                    <div className="form__item">
                        <button className="btn icon-btn form__button">
                            <SendIcon />
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
            </div>
            {/* <div className="post-footer">
                <div className="post-footer__text">
                    Now thanks be unto God, which always causeth us to triumph in Christ, and maketh manifest the savour of his knowledge by us in in every place. [2Cor 2 vs 14 ]
                </div>
            </div>  */}
        </div>

    )
}
export default FooterModified
