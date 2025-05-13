import "./CoverImage.css";
import coverImage from "../assets/images/wheat.png";

const CoverImage = () => {
  return (
    <>
      <img className="coverImage" src={coverImage} alt="Cover Image" />
      <p className="coverTitle">BLOG</p>
    </>
  );
};

export default CoverImage;
