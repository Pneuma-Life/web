import React, {useState} from 'react'
import Footer from '../../components/Footer/Footer';
import EstablishedSermon from '../../assets/images/established_sermon.png';
import './events.scss';
import {Box, Dialog, Pagination, Typography} from "@mui/material";
import EventRegistrationForm from "../../components/Event/EventRegistrationForm";

const Events = () => {
  return (
    <div className="eventPage events">
        <Header />
        <EventCards />
        <div className="eventPage__pagination">
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
        <Footer />
    </div>
  )
}

const Header = () => {
    return(
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__title">Upcoming Events</p>
                    <p className="header__text">List of Upcoming Events and Programs</p>
                </div>
            </div>
        </div>
    )
}

const EventCards = () => {
    return(
        <div className="event__cards">
               <EventCard />
               <EventCard />
               <EventCard />
               <EventCard />
               <EventCard />
               <EventCard />

            </div>
    )
}

const EventCard = () => {
    const [showRegForm, setShowRegForm] = useState(false);
    const toggleShowRegForm = ()=>setShowRegForm(!showRegForm);

    return (
            <div className="event__card">
                <div className="event__card--side event__card--side-front">
                    <div className="sermon__card--image">
                        <img src={EstablishedSermon} alt=""  className="event__card--image-img" />
                    </div>
                    <div className="event__card--text">
                        <div className="event__card--btn">
                            02 June - 04 June
                        </div>
                        <div className="event__card--text-title">
                            Established in Mercy
                        </div>
                    </div>
                    <div className="event__card--btn-group">
                        <button className="btn ">Add To My Calender</button>
                        <button className="btn btn-secondary" onClick={toggleShowRegForm}>Register</button>
                    </div>
                </div>
                <div className="event__card--side event__card--side-back">
                    <div className="event__card--container">
                       <div className="event__card--text">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit ut aliquam,
                        purus sit amet luctus venenatis, lectus
                        magna fringilla urna, porttitor rhoncus
                        dolor purus non enim praesent elementum
                        facilisis leo, vel fringilla est ullamcorper
                        eget nulla facilisi etiam dignissim diam quis
                        enim lobortis scelerisque fermentum dui faucibus
                        in ornare quam viverra
                       </div>

                       <div className="event__card--btn-group">
                            <button className="btn ">Add To My Calender</button>
                            <button className="btn-secondary btn " onClick={toggleShowRegForm}>Register</button>
                        </div>
                    </div>
                </div>
                <EventRegistrationForm showModal={showRegForm} onClose={toggleShowRegForm} purpose={'events'} />
        </div>
    )
}



export default Events;
