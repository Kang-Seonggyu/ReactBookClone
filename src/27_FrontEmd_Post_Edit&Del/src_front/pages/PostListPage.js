import HeaderContainer from "../containers/common/HeaderContainer";
import PaginationContainer from "../containers/post/PaginationContainer";
import PostListContainer from "../containers/post/PostListContainer";


const PostListPage = () => {
    return (
    <div>
        <HeaderContainer />
        <PostListContainer />
        <PaginationContainer />
    </div>
    );
};

export default PostListPage;