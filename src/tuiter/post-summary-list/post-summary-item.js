import React from 'react';

const PostSummaryItem = ({
                             post = {
                                 topic: "Web Development",
                                 userName: "ReactJS",
                                 time: "2h",
                                 title: "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 image: "/images/react.png"
                             }
                         }) => {
    const { topic, userName, time, title, image } = post;
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">

                    <span className="text-secondary mb-1">{userName} </span>
                    <i className="fas fa-check-circle"></i>
                    <span className="text-secondary"> .
                    {time}</span>
                    <p className="fw-bolder">{topic}</p>
                    <p className="fw">
                        {title}
                    </p>
                </div>
                <div className="col-2">
                    <img className="img-fluid" src={image} alt='post-img' />
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;