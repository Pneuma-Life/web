import React, {useEffect, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// import BlogImage from '../../assets/images/blogg.png';
// import Tools from '../../assets/images/tools.png';
import { useParams } from 'react-router-dom';
import axios from '../../api/index';
import './blogDetails.scss'

const BlogDetails = () => {
    
  return (
    <div className="blogPage blog">
        <BlogHeader />
        <BlogContentComponent />
        <Footer />
    </div>
  )
}

const BlogHeader = () => {
    return (
        <div className="header">
            <div className="header__bg">
                <div className="header__container">
                    <p className="header__tittle"> Blog Details</p>
                </div>
            </div>
        </div>
    )
}

const BlogContentComponent = () => {
    const {id} = useParams();

    const [ blogDetails, setBlogDetails ] = useState<any>({});

    useEffect(() => {
        axios.get(`blog/${id}`)
        .then(res => {       
            setBlogDetails(res.data.query);
            console.log(res.data.query);
        })
        .catch(err => console.log(err))
    }, [id]);

    return (
        <div className="blog__contentt">
            {
            <div 
            className="blog__postts"
            >
                <div className="blog__post-img">
                    <img src={blogDetails.photo} alt="blog image" />
                </div>
                <div className="blog__post-detail">
                    <div className="blog__post-header">
                        <div className="blog__post-grp">
                            <div className="blog__post--title"> {blogDetails.title} </div>
                            <div className="blog__post--author">By Pastor Dafe Richard</div>
                        </div>
                        <div className="blog__post--datte">{blogDetails.createdAt?.toLocaleString().split('T')[0]}</div>
                    </div>
                    <p className="blog__post-text">
                       {blogDetails.body}
                    </p>
                </div>
            </div> 
        }

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
                    {/* <p className="blog__sidebar-menu-item">Devotional</p> */}
                </div>
            </div>
        </div>
    )
}

export default BlogDetails;
