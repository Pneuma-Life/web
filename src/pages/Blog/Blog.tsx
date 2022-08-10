import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import EastIcon from '@mui/icons-material/East';
import Pagination from '@mui/material/Pagination';
import { useParams } from 'react-router-dom';
import Photizo from '../../assets/images/photizo.png';
import Tools from '../../assets/images/tools.png';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import './blog.scss'
import {Download} from "@mui/icons-material";
import axios from '../../api/index';

const Blog = () => {
  return (
    <div className="blogPage blog">
        <BlogHeader />
        <BlogContentComponent />
        <div className="messagesPage__pagination">
            <Pagination count={1} variant="outlined" shape="rounded" />
        </div>
        <Footer />
    </div>
  )
}

const BlogHeader = () => {
    return (
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__title">Latest Blog Post</p>
                </div>
            </div>
        </div>
    )
}



const BlogContentComponent = () => {
    const [blogs, setBlogs] = useState<any[]>([])
    const [id, setId] = useState('');
    // const {id} = useParams();
    const baseUrl = ` https://faithbreed.herokuapp.com`;

    useEffect(() => {
        axios.get('blog').then(res => {       
            setBlogs(res.data.query);
            //console.log(res.data.query[0]._id);
            setId(res.data.query[0]._id);
            console.log(id);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className="blog__content">
            <div className="blog__posts">
                {blogs.map((blog) => (               
                <div 
                className="blog__post"
                key={blog._id}
                >
                    <div className="blog__post--image">
                        <img src={blog.photo} alt="blog" style={{width: '380px', height: '242px'}}/>
                    </div>
                    <div className="blog__post--content">
                        <div className="blog__post--date">{blog.createdAt.toLocaleString().split('T')[0]}</div>
                        <div className="blog__group">
                            <div className="blog__post--author">By Pastor Dafe Richard</div>
                            <div className="blog__post--title"> {blog.title} </div>
                            <div className="blog__post--read">
                                {blog.body}
                            </div>
                        </div>
                        <div>
                            <div className="blog__post--rule"> </div>
                            <Link to={`/blog/${id}`}> 
                            <button className="btn icon-btn  text-btn blog__post--readmore">
                                Read More
                                <EastIcon className="blog__post--readmore-icon" />
                            </button> </Link>
                        </div>
                    </div>
                </div> 
             ))}
                {/* <div className="blog__post">
                    <div className="blog__post--image">
                        <img src={Tools} alt=""/>
                    </div>
                    <div className="blog__post--content">
                        <div className="blog__post--date">10, July 2021</div>
                        <div className="blog__group">
                            <div className="blog__post--author">By Pastor Dafe Richard</div>
                            <div className="blog__post--title"> SPIRITUAL GROWTH </div>
                            <div className="blog__post--read">
                                As believers, God does not want us to remain Spiritual babies, but to grow...
                            </div>
                        </div>
                        <div>
                            <div className="blog__post--rule"> </div>
                            <button className="btn icon-btn text-btn blog__post--readmore">
                                Read More
                                 <EastIcon className="blog__post--readmore-icon"/>
                            </button>
                        </div>
                    </div>
                </div> */}

                {/* <div className="blog__post">
                    <div className="blog__post--image">
                        <img src={Photizo} alt=""/>
                    </div>
                    <div className="blog__post--content">
                        <div className="blog__post--date">10, July 2021</div>
                        <div className="blog__group">
                            <div className="blog__post--author">By Pastor Dafe Richard</div>
                            <div className="blog__post--title">PHOTIZO DAILY DEVOTIONAL (JUNE 2022)</div>
                            <div className="blog__post--read">
                            </div>
                        </div>
                        <div>
                            <div className="blog__post--rule"> </div>
                            <button className="btn icon-btn text-btn blog__post--readmore">
                                <DownloadOutlinedIcon />
                                <span>Download Photizo</span>
                            </button>
                        </div>
                    </div>
                </div> */}
                {/* <div className="blog__post">
                    <div className="blog__post--image">
                        <img src={Photizo} alt=""/>
                    </div>
                    <div className="blog__post--content">
                        <div className="blog__post--date">10, July 2021</div>
                        <div className="blog__group">
                            <div className="blog__post--author">By Pastor Dafe Richard</div>
                            <div className="blog__post--title">PHOTIZO DAILY DEVOTIONAL (JUNE 2022)</div>
                            <div className="blog__post--read">
                            </div>
                        </div>
                        <div>
                            <div className="blog__post--rule"> </div>
                            <button className="btn icon-btn text-btn blog__post--readmore">
                                <DownloadOutlinedIcon />
                                <span>Download Photizo</span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="blog__sidebar">
                <div className="blog__sidebar--hr"><hr/></div>
                <div className="blog__sidebar-search">
                    <input placeholder="Type here" className="blog__sidebar-search-input"/>
                </div>
                <div className="blog__sidebar-menu">
                    <p className="blog__sidebar-menu-title">Categories</p>
                    <p className="blog__sidebar-menu-item">All posts</p>
                    <p className="blog__sidebar-menu-item">Supernatural Culture</p>
                    <p className="blog__sidebar-menu-item">Leadership</p>
                    <p className="blog__sidebar-menu-item">Growth</p>
                    <p className="blog__sidebar-menu-item">Devotional</p>
                </div>
            </div>
        </div>
    )
}

export default Blog
