import WhoToFollowListItem from "./who-to-follow-list-item.js";
import who from "./who.json"

const WhoToFollowList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <span className="fw-bold">Who to follow</span>
            </li>
            {
                who.map((w, i) => {
                    return <WhoToFollowListItem key={i} who={w}/>;
                })
            }
        </ul>
    );
}
export default WhoToFollowList;