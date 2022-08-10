import { FormControlLabel, Radio, RadioGroup} from "@mui/material";
import BaseModal from "../Base/BaseModal";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from "@mui/material/TextField";
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import React, {useState} from "react";
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import './PraiseReportForm.scss';
import axios from '../../api/index'; 


interface PropsI  {
    showModal: boolean;
    onClose:  () => void;
    purpose: string;
}
const PraiseReportForm = ({ showModal, onClose, purpose} : PropsI ) => {
    const [formData, setFormData] =  useState({
        fullName: '',
        email: '',
        phone: '',
        report: '',
    })

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    
    const registerForEvent = async (e: any)=>{
        setErrorMsg('');
        setSuccessMsg('');
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(
                'praiseform', 
                JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,
                    report: formData.report
                }),
                {
                    headers: { "Content-Type": "application/json" },
                })
                console.log('form data ', formData);
                setSuccessMsg("You've successfully send your praise report")
                setLoading(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    report: '',
                })
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false)
              } else {
                setErrorMsg(" Unable to send praise report");
                setLoading(false)
              }
          
        }
        
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
                        onChange={(e : any)=>setFormData({...formData, fullName: e.target.value})}
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
                        onChange={(e: any)=>setFormData({...formData, email: e.target.value})}
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
                        onChange={(e: any)=>setFormData({...formData, phone: e.target.value})}
                    />
                </div>
                <div className="form__item">
                    <TextareaAutosize
                        value={formData.report}
                        id="report"
                        placeholder="Type your report..."
                        style={{ width: '100%', height: '210px', border: 'none', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', fontFamily: 'Gorditas400', borderRadius: '5px', padding: '10px'}}
                        minRows={10}
                        onChange={(e: any)=>setFormData({...formData, report: e.target.value})}
                    />
                </div>
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
                    disabled={loading}
                    >
                        <SendIcon />
                        <span>Submit</span>
                        {loading && <LoadingSpinner /> }
                    </button>
                </div>

            </form>
        </BaseModal>
    )
}

export default PraiseReportForm;
