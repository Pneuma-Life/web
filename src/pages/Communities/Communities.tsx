import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Quote from '../../assets/icons/quote.png';
import Group1 from '../../assets/images/group1.png';
import Group2 from '../../assets/images/group2.png';
import Group3 from '../../assets/images/group3.png';
import EventRegistrationForm from "../../components/Event/EventRegistrationForm";
import './communities.scss'


const Communities = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <CommunitiesComponent />
        <Footer />
    </div>
  )
}

const Header = () => {
    return (
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__title">Connecting People.<br />
                        Facilitating Growth.</p>
                </div>
            </div>
        </div>
    )
}

const CommunitiesComponent = () => {
    const [showRegForm, setShowRegForm] = useState(false);
    const toggleShowRegForm = ()=>setShowRegForm(!showRegForm);
    return(
        <div className="community__cards">

           {/* <div className="community__card-wrapper"> 
                <div className="community__card">
                    <div className="community__card-date">
                        Love Circle
                    </div>
                    <p className="community__card-header">Love Circle Community</p>
                    <p className="community__card-text">We believe life is better surrounded by people who encourage,
                         support, and challenge you to grow in your endeavours</p>

                    <div className="community__card-groups"> 
                        <div className="community__card-group">Devotion</div>
                        <div className="community__card-group">Spirituality</div>
                        <div className="community__card-group">Growth</div>
                    </div>
                </div>

                <div className="community__card-quote">
                    <img className="community__card-quote-img" src={Quote} alt="quote_icon"/>
                    <p className="community__card-quote-text">Bond with brethren and strengthen your faith</p>
                </div>

                <div className="community__card-join">
                    <div className="community__card-join-group"> 
                        <img src={Group1} alt="community"/>
                        <img src={Group3} alt="community"/>
                        <img src={Group2} alt="community"/>
                    </div>
                    <p className="community__card-join-text">Dedicated community to help you grow</p>
                    <button className="btn community__card-join-btn" onClick={toggleShowRegForm}>Join Community</button>
                </div>
            </div> */}

            <div className="community__card-wrapper"> 
                <div className="community__card">
                    <div className="community__card-date">
                        Entreprenuership
                    </div>
                    <p className="community__card-header">" The Lord increase you a thousand times and bless you as he has promised! (Deut 1 vs 11)”</p>
                    <p className="community__card-text">Are you building a company? Or are you intent on starting one? With a group of like-minded christians, you can learn the art of business building.</p>

                    <div className="community__card-groups"> 
                        <div className="community__card-group">Small businesses</div>
                        <div className="community__card-group">Innovation</div>
                        <div className="community__card-group">Start-ups</div>
                        <div className="community__card-group">Scaleable business</div>
                    </div>
                </div>

                <div className="community__card-quote">
                    <img className="community__card-quote-img" src={Quote} alt="quote_icon"/>
                    <p className="community__card-quote-text">Learn to grow and Scale your ideas. </p>
                </div>

                <div className="community__card-join">
                    <div className="community__card-join-group"> 
                        <img src={Group1} alt="community"/>
                        <img src={Group3} alt="community"/>
                        <img src={Group2} alt="community"/>
                    </div>
                    <p className="community__card-join-text">We have a dedicated community to help you grow</p>
                    <button className="btn community__card-join-btn" onClick={toggleShowRegForm}>Join Community</button>
                </div>
            </div>

            <div className="community__card-wrapper"> 
                <div className="community__card">
                    <div className="community__card-date">
                        Creatives
                    </div>
                    <p className="community__card-header">Learning in-demand industry skills and positioning yourself for opportunities in the tech space </p>
                    <p className="community__card-text">We believe life is better surrounded by people who encourage, support, and challenge you to grow in your endeavours</p>

                    <div className="community__card-groups"> 
                        <div className="community__card-group">Career development</div>
                        <div className="community__card-group">Project managment</div>
                        <div className="community__card-group">Networking</div>
                        <div className="community__card-group">Industry discussion</div>
                    </div>
                </div>
                 
                <div className="community__card-quote">
                    <img className="community__card-quote-img" src={Quote} alt="quote_icon"/>
                    <p className="community__card-quote-text">Learn how to build a high rewarding career in tech</p>
                </div>

                <div className="community__card-join">
                    <div className="community__card-join-group"> 
                        <img src={Group1} alt="community"/>
                        <img src={Group3} alt="community"/>
                        <img src={Group2} alt="community"/>
                    </div>
                    <p className="community__card-join-text">Dedicated community to help you grow</p>
                    <button className="btn community__card-join-btn" onClick={toggleShowRegForm}>Join Community</button>
                </div>
            </div>
            <EventRegistrationForm showModal={showRegForm} onClose={toggleShowRegForm} purpose={'communities'} />
        </div>
    )
}

export default Communities
