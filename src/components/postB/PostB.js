import "./postB.css";

const PostB = () => {
  return (
    <div className="postB">
      <div className="imgContainer">
        <img src="assets/tech01.png" alt="" />
      </div>
      <div className="infoContainer">
        <div className="postsCategories">
          <span className="postCategory">Life</span>
          <span className="postCategory">Music</span>
        </div>
        <span className="postTitle">New Technology alert</span>
        <hr />
        <span className="datePosted">1 hr ago</span>
      </div>
      <p className="postDesc">
        Alfred Ochieng, the CEO of Gamacom Corporation announced that he is
        developing a new version of the artificial Human Interface with the
        ability to interact with human beings autonomously and provide accurate
        and reliable outcome without human supervision. It will be a life
        changing innovation for the E-Commerce industry.
      </p>
      <p className="read-more">read more...</p>
    </div>
  );
};

export default PostB;
