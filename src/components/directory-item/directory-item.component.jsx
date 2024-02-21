import "./directory-item.style.scss";
import { Link } from "react-router-dom";
const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="body">
        <Link to={`shop/${title}`}>
          <h2>{title}</h2>
        </Link>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
