import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">
        Oops! The page you are looking for doesn’t exist.
      </p>
      <a href="/" className="notfound-button">
        Go Back Home
      </a>
    </div>
  );
}
