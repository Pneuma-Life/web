import React, {useEffect, useState} from 'react'
import SendIcon from '@mui/icons-material/Send';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import Alert from '@mui/material/Alert';
import '../Give/give.scss';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import axios from '../../api/index';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



const AdminBlog = () => {
    const [adminBlog, setAdminBlog] = useState({
        title: '',
        author: '',
        body: '',
    });


    const handleImage = (e: any) => {
        let image = e.target.files[0];
        setImage(image);
        //console.log(image);
    }


    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState('');
    

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append("image", image);
            formData.append('title', adminBlog.title);
            formData.append('author', adminBlog.author);
            formData.append('message', adminBlog.body);

            const response = await axios.post(
                'blog',
                formData
              ,
                {
                    headers: { "Content-Type": "multipart/form-data"},
                }
            )
            setAdminBlog({
                title: '',
                author: '',
                body: '',
            });
            console.log(adminBlog);
            setSuccessMsg('Blog uploaded successfully');
            setLoading(false);
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                setErrorMsg(" Unable to upload Blog");
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
                            Upload Blog
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
                                value={adminBlog.title}
                                id="title"
                                label="Title"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminBlog({...adminBlog, title: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminBlog.author}
                                id="author"
                                label="Author"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminBlog({...adminBlog, author: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={adminBlog.body}
                                id="message"
                                label="Message"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setAdminBlog({...adminBlog, body: e.target.value})}
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
export default AdminBlog;
