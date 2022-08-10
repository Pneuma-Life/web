import { FormControlLabel, Radio, RadioGroup} from "@mui/material";
import BaseModal from "../Base/BaseModal";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import LoadingSpinner from '../Base/LoadingSpinner';
import Alert from '@mui/material/Alert';
import './EventRegistration.scss';
import axios from '../../api/index';


interface PropsI  {
    purpose: string;
    showModal: boolean;
    onClose:  () => void;
}

const EventRegistrationForm = ({ showModal, onClose, purpose } : PropsI ) => {
    // const [showModal, setShowModal] = useState(false)
    const [formData, setFormData] =  useState({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        dob: '',
    })
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState("");
    const [loading, setLoading] = useState(false)

    const registerForEvent = async (e: any)=>{
        e.preventDefault();
        setLoading(true);
        setErrorMsg("");
        setSuccessMsg("")
        try {
            const response = await axios.post(
                `${purpose}`, 
                JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    gender: formData.gender,
                    dob: formData.dob
                }),
                {
                    headers: { "Content-Type": "application/json" },
                })
                if(purpose == "events") {
                    setSuccessMsg("You've successfully registered for the upcoming event")
                }
                if(purpose == "communities") {
                    setSuccessMsg("You've successfully joined the community")
                }
                
                setLoading(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    gender: '',
                    dob: '',
                })
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                if(purpose == "events") {
                    setErrorMsg("An error occurred, unable to register for event");
                }
                if(purpose == "communities") {
                    setErrorMsg("An error occurred, unable to join the community");
                }
                setLoading(false);
              }
          
        }

        console.log('form data ', formData);
    }



    return (
        <BaseModal
            showModal={showModal}
            onClose={onClose}
            purpose={purpose}
        >
            <form className="form">
                    <div className="form__item">
                        <TextField
                            value={formData.fullName}
                            id="fullName"
                            label="Full name*"
                            type="text"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                            variant="filled"
                            onChange={(e)=>setFormData({...formData, fullName: e.target.value})}
                        />
                    </div>
                    <div className="form__item">
                        <TextField
                            value={formData.email}
                            id="email"
                            label="Email address*"
                            type="email"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                            variant="filled"
                            onChange={(e)=>setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                    <div className="form__item">
                        <TextField
                            value={formData.phone}
                            id="phone"
                            label="Phone number*"
                            type="text"
                            style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                            variant="filled"
                            onChange={(e)=>setFormData({...formData, phone: e.target.value})}
                        />
                    </div>
                    <div className="form__item">
                        {/*<label htmlFor="dob">Date of birth</label>*/}
                        <div className="form__dob">
                            <TextField
                                value={formData.dob}
                                id="dateOfBirth"
                                label="Date of Birth"
                                defaultValue="1990-01-01"
                                type="date"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setFormData({...formData, dob: e.target.value})}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                    </div>
                    <div className="form__item">
                        <RadioGroup aria-label="three" name="three" row onChange={(e)=>setFormData({ ...formData, gender: e.target.value })}>
                            <FormControlLabel
                                value="M"
                                control={<Radio color="primary" />}
                                label="Male"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="F"
                                control={<Radio />}
                                label="Female"
                                labelPlacement="end"
                            />
                        </RadioGroup>
                    </div>
                    {/* <span style={{ color: '#270', fontSize: '10px' }}>{errorMsg}</span>
                    <span style={{ color: 'rgba(0, 255, 0)', fontSize: '10px' }}>{successMsg}</span> */}
                    { errorMsg ? 
                            <Alert severity="error" variant="outlined">
                                {errorMsg}
                            </Alert> 
                            : null 
                    }
                    { successMsg ?
                            <Alert severity="success" variant="outlined" >
                                {successMsg}
                            </Alert>
                        : null
                    }
                    <div className="form__item form__submit--btn">
                        <button 
                        className="btn icon-btn" 
                        onClick={registerForEvent} 
                        disabled={loading}>
                            <SendIcon />
                            <span>Join Now</span>
                            {loading && <LoadingSpinner />}
                        </button>
                    </div>

                </form>
        </BaseModal>
    )
}

export default EventRegistrationForm;
