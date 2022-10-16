import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
      <li class="list-group-item">
        <span class="fw-bold">Who to follow</span>
      </li>
      ${
        who.map(acc => {
            return(WhoToFollowListItem(acc));
        }).join('')
    }
    </ul>
  `);
}
export default WhoToFollowList;