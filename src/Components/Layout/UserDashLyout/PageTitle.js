import { Link } from "react-router-dom";
import LeftIcon from "../../../Assets/Icons/LeftIcon";

const PageTitle = ({
  title = "Profile",
  description = "View and manage the children linked to your account. Add new players and track their activities.",
  showDescription = true,
  showButton = true,
  buttonText = "Edit Profile",
  buttonLink = "#",
  onButtonClick = null,
}) => {
  return (
    <div className="app-content-breadcrumb p-4">
      <div className="ud-title">
        <div className="ud-back-btn">
          <button className="btn btn-primary">
            <LeftIcon />
          </button>
        </div>
        <div className="ud-heading-cnt">
          <h1 className="ud-heading">{title}</h1>
          {showDescription && <p>{description}</p>}
        </div>
      </div>
      {showButton && (
        <div className="ud-heading-btn">
          {onButtonClick ? (
            <button className="btn orange" onClick={onButtonClick}>
              {buttonText}
            </button>
          ) : (
            <Link to={buttonLink} className="btn orange">
              {buttonText}
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default PageTitle;
