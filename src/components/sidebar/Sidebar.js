import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sideItem">
        <span className="sideTitle">about me</span>
        <img src="assets/alfred.png" alt="" />
        <p>
          Alfred Ochieng is a Programmer Since 2020. I graduated with a
          Bachelor's degree in Civil Engineering but got interested in
          Technology. I make AI programs, develop software, websites and provide
          reliable solutions to modern problems using innovative technology. I
          am currently developing a life changing AI model to assist in
          E-Commerce
        </p>
      </div>
      <div className="sideItem">
        <span className="sideTitle">categories</span>
        <ul className="sideList">
          <li className="sideListItem">Music</li>
          <li className="sideListItem">Politics</li>
          <li className="sideListItem">Tech</li>
          <li className="sideListItem">Sport</li>
          <li className="sideListItem">Style</li>
          <li className="sideListItem">Health</li>
        </ul>
      </div>
      <div className="sideItem">
        <span className="sideTitle">follow us</span>
        <div className="sideSocialContainer">
          {/* facebook */}
          <img
            className="sideIcon"
            src="assets/social-media-icons/facebook.png"
            alt=""
          />
          {/* twitter */}
          <img
            className="sideIcon"
            src="assets/social-media-icons/twitter.png"
            alt=""
          />
          {/* linkedIn */}
          <img
            className="sideIcon"
            src="assets/social-media-icons/linkedin.png"
            alt=""
          />
          {/* WhatsApp */}
          <img
            className="sideIcon"
            src="assets/social-media-icons/whatsapp.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
