import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { readPost, unloadPost } from "../../modules/post";
import PostViewer from "../../components/post/PostViewer";
import { useNavigate, useParams } from "react-router-dom";
import PostActionButton from "../../components/post/PostActionButtons";



const PostViewerContainer = () => {
    // 처음 마운트될 때 포스트 읽기 API 요청
    // let params = useParams();
    const {postId} = useParams(); // @뭐/여기값
    const dispatch = useDispatch();
    const { post, error, loading } = useSelector(({ post, loading }) => ({
        post : post.post,
        error : post.error,
        loading : loading['post/READ_POST'],
    }));

    useEffect(() => {
        dispatch(readPost(postId));
        // 언마운트 될 때 리덕스에서 포스트 데이터 없애기
        return () => {
            dispatch(unloadPost());
        };
    }, [dispatch, postId]);

    return <PostViewer 
        post={post} 
        loading={loading} 
        error={error}
        actionButtons={<PostActionButton />}    
    />;
};

export default PostViewerContainer;