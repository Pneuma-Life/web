import React, {useState, useEffect } from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import TextSnippetOutlinedIcon from '@mui/icons-material/TextSnippetOutlined';
import WelcomeImage from '../../assets/images/welcome_img.png';
import Dave from '../../assets/images/pst.png';
import EstablishedSermon from '../../assets/images/established_sermon.png';
import Welcome from '../../assets/images/WelcomeToChurch.jpg';
import PlantedSermon from '../../assets/images/planted_sermon.png';
import Community from '../../assets/images/community.png';
import Teachings from '../../assets/images/teachings.png';
import axios from '../../api/index';
import {
Carousel
} from 'react-responsive-carousel';
import Footer from '../../components/Footer/Footer';



// import 'node_'
import './Homepage.scss'
import {Link} from "react-router-dom";
import PraiseReportForm from "../../components/Homepage/PraiseReportForm";
import EventRegistrationForm from "../../components/Event/EventRegistrationForm";

const Homepage = () => {
    const [showPraiseReportModal, setShowPraiseReportModal] = useState(false);
    const [showEventRegistrationForm, setShowEventRegistrationFrom] = useState(false);

    const toggleShowPraiseReportModal = ()=>setShowPraiseReportModal(!showPraiseReportModal);
    const toggleShowEventRegistrationForm = ()=>setShowEventRegistrationFrom(!showEventRegistrationForm);

    const [stores, setStores] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('store').then(res => {
            console.log(res.data);
            console.log(res.data.query)        
            setStores(res.data.query);
            // setId(res.data.query[0]._id);
            setLoading(false);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className="homepage homepage__container">
            <div className="hero">
                <div className="hero__bg">
                    <div className="hero__main">
                        <div className="hero__main--text">
                            <div className="hero__main--text-welcome">
                                Welcome to
                            </div>
                            <div className="hero__main--text-main">
                               <span>Pneuma Life </span><br />
                                City Church
                            </div>
                            <div className="hero__main--btn">
                                <div>
                                <Link to="/store">
                                    <button className="btn icon-btn btn--primary">
                                        <PlayArrowIcon />
                                        <span>Latest Sermon</span>
                                    </button>
                                </Link>
                                </div>
                                {/* <div>
                                    <button className="btn icon-btn text-btn btn-second">
                                        <DownloadIcon />
                                        <span>Downlaod Photizo</span>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                        <div className="hero__activities">
                            <div className="hero__activities--head">
                                Service Days
                            </div>
                            <div className="hero__activities--text">
                                <div className="hero__activities--text-item">
                                    Sunday - 9am
                                </div>
                                <div className="hero__activities--text-item">
                                    Wednesday - 5pm
                                </div>
                                <div className="hero__activities--text-item">
                                    Saturday (Love circle) - 5pm
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="welcome">
                <div className="welcome__text">
                    <div className="welcome__text--head">
                       <span>Welcome to</span> Church
                    </div>
                    <div className="welcome__text--text">
                        Pneuma life exist to build a people who are Christ centered and Spirit driven, taught to know God for themselves, Influencing individuals, cities and nations with the light of the glorious gospel as ambassadors of the kingdom
                    </div>
                    <div className="welcome__text--btn">
                        <button className="btn icon-btn text-btn">
                            <span>Learn More</span>
                            <ArrowRightAltIcon />
                        </button>
                    </div>
                </div>
                <div className="welcome__image">
                    <img src={Welcome} alt="Members in Pneuma Life City Church" className="welcome__image--img" />
                </div>

            </div>

            <div className="pastor">
                <div className="pastor__image">
                    <img src={Dave} alt="Pastor Dafe Richard Iviahwo" className="pastor__image--img" />
                </div>
                <div className="pastor__text">
                    <div className="pastor__text--head">
                        <span>My name is</span><br />
                        Dafe Richard Iviahwo
                    </div>
                    <div className="pastor__text--text">
                        I serve as the senior Pastor of Pneuma Life City Church.
                        Pneuma Life City Church exists to instill kingdom culture in
                        you , with our Christ-Centred messages and spirit-Driven meetings,
                        so you can fulfill God’s plan, which is to influence individuals, cities
                        and nations with the Light of the Glorious Gospel
                    </div>
                </div>

            </div>
            <div className="sermon">
                <div className="sermon__head">
                    <span>Latest Sermons</span>
                </div>
                <div className="sermon__text">
                    Make your device an asset by listening to an inspired message
                </div>


                <div className="sermon__cards">
                    { stores.map((store) =>(
                    <div 
                    className="sermon__card"
                    key={store._id}
                    >
                        <div className="sermon__card--image">
                            <img src={store.image} alt="" className="sermon__card--image-img" />
                        </div>
                        <div className="sermon__card--text">
                            <div className="sermon__card--text-title">
                                {store.title}
                            </div>
                            <div className="sermon__card--text-author">
                                {store.author}
                            </div>
                        </div>
                        <div className="sermon__card--btn">
                            <Link to={`/store/${store._id}`} className="btn icon-btn">
                                <VideocamOutlinedIcon fontSize="medium" />
                            </Link>
                            <Link to={`/store/${store._id}`} className="btn icon-btn">
                                <HeadsetOutlinedIcon fontSize="medium" />
                            </Link>
                            <Link to={`/store/${store._id}`} className="btn icon-btn">
                                <TextSnippetOutlinedIcon fontSize="medium" />
                            </Link>
                        </div>
                    </div>
                ))}

                    {/* <div className="sermon__card">
                        <div className="sermon__card--image">
                            <img src={PlantedSermon} alt="" className="sermon__card--image-img" />
                        </div>
                        <div className="sermon__card--text">
                            <div className="sermon__card--text-title">
                                Planted ( PT I )
                            </div>
                            <div className="sermon__card--text-author">
                                Pastor Dafe Richard
                            </div>
                        </div>
                        <div className="sermon__card--btn">
                            <button className="btn icon-btn">
                                <VideocamOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="btn icon-btn">
                                <HeadsetOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="btn icon-btn">
                                <TextSnippetOutlinedIcon fontSize="medium" />
                            </button>
                        </div>
                    </div> */}
                    {/* <div className="sermon__card">
                        <div className="sermon__card--image">
                            <img src={EstablishedSermon} alt="" className="sermon__card--image-img" />
                        </div>
                        <div className="sermon__card--text">
                            <div className="sermon__card--text-title">
                                Established in Mercy
                            </div>
                            <div className="sermon__card--text-author">
                                Pastor Dafe Richard
                            </div>
                        </div>
                        <div className="sermon__card--btn">
                            <button className="btn icon-btn">
                                <VideocamOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="btn icon-btn">
                                <HeadsetOutlinedIcon fontSize="medium" />
                            </button>
                            <button className="btn icon-btn">
                                <TextSnippetOutlinedIcon fontSize="medium" />
                            </button>
                        </div>
                    </div> */}
                </div>
                <div className="sermon__view-more">
                    <Link to="/store" className="btn icon-btn">
                        <span>View More Sermons</span>
                        <ArrowForwardIcon />
                    </Link>
                </div>
            </div>
            <div className="values">
                <div className="values__head">
                   <span> Our Core Values</span>
                </div>
                <div className="values__text">
                    In Christ we boast
                </div>
                <div className="values__cards">
                    <div className="values__card">
                        <div className="values__card--image">
                            <img src={Teachings} alt="" className="values__card--image-img" />
                        </div>
                        <div className="values__card--text">
                            We deepen the faith-walk of nominal
                            Christians by our teachings, leading many  to repentance from sin through the goodness of God
                        </div>
                    </div>
                    <div className="values__card">
                        <div className="values__card--image">
                            <img src={Community} alt="" className="value__card--image-img" />
                        </div>
                        <div className="values__card--text">
                            We believe in a healthy community of faith and God’s presence that encourages growth  and an atmosphere that strengthens our family
                        </div>
                    </div>
                    <div className="values__card values__card--alt">
                        <div className="values__card--text">
                            We are God’s move on earth. We encourage you to be part of this move. Nothing is more honorable than partnering with your maker to fulfilling His Grand Plan for humanity, which is uninterrupted fellowship
                        </div>
                        <Link to="/give" className="btn">
                            Become a Partner Today
                        </Link>
                    </div>
                </div>
            </div>

            {/* <div className="praise">
                <div className="praise__head">
                    <span>Praise Report</span>
                </div>
                <Carousel
                    showArrows={true}
                    autoPlay
                    infiniteLoop
                    className="presentation-mode"
                >
                    <div className="praise__item">
                        <div className="praise__text">
                            <div className="praise__text--head">
                                ( Divine Healing )
                            </div>
                            <div className="praise__text--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                            </div>
                        </div>
                        <div className="praise__demarcator"></div>
                        <div className="praise__author">
                            John Doe
                        </div>
                    </div>
                    <div className="praise__item">
                        <div className="praise__text">
                            <div className="praise__text--head">
                                ( Divine Healing )
                            </div>
                            <div className="praise__text--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                            </div>
                        </div>
                        <div className="praise__demarcator"></div>
                        <div className="praise__author">
                            John Doe
                        </div>
                    </div>
                    <div className="praise__item">
                        <div className="praise__text">
                            <div className="praise__text--head">
                                ( Divine Healing )
                            </div>
                            <div className="praise__text--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                            </div>
                        </div>
                        <div className="praise__demarcator"></div>
                        <div className="praise__author">
                            John Doe
                        </div>
                    </div>
                    <div className="praise__item">
                        <div className="praise__text">
                            <div className="praise__text--head">
                                ( Divine Healing )
                            </div>
                            <div className="praise__text--text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                            </div>
                        </div>
                        <div className="praise__demarcator"></div>
                        <div className="praise__author">
                            John Doe
                        </div>
                    </div>
                </Carousel>
                <div className="praise__share">
                    <PraiseReportForm showModal={showPraiseReportModal} onClose={toggleShowPraiseReportModal} purpose={'events'} />
                    <button className="praise__share--btn" onClick={toggleShowPraiseReportModal}>
                        Share Your praise Report
                    </button>
                </div>
            </div>  */}

            {/* <div className="devotional">
                <div className="devotional__head">
                    Download Daily Devotional
                </div>
                <div className="devotional__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                </div>
                <div className="devotional__button">
                    <button className="btn btn-secondary icon-btn">
                        <DownloadIcon />
                        <span>Download Photizo</span>
                    </button>

                </div>
            </div>  */}

           {/* <div className="upcoming">
                <div className="upcoming__head">
                    <span>Upcoming Events</span>
                </div>
                <Carousel
                    showArrows={true}
                    autoPlay
                    infiniteLoop
                    className="presentation-mode"
                >
                    <div className="event-container">
                        <div className="event">
                            <div className="event__title">
                                Word Power Conference
                            </div>
                            <div className="event__description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            </div>
                            <div className="event__countdown">
                                <div className="event__countdown--group">
                                    <div className="event__countdown--group-number">
                                        00
                                    </div>
                                    <div className="event__countdown--group-text">
                                        Days
                                    </div>
                                </div>
                                <div className="event__countdown--group">
                                    <div className="event__countdown--group-number">
                                        00
                                    </div>
                                    <div className="event__countdown--group-text">
                                        Hours
                                    </div>
                                </div>
                                <div className="event__countdown--group">
                                    <div className="event__countdown--group-number">
                                        00
                                    </div>
                                    <div className="event__countdown--group-text">
                                        Minutes
                                    </div>
                                </div>
                                <div className="event__countdown--group">
                                    <div className="event__countdown--group-number">
                                        00
                                    </div>
                                    <div className="event__countdown--group-text">
                                        Seconds
                                    </div>
                                </div>
                            </div>
                            <div className="event__button">
                                <button className="btn">Add to Calendar</button>
                                <button className="btn btn-white" onClick={toggleShowEventRegistrationForm}>Register</button>
                            </div>
                            <EventRegistrationForm showModal={showEventRegistrationForm} onClose={toggleShowEventRegistrationForm} purpose={'events'}/>
                        </div>
                    </div>

                    <div className="event">
                        <div className="event__title">
                            Word Power Conference
                        </div>
                        <div className="event__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                        </div>
                        <div className="event__countdown">
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Days
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Hours
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Minutes
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Seconds
                                </div>
                            </div>
                        </div>
                        <div className="event__button">
                            <button className="btn">Add to Calendar</button>
                            <button className="btn btn-white" onClick={toggleShowEventRegistrationForm}>Register</button>
                        </div>
                        <EventRegistrationForm showModal={showEventRegistrationForm} onClose={toggleShowEventRegistrationForm} purpose={'events'} />
                    </div>
                    <div className="event">
                        <div className="event__title">
                            Word Power Conference
                        </div>
                        <div className="event__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                        </div>
                        <div className="event__countdown">
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Days
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Hours
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Minutes
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Seconds
                                </div>
                            </div>
                        </div>
                        <div className="event__button">
                            <button className="btn">Add to Calendar</button>
                            <button className="btn btn-white" onClick={toggleShowEventRegistrationForm}>Register</button>
                        </div>
                        <EventRegistrationForm showModal={showEventRegistrationForm} onClose={toggleShowEventRegistrationForm} purpose={'events'} />
                    </div>
                    <div className="event">
                        <div className="event__title">
                            Word Power Conference
                        </div>
                        <div className="event__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                        </div>
                        <div className="event__countdown">
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Days
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Hours
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Minutes
                                </div>
                            </div>
                            <div className="event__countdown--group">
                                <div className="event__countdown--group-number">
                                    00
                                </div>
                                <div className="event__countdown--group-text">
                                    Seconds
                                </div>
                            </div>
                        </div>
                        <div className="event__button">
                            <button className="btn">Add to Calendar</button>
                            <button className="btn btn-white" onClick={toggleShowEventRegistrationForm}>Register</button>
                        </div>
                        <EventRegistrationForm showModal={showEventRegistrationForm} onClose={toggleShowEventRegistrationForm} purpose={'events'} />
                    </div>
                </Carousel>
            </div>  */}
            {/* <div className="sermon">
            <div className="sermon__head">
                Latest Audio Messages
            </div>
            <div className="sermon__cards">
                <div className="sermon__card">
                    <div className="sermon__card--image">
                        <img src={PlantedSermon} alt=""  className="sermon__card--image-img" />
                    </div>
                    <div className="sermon__card--text">
                        <div className="sermon__card--text-title">
                            Planted ( PT II )
                        </div>
                        <div className="sermon__card--text-author">
                            Pastor Dafe Richard
                        </div>
                    </div>
                </div>
                <div className="sermon__card">
                    <div className="sermon__card--image">
                        <img src={PlantedSermon} alt=""  className="sermon__card--image-img" />
                    </div>
                    <div className="sermon__card--text">
                        <div className="sermon__card--text-title">
                            Planted ( PT I )
                        </div>
                        <div className="sermon__card--text-author">
                            Pastor Dafe Richard
                        </div>
                    </div>
                </div>
                <div className="sermon__card">
                    <div className="sermon__card--image">
                        <img src={EstablishedSermon} alt=""  className="sermon__card--image-img" />
                    </div>
                    <div className="sermon__card--text">
                        <div className="sermon__card--text-title">
                            Established in Mercy
                        </div>
                        <div className="sermon__card--text-author">
                            Pastor Dafe Richard
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
            <Footer />
        </div>
    )
}

export default Homepage
