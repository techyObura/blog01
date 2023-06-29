import Sidebar from "../../sidebar/Sidebar";
import SinglePost from "../../singlePost/SinglePost";
import "./singlePage.css";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default SinglePage;
