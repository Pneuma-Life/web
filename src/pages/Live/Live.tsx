import Footer from '../../components/Footer/Footer';
import youtube from '../../assets/icons/youtube.png';
import youtubeWhite from '../../assets/icons/youtube_white.png';
import mixlr from '../../assets/icons/mixlr.png';
import mixlrWhite from '../../assets/icons/mixir_white.png';
import './live.scss';


const Live = () => {
    return (
        <div className="livePage live__container">
            <Header />
            <LiveContent />
            <Footer />
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__title">Live</p>
                </div>
            </div>

        </div>
    )
}

const LiveContent = () => {
    return (
        <div>
            <div className="streaming">
                <p className="streaming__text-header">STREAMING PLATFORMS</p>
                <p className="streaming__text">Select your preferred options</p>
            </div>
            <div className="streaming__wrapper">

                <div className="streaming__card">
                    <div className="streaming__card-image">
                        <img className="img-red"src={youtube} alt="youtube icon" />
                        <img className="img-white" src={youtubeWhite} alt="youtube icon" />
                    </div>
                    <div className="streaming__card-content">
                        <div className="streaming__card-text">
                            Youtube
                        </div>
                        {/* <div className="streaming__card-link">
                            <a href="https://www.youtube.com/channel/UC-2YjLUSjTyD3QGty076bKA" target="_blank" rel="noreferrer noopener">https://www.youtube.com/channel/UC-2YjLUSjTyD3QGty076bKA</a>
                        </div> */}
                        <a className="streaming__card-btn" href="https://www.youtube.com/channel/UC-2YjLUSjTyD3QGty076bKA" target="_blank" rel="noreferrer noopener"> Join Us</a>
                    </div>
                </div>

                <div className="streaming__card">
                    <div className="streaming__card-image">
                        <img className="img-red" src={mixlr} alt="mixir icon" />
                        <img className="img-white" src={mixlrWhite} alt="mixir icon" />
                    </div>
                    <div className="streaming__card-content">
                        <div className="streaming__card-text">
                            Mixir
                        </div>
                        {/* <div className="streaming__card-link">
                            <a href="https://mixlr.com/faithbreed-global" target="_blank" rel="noreferrer noopener">https://mixlr.com/faithbreed-global</a>
                        </div> */}
                        {/*<div className="">*/}
                        <a className="streaming__card-btn" href="https://mixlr.com/faithbreed-global" target="_blank" rel="noreferrer noopener"> Join Us</a>
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Live
