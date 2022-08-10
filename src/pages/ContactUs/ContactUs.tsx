import React, {useState} from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Footer from  '../../components/Footer/Footer';
import Alert from '@mui/material/Alert';
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import axios from '../../api/index';
import './contact.scss';

enum ContactReasonEnum {
    toPray = "toPray",
    shareMyStory = "shareMyStory",
    newToPneumalife = "newToPneumaLife",
    justReceivedChrist = "justReceivedChrist",
    haveQuestions = "haveQuestions",
    enquiry = "enquiry",
}



const ContactUs = () => {
  return (
    <div className="contactPage">
        <ContactHeader />
        <ContactUsContent />
        <MapComponent />
        <Footer />
    </div>
  )
}

const ContactHeader = () => {
    return (
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__title">Contact Us</p>
                </div>
            </div>
        </div>
    )
}

const ContactUsContent = () => {
    const [requestCredential, setRequestCredential] = React.useState({ fullName: '', email: '', phone: '', message: ''})
    const [reasonForContact, setReasonForContact] = useState(ContactReasonEnum.enquiry);

    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true)
        //e.preventsDefault();
        try {
            const response = await axios.post(
                'contact',
                JSON.stringify({ 
                    fullName: requestCredential.fullName,
                    email: requestCredential.email,
                    phone: requestCredential.phone,
                    message: requestCredential.message    
                }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
            //setNewsletterCredential({email: ''})
            setRequestCredential({
                fullName: '',
                 email: '', 
                 phone: '', 
                 message: ''
            });
            setLoading(false)
            setSuccessMsg('Success ')
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false)
              } else {
                setErrorMsg(" An error occurred pls try again");
                setLoading(false);
              }
          
        }
    }

    return(
        <div className="contact-main">

            <div className="contact-top">
                <div className="contact__text">
                    <div className="contact__text--head">
                        Contact
                    </div>
                    <ul className="contact__text--body">
                        <li className="contact__text--body-item">
                            <a className="contact__text--body-link" href="mailto:info@faithbreed.org">info@faithbreed.org</a>
                        </li>
                        <li className="contact__text--body-item">
                            <a className="contact__text--body-link" href="tel:+2347061658590">(+234) 706-1658-590</a>
                        </li>
                    </ul>
                </div>
                <div className="contact__text">
                    <div className="contact__text--head">
                        Address
                    </div>
                    <ul className="contact__text--body">
                        <li className="contact__text--body-item">
                            Faithbreed Auditiorium, Adjacent Anchorite
                            School, FUTA Junction, Ondo state, Nigeria
                        </li>
                    </ul>
                </div>
                <div className="contact__text">
                    <div className="contact__text--head">
                        Opening Hours
                    </div>
                    <ul className="contact__text--body">
                        <li className="contact__text--body-item">
                            Mon-Sat: 9 AM to 4 PM
                        </li>
                        <li className="contact__text--body-item">
                            Sunday: Service
                        </li>
                    </ul>
                </div>
            </div>
            <div className="question">
                <div className="question__head">
                    What can we help you with today?
                </div>
                <div className="select__group">
                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.toPray ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.toPray) }}
                    >
                        I need prayer.
                    </div>
                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.shareMyStory ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.shareMyStory) }}
                    >
                        I would like to share my story
                    </div>

                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.newToPneumalife ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.newToPneumalife) }}
                    >
                        New to PneumaLife
                    </div>

                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.justReceivedChrist ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.justReceivedChrist) }}
                    >
                        Received the life of Christ for the first time.
                    </div>

                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.haveQuestions ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.haveQuestions) }}
                    >
                        I have a question
                    </div>
                    <div
                        className={"select__item " + (reasonForContact === ContactReasonEnum.enquiry ? "isSelected" : "")}
                        onClick={() => { setReasonForContact(ContactReasonEnum.enquiry) }}
                    >
                        General enquiry
                    </div>
                </div>
            </div >

            <div className="contact__form">
                {/* <span style={{ color: '#EC100C', fontSize: '14px' }}>{errorMsg}</span>
                    <span style={{ color: '#25be3b', fontSize: '14px' }}>{successMsg} </span> */}
                    { errorMsg ? 
                            <Alert severity="error" variant="outlined">
                            {/* <AlertTitle>Error</AlertTitle> */}
                                {errorMsg}
                            </Alert> 
                            : null }
                        { successMsg ?
                            <Alert severity="success" variant="outlined" >
                            {/* <AlertTitle>Success</AlertTitle> */}
                                {successMsg}
                            </Alert>
                        : null}
                <div className="contact__form-wrap">
                    <div className="form__item">
                            <TextField
                                value={requestCredential.fullName}
                                id="fullname"
                                label="Full name"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px', fontFamily: 'Gorditas400',}}
                                variant="filled"
                                onChange={(e)=>setRequestCredential({...requestCredential, fullName: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={requestCredential.email}
                                id="email"
                                label="Email address"
                                type="email"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px', fontFamily: 'Gorditas400', }}
                                variant="filled"
                                onChange={(e)=>setRequestCredential({...requestCredential, email: e.target.value})}
                            />
                        </div>
                        <div className="form__item" style={{marginRight: '0px'}}>
                            <TextField
                                value={requestCredential.phone}
                                id="phoneNumber"
                                label="Phone number"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px', fontFamily: 'Gorditas400', }}
                                variant="filled"
                                onChange={(e)=>setRequestCredential({...requestCredential, phone: e.target.value})}
                            />
                        </div>
                    </div>
                        <div className="form__item">
                            <TextareaAutosize
                                value={requestCredential.message}
                                id="request"
                                placeholder="Type your message here..."
                                style={{ width: '100%', height: '300px', color: 'rgba(0,0,0,0.58)', border: 'none', backgroundColor: 'rgba(0, 0, 0, 0.05)', fontFamily: 'Gorditas400', borderRadius: '5px', padding: '25px'}}
                                minRows={10}
                                onChange={(e)=>setRequestCredential({...requestCredential, message: e.target.value})}
                            />
                        </div>

                        <div className="form__item">
                        <button 
                            onClick={handleSubmit}
                            disabled={loading}
                            className="btn icon-btn form__button">
                            <SendIcon />
                            <span>Send</span>
                            {loading && <LoadingSpinner /> }
                        </button>
                    </div>
            </div>
        </div>
    )
}

const MapComponent = () => {
    return (
        <div className="physical-map">
            <iframe
                id="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7915.142786377627!2d5.155667734887695!3d7.289507400000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10478fa65332e4fb%3A0x83f2c886fca544e6!2sFaithbreed%20Auditorium!5e0!3m2!1sen!2sng!4v1654239971469!5m2!1sen!2sng"
                style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}



export default ContactUs
