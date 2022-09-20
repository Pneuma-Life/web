import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Planted from '../../assets/images/planted_series.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Pagination} from "@mui/material";

import './series.scss';

const Series = () => {
  return (
    <div className="Series">
      <Navbar />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <SeriesComponent />
      <div className="Series__pagination">
            <Pagination count={6} variant="outlined" shape="rounded"/>
        </div>
      <Footer /> 
    </div>
  )
}

const SeriesComponent = () => {
  return(
    <div className="SeriesComponent"> 
      <div className="SeriesComponent-img"> 
        <img src={Planted}  alt='series planted'/>
      </div>
      <div className="SeriesComponent__planted">
                <div className="SeriesComponent__planted--date"> 01 <br/> May </div> 
                <div className="SeriesComponent-author">
                    By Pastor Dafe Richard
                </div>
                <div className="SeriesComponent-title">
                <Link to="/message">  Planted ( PT 1) </Link>
                </div>
                <div className="SeriesComponent-desc">
                    The design for flourishing is in the planting of the Lord
                </div>
                <Link to="/store/message">
                <div className="SeriesComponent--footer">
                    <p>View Message</p>
                    <ArrowForwardIcon className="downloadIcon" />
                </div>
                </Link>
        </div>
    </div>
  )
}


export default Series
