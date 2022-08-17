import React, {useEffect, useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Alert from '@mui/material/Alert';
import '../Give/give.scss';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import axios from '../../api/index';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



const AdminStore = () => {
    const [adminStore, setAdminStore] = useState({
        title: '',
        author: '',
        message: '',
        amount: '',
        youtubeLink: '',
        datePreached: '',
        payable: 'false',
    });

    const handleFiles = (e: any) => {
        let file = e.target.files[0];
        setFile(file);
        console.log(file);

    }

    const handleAudio = (e: any) => {
        let audio = e.target.files[0];
        setAudio(audio);
        console.log(audio);
    }

    const handleImage = (e: any) => {
        let image = e.target.files[0];
        setImage(image);
        console.log(image);
    }


    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [audio, setAudio] = useState('');
    //const [payable, setPayable] = useState(false);

    useEffect(() => {
        console.log(` from use effect`, audio);
        console.log(` from use effect`, typeof(audio));
    }, [audio, image,])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("image", image);
            formData.append("audio", audio);
            formData.append('title', adminStore.title);
            formData.append('author', adminStore.author);
            formData.append('message', adminStore.message);
            formData.append('amount', adminStore.amount);
            formData.append('youtubeLink', adminStore.youtubeLink);
            formData.append('datePreached', adminStore.datePreached);
            formData.append('payable', adminStore.payable);
            const response = await axios.post(
                'store',
                formData
              ,
                {
                    headers: { "Content-Type": "multipart/form-data"},
                }
            )
            setAdminStore({
                title: '',
                author: '',
                message: '',
                amount: '',
                youtubeLink: '',
                datePreached: '',
                payable: 'false'
            });
            console.log(adminStore);
            setSuccessMsg('Message uploaded successfully');
            setLoading(false);
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                setErrorMsg(" Unable to upload message");
                setLoading(false);
              }
          
        }
    }

    
//   const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//      setSelectedDrink(event.target.value);
//   };

    return (
        <div className="givePage">
            <div className="header">
                <div className="header__bg">
                    <div className="header__container">
                        <p className="header__title">Admin page.</p>
                        <p className="header__text">
                            Upload Messages
                        </p>
                    </div>
                </div>
            </div>
            <div className="recurring">
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
                <div className="recurring__form">
                    <div className="from">
                        <div className="form__item">
                            <TextField
                                value={adminStore.title}
                                id="title"
                                label="Title"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({...adminStore, title: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminStore.author}
                                id="author"
                                label="Author"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({...adminStore, author: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminStore.amount}
                                id="amount"
                                label="Amount"
                                type="amount"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({ ...adminStore, amount: e.target.value })}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminStore.message}
                                id="message"
                                label="Message"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({...adminStore, message: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminStore.youtubeLink}
                                id="youtubeLink"
                                label="Youtube Link"
                                type="youtubeLink"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({...adminStore, youtubeLink: e.target.value})}
                            />
                        </div>
                        <div className="form__dob">
                            <TextField
                                value={adminStore.datePreached}
                                id="datePreached"
                                label="Date Message Preached"
                                defaultValue="1990-01-01"
                                type="date"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminStore({...adminStore, datePreached: e.target.value})}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <div className="form__item">
                        <Button variant="contained" component="label">
                            Upload sermon image
                            <input 
                            hidden accept="image/*" 
                            multiple 
                            type="file"
                            onChange={handleImage} />
                        </Button>
                        </div>
                        <div className="form__item">
                        <Button variant="contained" component="label">
                            Upload transcript(pdf)
                            <input 
                            hidden 
                            accept="pdf/*" 
                            multiple 
                            type="file" 
                            onChange={handleFiles}/>
                        </Button>
                        </div>
                        <div className="form__item">
                        <Button variant="contained" component="label">
                            Upload message(mp3)
                            <input 
                            hidden 
                            accept="mp3/*" 
                            multiple 
                            type="file" 
                            onChange={handleAudio}/>
                        </Button>
                        </div>

                        <div className="form__item">
                        <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Payable?</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            onChange={(e)=>setAdminStore({ ...adminStore, payable: e.target.value })}
                        >
                            <FormControlLabel value="true" control={<Radio />} label="Yes"  />
                            <FormControlLabel value="false" control={<Radio />} label="No"  />
                        </RadioGroup>
                        </FormControl>
                        </div>

                        <div className="form__item form__submit--btn">
                            <button 
                            className="btn icon-btn"
                            disabled={loading}
                            onClick={handleSubmit}>
                                <SendIcon />
                                <span>Submit</span>
                                {loading && <LoadingSpinner /> }
                            </button>
                        </div>
                    </div>

                </div>
                </div>
            <Footer />
        </div>
)
}
export default AdminStore;
