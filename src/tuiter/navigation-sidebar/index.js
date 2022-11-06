import React from 'react';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router";


const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <>
            <div className="list-group">
                <Link className="list-group-item" to="/">
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/tuiter" className={`list-group-item ${!active?'active':''}`}>
                    <i className="bi bi-house-door-fill me-2"></i>
                    Home
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                    <i className="bi bi-hash me-2"></i>
                    Explore
                </Link>
                <Link to="/" className="list-group-item">
                    <i className="bi bi-asterisk me-2"></i>
                    Labs
                </Link>
                <Link className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} to="/a7/tuiter/notifications">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </Link>
                <Link className={`list-group-item ${active === 'messages' ? 'active' : ''}`} to="/a7/tuiter/messages">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline"> Messages</span>
                </Link>
                <Link className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} to="/a7/tuiter/bookmarks">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </Link>
                <Link className={`list-group-item ${active === 'lists' ? 'active' : ''}`} to="/a7/tuiter/lists">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline"> Lists</span>
                </Link>
                <Link className={`list-group-item ${active === 'profile' ? 'active' : ''}`} to="/a7/tuiter/profile">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline"> Profile</span>
                </Link>
                <Link className={`list-group-item ${active === 'more' ? 'active' : ''}`} to="/a7/tuiter/more">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline"> More</span>
                </Link>
            </div>
            <div className="d-grid mt-2">
                <Link to=".././tuit.html"
                      className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </Link>
            </div>
        </>
    )
};

export default NavigationSidebar;