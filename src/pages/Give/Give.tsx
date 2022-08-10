import React, {useEffect, useState} from 'react'
import GivePartnership from '../../assets/icons/give-partnewship.png'
import GiveOffering from '../../assets/icons/give-offering.png'
import GiveSeed from '../../assets/icons/give-seed.png'
import SendIcon from '@mui/icons-material/Send';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Footer from '../../components/Footer/Footer';
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import Alert from '@mui/material/Alert';
import './give.scss';
import TextField from "@mui/material/TextField";
import axios from '../../api/index';
// import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';



enum giveTypeEnum {
    partnership = "partnership",
    offering = "offering",
    seed = "seed",
}

enum paymentMethodEnum {
    bankTransfer = "bankTransfer",
    cardPayment = "cardPayment",
}

const Give = () => {
    const [recurringGiveForm, setRecurringGiveForm] = useState({
        fullname: '',
        address: '',
        city: '',
        telephone: '',
        email: ''
    });
    const [selectedGive, setSelectedGive] = useState<giveTypeEnum>();
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<paymentMethodEnum>()

    const showPaymentMethod = selectedGive !== undefined;

    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [loading, setLoading] = useState(false);

    interface IConfig {
        public_key: string;
        tx_ref: any;
        amount: number;
        currency: string;
        payment_options: string;
        customer: {
            email: string;
            phonenumber: string;
            name: string;
        };
        customizations: {
            title: string;
            description: string;
            logo: string;
        };
    }
 

    // //handle payment here  
    // const config: IConfig = {
    //     public_key: 'FLW*******K-*********************-X',
    //     //public_key: process.env.REACT_APP_PUBLIC_KEY,
    //     tx_ref: Date.now(),
    //     amount: 100,
    //     currency: 'NGN',
    //     payment_options: 'card,mobilemoney,ussd',
    //     customer: {
    //       email: 'user@gmail.com',
    //       phonenumber: '07064586146',
    //       name: 'joel ugwumadu',
    //     },
    //     customizations: {
    //       title: 'Pneuma Life City Church',
    //       description: 'Payment for message audio',
    //       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    //     },
    //   };

    // const handleFlutterPayment = useFlutterwave(config);
    

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setSuccessMsg('');
        setErrorMsg('');
        setLoading(true);
        try {
            const response = await axios.post(
                'give',
                JSON.stringify({ 
                    fullname: recurringGiveForm.fullname,
                    address: recurringGiveForm.address,
                    city: recurringGiveForm.city,
                    telephone: recurringGiveForm.telephone,
                    email: recurringGiveForm.email
                 }),
                {
                    headers: { "Content-Type": "application/json" },
                }
            )
            setRecurringGiveForm({
                fullname: '',
                address: '',
                city: '',
                telephone: '',
                email: ''
            });
            setSuccessMsg('Giving successfully scheduled');
            setLoading(false);
        } catch(err: any) {
            if (!err?.response) {
                setErrorMsg("No Server Response");
                setLoading(false);
              } else {
                setErrorMsg(" Unable to schedule giving ");
                setLoading(false);
              }
          
        }
    }

    return (
        <div className="givePage">
            <div className="header">
                <div className="header__bg">
                    <div className="header__container">
                        <p className="header__title">Give.</p>
                        <p className="header__text">
                            Partner with PNEUMALIFE and help us reach the world through your generosity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="give">
                <div
                    className={"give__item " + (selectedGive===giveTypeEnum.partnership ? "isSelected": "") }
                    onClick={()=>setSelectedGive(giveTypeEnum.partnership)}
                >
                    <div className="give__item--image">
                        <img src={GivePartnership} alt="" className="give__item--image-img"/>
                    </div>
                    <div className="give__item--text">
                        Partnership
                    </div>
                </div>
                <div
                    className={"give__item " + (selectedGive===giveTypeEnum.seed ? "isSelected": "") }
                    onClick={()=>setSelectedGive(giveTypeEnum.seed)}
                >
                    <div className="give__item--image">
                        <img src={GiveSeed} alt="" className="give__item--image-img"/>
                    </div>
                    <div className="give__item--text">
                        Seed
                    </div>
                </div>
                <div
                    className={"give__item " + (selectedGive===giveTypeEnum.offering ? "isSelected": "") }
                    onClick={()=>setSelectedGive(giveTypeEnum.offering)}
                >
                    <div className="give__item--image ">
                        <img src={GiveOffering} alt="" className="give__item--image-img"/>
                    </div>
                    <div className="give__item--text">
                        Offering
                    </div>
                </div>
            </div>
            {showPaymentMethod ?
                <div className="payment-method">
                    <div className="payment-method__head">
                        Choose Payment Method.
                    </div>
                    <div className="payment-method__group">
                        <div
                            className={"payment-method__item " + (selectedPaymentMethod === paymentMethodEnum.cardPayment ? "selected": "") }
                            onClick={()=>setSelectedPaymentMethod(paymentMethodEnum.cardPayment)}
                        >

                            <CreditCardIcon
                                style={{ color: (selectedPaymentMethod === paymentMethodEnum.cardPayment) ? "#FFFFFF" : "#EC100C"  }}
                                className="payment-method__item--icon"
                            />
                            <div className="payment-method__item--text">Pay with card</div>
                        </div>
                        <div
                            className={"payment-method__item " + (selectedPaymentMethod === paymentMethodEnum.bankTransfer ? "selected": "") }
                            onClick={()=>setSelectedPaymentMethod(paymentMethodEnum.bankTransfer)}
                        >
                            <AccountBalanceIcon
                                style={{ color: (selectedPaymentMethod === paymentMethodEnum.bankTransfer) ? "#FFFFFF" : "#EC100C"  }}
                                className="payment-method__item--icon"
                            />
                            <div className="payment-method__item--text">Bank Transfer</div>
                        </div>
                        { selectedPaymentMethod === paymentMethodEnum.bankTransfer ?
                            <div className="bank-info">
                            <ul className="bank-info__list">
                                <li className="bank-info__list--item">Diamond Bank</li>
                                <li className="bank-info__list--item">0099812093</li>
                                <li className="bank-info__list--item">Faithbreed</li>
                            </ul>
                            <div className="bank-info__button">
                                <button 
                                className="btn bank-info__button--btn"
                                onClick={() => {navigator.clipboard.writeText('0099812093')}}>
                                    Copy
                                </button>
                            </div>
                        </div>
                            :
                            <></>
                        }
                    </div>
                </div>
                :
                <></>
            }


            {selectedPaymentMethod === paymentMethodEnum.cardPayment ?
                <div className="pay-button">
                    <button
                    //  onClick={() => {
                    //     handleFlutterPayment({
                    //       callback: (response) => {
                    //          console.log(response);
                    //           closePaymentModal() // this will close the modal programmatically
                    //       },
                    //       onClose: () => {},
                    //     });
                    //   }}
                     className="btn">Pay</button>
                </div>
                : <></>
            }

            { selectedGive === undefined ?
                <div className="recurring">
                <div className="recurring__head">
                    <div className="recurring__head--head">
                       <span> Schedule a recurring giving.</span>
                    </div>
                    <div className="recurring__head--text">
                        To partner with our ministry, please fill the form below
                        every information received here remains confidential and is held in trust by pneumalife city church <br />
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
                    </div>
                </div>
                <div className="recurring__form">
                    <div className="from">
                        <div className="form__item">
                            <TextField
                                value={recurringGiveForm.fullname}
                                id="fullname"
                                label="Full name"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setRecurringGiveForm({...recurringGiveForm, fullname: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={recurringGiveForm.address}
                                id="address"
                                label="Address"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setRecurringGiveForm({...recurringGiveForm, address: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={recurringGiveForm.city}
                                id="city"
                                label="City"
                                type="city"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setRecurringGiveForm({ ...recurringGiveForm, city: e.target.value })}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={recurringGiveForm.telephone}
                                id="telephone"
                                label="Telephone"
                                type="text"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setRecurringGiveForm({...recurringGiveForm, telephone: e.target.value})}
                            />
                        </div>
                        <div className="form__item">
                            <TextField
                                value={recurringGiveForm.email}
                                id="email"
                                label="Email"
                                type="email"
                                style={{ width: '100%', color: 'rgba(0,0,0,0.58)', backgroundColor: 'rgba(0, 0, 0, 0.05)', borderRadius: '5px' }}
                                variant="filled"
                                onChange={(e)=>setRecurringGiveForm({...recurringGiveForm, email: e.target.value})}
                            />
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
                :
                <></>
            }
            <Footer />
        </div>
    )
}
export default Give;
