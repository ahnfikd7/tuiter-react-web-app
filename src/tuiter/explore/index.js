import PostSummaryList from "../post-summary-list/index.js";

const ExploreComponent = () => {
    return (
        <>
            <div className="row mb-1">
                <div className="col-11">
                    <input className="rounded-pill w-100" placeholder="Search Twitter" />
                </div>
                <div className="col-1">
                    <i className="fas fa-cog wd-icon-blue fa-2x"></i>
                </div>
            </div>

            <ul className="nav nav-tabs mb-1">
                <li className="nav-item">
                    <a className="nav-link active" href="/#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/#">Sports</a>
                </li>
                <li className="d-none d-md-inline nav-item">
                    <a className="nav-link" href="/#">Entertainment</a>
                </li>
            </ul>

            <div className="wd-nasa">
                <img className="w-100" src="../../images/relativity.jpg" />
                <h1 className="wd-nasa-text text-white">SpaceX's Starship</h1>
            </div>

            <PostSummaryList />
        </>
    );
}
export default ExploreComponent;