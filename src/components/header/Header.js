import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTopics">
        <span className="headerTopicSn">Full-Stack</span>
        <span className="headerTopicLg">Blog</span>
      </div>
      <img src="assets/coconut.png" alt="" className="headerImage" />
    </div>
  );
};

export default Header;
