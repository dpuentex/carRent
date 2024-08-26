import Header from "./Header";
import Footer from "./Footer";
import "../assets/WelcomePage.css";

function WelcomePage() {
  return (
    <>
      <div className="WelcomePageContainer">
        <Header id="header" />
        <div>WELCOME PAGE</div>
        <Footer />
      </div>
    </>
  );
}

export default WelcomePage;
