import "./Button.css";
import { Link } from "react-router-dom";

function ButtonLogout() {
  return (
    <>
      <Link to="/">
        <link
          href="https://fonts.googleapis.com/css2?family=Mitr:wght@500&display=swap"
          rel="stylesheet"
        />
        <button onClick={() => {localStorage.clear();window.location.refresh(false)} } className="btn-logout">
          Log out <i className="fas fa-right-from-bracket" />
        </button>
      </Link>
    </>
  );
}

export default ButtonLogout;
