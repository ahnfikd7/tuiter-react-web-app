import PostSummaryItem from "./post-summary-item.js";
import posts from "./posts.json"

const PostSummaryList = () => {
    return (
        <ul className="list-group">
            {
                posts.map((post, i) => {
                    return <PostSummaryItem key={i} post={post} />;
                })
            }
        </ul>
    );
}
export default PostSummaryList;