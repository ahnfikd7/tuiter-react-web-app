import React from 'react';

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: 'https://3dprint.com/wp-content/uploads/2015/08/m3.jpg',
                                     userName: 'NASA',
                                     handle: 'NASA'
                                 }
                             }) => {
    const { avatarIcon, userName, handle } = who;
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-3">
                    <img className="img-fluid rounded-circle" src={avatarIcon} alt="avatar" />
                </div>

                <div className="col-6 pl-0">
                    <span className="fw-bold">{userName} </span>
                    <i className="fas fa-check-circle"></i>
                    <p className="text-secondary mb-1">@{handle}</p>
                </div>

                <div className="col-3">
                    <button className="float-end btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;