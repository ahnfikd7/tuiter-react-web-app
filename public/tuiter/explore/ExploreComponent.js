import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return(`
    <div class="row mb-1">
      <div class="col-11">
        <input class="rounded-pill w-100" placeholder="Search Twitter" />
      </div>
      <div class="col-1">
        <i class="fas fa-cog wd-icon-blue fa-2x"></i>
      </div>
    </div>
    <ul class="nav nav-tabs mb-1">
      <li class="nav-item">
        <a class="nav-link active" href="#">For you</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sports</a>
      </li>
      <li class="d-none d-md-inline nav-item">
        <a class="nav-link" href="#">Entertainment</a>
      </li>
    </ul>
    <div class="wd-nasa">
      <img class="w-100" src="../../images/relativity.jpg\" />
      <h1 class="wd-nasa-text text-white">SpaceX's Starship</h1>
    </div>
    ${PostSummaryList()}
  `);
}
export default ExploreComponent;