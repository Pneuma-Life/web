import { Route, Routes } from "react-router-dom";
import Homepage from '../pages/Homepage/Homepage';
import AboutUs from '../pages/AboutUs/AboutUs';
import Live from '../pages/Live/Live';
import Events from '../pages/Events/Events';
import Messages from '../pages/Messages/Messages';
import Blog from '../pages/Blog/Blog';
import BlogDetails from '../pages/Blog/BlogDetails';
import Give from '../pages/Give/Give';
import ContactUs from '../pages/ContactUs/ContactUs';
import Store from '../pages/Messages/Store';
import Communities from '../pages/Communities/Communities';
// import Series from '../pages/Messages/Series';
import AdminStore from '../pages/Admin/AdminStore';
import AdminBlog from '../pages/Admin/AdminBlog';


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/live" element={<Live />} />
            <Route path="/events" element={<Events />} />
            <Route path="/store" element={<Messages />} />
            <Route path="/blog" element={<Blog />} />
            <Route path={`/blog/:id`} element={<BlogDetails /> } />
            <Route path={`/store/:id`} element={<Store />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/communities" element={<Communities />} />
            {/* <Route path="/series" element={<Series />} /> */}
            <Route path="/admin-store" element={<AdminStore />} />
            <Route path="/admin-blog" element={<AdminBlog />} />
        </Routes>
    )
}
