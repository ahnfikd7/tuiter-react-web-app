import React from "react";
const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
    return (
        <div className= "list-group">

                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className={`list-group-item ${active === 'home' ? 'active' : ''}`} href="/">
                    <i className="fas fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>
                </a>
                <a className={`list-group-item ${active === 'explore' ? 'active' : ''}`} href="/">
                    <i className="fas fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>
                </a>
                <a className={`list-group-item ${active === 'notifications' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bell"></i>
                    <span className="d-none d-xl-inline"> Notifications</span>
                </a>
                <a className={`list-group-item ${active === 'messages' ? 'active' : ''}`} href="/">
                    <i className="fas fa-envelope"></i>
                    <span className="d-none d-xl-inline"> Messages</span>
                </a>
                <a className={`list-group-item ${active === 'bookmarks' ? 'active' : ''}`} href="/">
                    <i className="fas fa-bookmark"></i>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </a>
                <a className={`list-group-item ${active === 'lists' ? 'active' : ''}`} href="/">
                    <i className="fas fa-list"></i>
                    <span className="d-none d-xl-inline"> Lists</span>
                </a>
                <a className={`list-group-item ${active === 'profile' ? 'active' : ''}`} href="/">
                    <i className="fas fa-user"></i>
                    <span className="d-none d-xl-inline"> Profile</span>
                </a>
                <a className={`list-group-item ${active === 'more' ? 'active' : ''}`} href="/">
                    <i className="fas fa-ellipsis-h"></i>
                    <span className="d-none d-xl-inline"> More</span>
                </a>

            <div className="d-grid mt-2">
                <a href=".././tuit.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
            </div>


    )
};
export default NavigationSidebar;