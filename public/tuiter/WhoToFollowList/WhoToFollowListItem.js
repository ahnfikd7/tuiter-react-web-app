const WhoToFollowListItem = (who) => {
    const { avatarIcon, userName, handle } = who;

    return (`
    <li class="list-group-item">
      <div class="row">
        <div class="col-3">
          <img class="img-fluid rounded-circle" src="${avatarIcon}" />
        </div>
        <div class="col-6 pl-0">
          <span class="fw-bold">${userName} </span><i class="fas fa-check-circle"></i>
          <p class="text-secondary mb-1">@${handle}</p>
        </div>
        <div class="col-3">
          <button class="float-end btn btn-primary rounded-pill">Follow</button>
        </div>
      </div>
    </li>
  `);
}
export default WhoToFollowListItem;