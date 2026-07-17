import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>

      <h2>Oops! Page Not Found</h2>

      <p>
        The page you are looking for doesn't exist.
      </p>

      <Link to="/">
        <button>🏠 Go Back Home</button>
      </Link>
    </div>
  );
}

export default NotFound;