import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    return(
        <div className="row mt-3">
            <div className="col">
                <i className="bi bi-chat me-2"></i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="bi bi-arrow-repeat me-2"></i>
                {tuit.retuits}
            </div>
            {/*<div className="col">*/}
            {/*    {*/}
            {/*        tuit.liked &&*/}
            {/*        <i className="bi bi-heart-fill me-2 text-danger"></i>*/}
            {/*    }*/}
            {/*    {*/}
            {/*        !tuit.liked &&*/}
            {/*        <i className="bi bi-heart me-2"></i>*/}
            {/*    }*/}

            {/*</div>*/}
            <div className="col">
                {
                    tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                    ...tuit,
                                                                    likes: tuit.likes - 1,
                                                                    liked: false
                                                               }))
                    } className="bi bi-heart-fill me-2 text-danger"></i>
                }

                {
                    !tuit.liked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   likes: tuit.likes + 1,
                                                                   liked: true
                                                               }))
                    }
                       className="bi bi-heart me-2"></i>
                }
                {tuit.likes}
            </div>

            <div className="col">
                {
                    tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   dislikes: tuit.dislikes - 1,
                                                                   disliked: false
                                                               }))
                    } className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
                }
                {
                    !tuit.disliked &&
                    <i onClick={() => dispatch(updateTuitThunk({
                                                                   ...tuit,
                                                                   dislikes: tuit.dislikes + 1,
                                                                   disliked: true
                                                               }))
                    } className="bi bi-hand-thumbs-down me-2"></i>
                }
                {tuit.dislikes}
            </div>



            <div className="col">
                <i className="bi bi-share"></i>
            </div>
        </div>
    )
}
export default TuitStats;