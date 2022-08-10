import React from 'react';
import Footer from '../../components/Footer/Footer';
import Mission from '../../assets/images/mission.png';
import Pastor from '../../assets/images/pst.png';
import facebook from '../../assets/icons/follow_facebook.png';
import instagram from '../../assets/icons/follow_insta.png';
import './aboutus.scss';
import SocialMediaLine from "../../components/SocialMediaLine/SocialMediaLine";

const AboutUs = () => {
  return (
    <div className="AboutUs">
        <AboutUsHeader />
        <AboutUsMission />
        <Footer />
    </div>
  )
}

export default AboutUs

const AboutUsHeader = () => {
    return(
        <div className="AboutUs__header">
            <div className="AboutUs__header--bg">
                <div className="AboutUs__header-container">
                <p className="AboutUs__text">About</p>
                <div className="AboutUs__text-header">
                    <div className="AboutUs__underline"></div>
                    Pneuma Life City Church

                </div>
            </div>
            </div>
        </div>
    )
}

const AboutUsMission = () => {
   return(
    <>
    <div className="AboutUs__mission">
        <div className="AboutUs__mission--wrap">
            <div className="AboutUs__mission--wraptt">
                <p className="AboutUs__mission--header">Our Missions</p>
                <p className="AboutUs__mission--text">Pneuma life exist to build a people who are Christ centered and Spirit driven, taught to know God for themselves. Influencing individuals, cities and nations with the light of the glorious gospel as ambassadors of the kingdom.</p>
            </div>
            <div className="AboutUs__mission--wraptt"> 
                <p className="AboutUs__mission--header">Our Vision</p>
                <p className="AboutUs__mission--text">We preach and teach the undiluted word of God, with focus on Christ who has restored hope, faith and love to the lost</p>
            </div>
        </div>
        <div className="AboutUs__mission--image">
            <img src={Mission} alt="our mission"/>
        </div>
    </div>
        <SocialMediaLine />
    <MeetOurPastor />
</>
   )
}

const MeetOurPastor = () => {
    return(
        <div className="pastor">
            <div className="pastor__image">
                <img src={Pastor} alt="Pastor Dafe Richard Iviahwo" className="pastor__image--img"/>
            </div>
            <div className="pastor__text">
                <div className="pastor__text--head">
                   Meet Our Pastor
                </div>
                <div className="pastor__text--text">
                    Pastor Dafe Richard Iviahwo is an insightful teacher of God’s word,
                    consistently making the supernatural common, this has been proven by shared
                    testimonies of transformed lives. He is the president of Faithbreed Global
                    Ministery and currently Pastors Pneuma Life City Church. His ministry has been source of inspiration to many and he is still inspiring more.
                </div>
                <div className="AboutUs__meet--social">
                    <p className="AboutUs__meet--social--text">Follow on social media</p>
                    <div className="AboutUs__meet--social--wrap">
                        <div className="group">
                            <a href="https://www.facebook.com/daferichard" target="_blank" rel="noreferrer" className="AboutUs__meet--social--link">
                            <div className="group-img"><img src={facebook} alt="facebook icon"/></div>
                            <div>@Daferichard</div>
                            </a>
                        </div>
                        <div className="group">
                        <a href="https://www.instagram.com/daferichards" target="_blank" rel="noreferrer" className="AboutUs__meet--social--link">
                            <div className="group-img"><img src={instagram} alt="instagram icon"/></div>
                            <div>@Daferichards</div>
                            </a>
                        </div>
                </div>
            </div>

            </div>
    </div>
    )
}


