import React, { useEffect, useState} from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useParams, Link } from 'react-router-dom';
import YoutubeIcon from '../../assets/icons/youtube_white.png';
import Transcript from '../../assets/icons/transcript.png'
import axios from '../../api/index';
import './messages.scss';

const Store = () => {

    useEffect(()=>{
        window.scroll(0,0);
    }, [])
  return (
    <div className="store">
        <Navbar />
        <StoreComponent />
        <Footer />
    </div>
  )
}

const StoreComponent = () => {
  const [stores, setStores] = useState<any>({})
  const {id} = useParams();

  useEffect(() => {
    axios.get(`store/${id}`)
    .then(res => {       
        setStores(res.data.query);
        console.log(res.data.query);
    })
    .catch(err => console.log(err))
}, [id]);

    return(
      
        <div className="store__component">
          {  stores.youtubeLink ?
            <div className="store__component--video">
                <iframe id='demoVideo'
                        src={stores.youtubeLink}
                        title={stores.title}
                        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="iframe-video"></iframe>
            </div> 
            : 
            <div className="store__component--video"> 
              <img src={stores.image} alt="Sermon image" className="store__component--image" />
            </div>

          }

          {
            <div className="store__component_content">

              <div className="store__component_sec">
              <div className="store__component_sec-title">
                  {stores.title}
                </div>
                <div className="store__component_sec-desc">
                    {stores.message}
                </div>
                <div className="store__component_sec-series">
                    Series: <span>{stores.title}</span>
                </div>
                <div className="store__component_sec-pastor">
                  <p className="store__component_sec-author">{stores.author} </p>
                  <ul className="store__component_sec-date">
                    <li>{stores.createdAt?.toLocaleString().split('T')[0]}</li>
                  </ul>
                </div>

                <div className="store__component_sec--footer">
              { stores.file ?
                <a
                  href={stores.file}
                  target="_blank"
                  download>
                 <button 
                  className="store__component_sec-btn"
                  >
                    <span>Download Message Transcript</span>
                    <img src={Transcript} alt="transcript_icon"/>
                  </button></a> : null }  
                </div>
              </div>
              <div className="store__component_secc">
                  <p className="store__component_secc-text">Make your device an asset. <br />
                      Listen to audio messages on the go!</p>
                      { stores.payable === true ? 
                         <button 
                          className="store__component_secc-btn"
                          >
                          <FileDownloadIcon className="downloadIcon" />
                              <span>Purchase Audio Message</span>
                          </button> : 
                          <a
                          href={stores.audio}
                          target="_blank"
                          download>
                          <button 
                          className="store__component_secc-btn"
                          >
                          <FileDownloadIcon className="downloadIcon" />
                              <span>Download Audio Message</span>
                          </button>
                          </a>
                      }
                    
              </div>
          </div>
          }
      </div>
  
    )
}
export default Store
