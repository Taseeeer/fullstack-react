import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl ? imageUrl : ""})`,
      }}
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
