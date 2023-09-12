// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"
import "./../assets/css/404.css";
import nfIcon from "./../assets/404 error with person looking for-bro.svg";

function App() {
  document.title = "Mark Maher || 404 Not Found";

  var description =
    "Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist or may have been moved.";

  return (
    <div className="centered">
      <img className="nfImage" src={nfIcon} alt="404 error with person looking for-bro" />
      <h1 className="nfH1" >404 Not Found</h1>
      <p className="nfP" >{description}</p>
      <p className="nfP" >You can go back to the <Link to={"/"} >Home Page</Link></p>
    </div>
  );
}

export default App;
