import PostB from "../postB/PostB";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="line"></div>
      <div className="news">
        <h3>Trending Stories</h3>
      </div>
      <div className="line"></div>
      <PostB />
      <PostB />
      <PostB />
      <PostB />
      <PostB />
      <PostB />
      <PostB />
      <PostB />
      <PostB />
    </div>
  );
};

export default Post;
