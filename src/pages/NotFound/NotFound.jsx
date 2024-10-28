import { Link } from "react-router-dom";
import css from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={css.notFound}>
      <h1>404 Not Found</h1>
      <h2>Sorry, the page does not exist!</h2>
      <Link to="/" className={css.link}>
        Go back to <span className={css.linkSpan}> Home!</span>
      </Link>
    </div>
  );
};

export default NotFound;
