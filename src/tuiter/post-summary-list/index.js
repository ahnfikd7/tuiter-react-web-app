import React from "react";
import PostSummaryItem
    from "./post-summary-item";
import postsArray from './posts.json';
import {useSelector} from "react-redux";



const PostSummaryList = () => {
     postsArray = useSelector(state => state.tuits)

    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                                   <PostSummaryItem
                                       key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;