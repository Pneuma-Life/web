import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { SelectChangeEvent } from "@mui/material/Select";
import PlantedSermon from '../../assets/images/planted_sermon.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Pagination from '@mui/material/Pagination';
import './messages.scss';
import {FormControl, MenuItem, Select} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LoadingSpinner from '../../components/Base/LoadingSpinner';
import axios from '../../api/index'
// import Arrow from '../../assets/icons/arror-right.png';

const Messages = () => {
  return (
    <div className="messagesPage">
        <Navbar />
        <MessageHeader />
        <SearchMessage />
        <MessagesCards />
        <div className="messagesPage__pagination">
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
        <Footer />
    </div>
  )
}

const MessageHeader = () => {
    return(
            <div className="header">
                <div className="header__bg">
                    <div className="header__container">
                        <p className="header__title">Message</p>
                        <p className="header__text">Make your device an assets</p>
                    </div>
                </div>
            </div>


    )
}

const SearchMessage = () => {
    const [sortBy, setSortBy] = useState("");
    const [searchValue, setSearchValue] = useState("");
    const handleSortBy = (e: SelectChangeEvent) => {
        setSortBy(e.target.value);
        // sort result here
    };
    const handleSearch = () => {
        if (searchValue.trim() === "") return;
      // handle search here
    };

    // const [store, setStore] = useState<any[]>([])

    // useEffect(() => {
    //     axios.get('store').then(res => {
    //         console.log(res.data);
    //         console.log(res.data.query)        
    //         setBlogs(res.data.query);
    //     }).catch(err => console.log(err))
    // }, [])

    const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="search">
            <div className="search__input--container">
                <div className="search__input">
                    <input
                        value={searchValue}
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className="search_filter"
                        placeholder="Enter sermon name"
                    />

                </div>
                <div className="search__input--btn" onClick={handleSearch}>
                    <SearchIcon style={{ color: "white" }} fontSize={"large"} />
                </div>
            </div>
            <div className="search__select">
                {/*<p className="search__select-text">Sort By :</p>*/}
                {/*    <select className="search_select">*/}
                {/*        <option value="">A - Z</option>*/}
                {/*        <option value="">Latest Sermon</option>*/}
                {/*        <option value="">Oldest</option>*/}
                {/*        <option value="">Series</option>*/}
                {/*    </select>*/}
                <p className="search__select-text">Sort By :</p>
                <FormControl fullWidth>

                    <Select
                        labelId="SortBy"
                        id="SortBy"
                        value={sortBy}
                        label="Sort By"
                        onChange={handleSortBy}
                        displayEmpty
                        renderValue={(value) => value}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={"A - Z"}> A - Z </MenuItem>
                        <MenuItem value={"Latest Sermon"}> Latest Sermon </MenuItem>
                        <MenuItem value={"Oldest"}> Oldest </MenuItem>
                        <MenuItem value={"Series"}> Series </MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

const MessagesCards = () => {
    const [stores, setStores] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    // const [id, setId] = useState('');

    useEffect(() => {
        setLoading(true);
        axios.get('store').then(res => {
            console.log(res.data);
            console.log(res.data.query)        
            setStores(res.data.query);
            // setId(res.data.query[0]._id);
            setLoading(false);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div className="message__cards">
            { stores.map((store) =>(
                   <div 
                   key={store._id}
                   className="message__card"
                   >
                   <Link to={`/store/${store._id}`}>
                  <div className="message__card--image">
                      <img src={store.image} alt=""  className="message__card--image-img" />
                      {/* <div className="message__card--date"> 01 <br/> May </div> */}
                  </div>
                  <div className="message__card--body">
                      <div className="message__card--body-author">
                          {store.author}
                      </div>
                      <div className="message__card--body-title">
                      {/* <Link to="/message">  Planted ( PT 1) </Link> */}
                      {store.title}
                      </div>
                      <div className="message__card--body-desc">
                          {store.message}
                      </div>
                      <div className="message__card--body-series">
                         Series: <span> {store.title} </span>
                         
                      </div>
                      <div className="message__card--body-rule"></div>
                      <div className="message__card--footer">
                          <p>View Message</p>
                          <ArrowForwardIcon className="downloadIcon" />
                      </div>
                  </div>
                  </Link> 
                  {/* <div className="message__card--date"> 01 <br/> May </div> */}
          </div>
     ))}
     </div>
    )
}

// const MessageCard = () => {
    
//     return (
//         <div className="message__card">
//              <Link to="/store/message">
//             <div className="message__card--image">
//                 <img src={PlantedSermon} alt=""  className="message__card--image-img" />
//                 {/* <div className="message__card--date"> 01 <br/> May </div> */}
//             </div>
//             <div className="message__card--body">
//                 <div className="message__card--body-author">
//                     By Pastor Dafe Richard
//                 </div>
//                 <div className="message__card--body-title">
//                 {/* <Link to="/message">  Planted ( PT 1) </Link> */}
//                 Planted ( PT 1)
//                 </div>
//                 <div className="message__card--body-desc">
//                     The design for flourishing is in the planting of the Lord
//                 </div>
//                 <div className="message__card--body-series">
//                    Series: <span>Planted</span>
                   
//                 </div>
//                 <div className="message__card--body-rule"></div>
//                 <div className="message__card--footer">
//                     <p>View Message</p>
//                     <ArrowForwardIcon className="downloadIcon" />
//                 </div>
//             </div>
//             </Link>
//             {/* <div className="message__card--date"> 01 <br/> May </div> */}
//     </div>
//     )
// }

export default Messages
