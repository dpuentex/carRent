import "../assets/WelcomePage.css";

const dateSelector = function () {
  return (
    <div className="homeContainerMain">
      <div>
        <div className="homeHeaderDiv">
          <img
            className="headerImg"
            src="src/assets/images/imgSilhouette/wp14693229-multiple-cars-wallpapers.jpg"
            alt=""
          />
        </div>
        <div className="homeIntroContainer">
          <h1>SwiftPick</h1>
          <p>ANYTIME. ANYPLACE. ANY OCATION</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            suscipit mollitia quidem, est pariatur blanditiis asperiores
            delectus nam. Sint, commodi officiis illum error numquam velit
            quaerat cumque beatae labore nobis.
          </p>
          <div className="homePageImgContainer">
            <img
              className="homeImg1"
              src="src/assets/images/imageArt/male-hand-gives-car-keys-male-hand-car-dealership-close-up_153228-1164.avif"
              alt=""
            />
            <img
              className="homeImg2"
              src="src/assets/images/imageArt/elegant-uber-driver-giving-taxi-ride_23-2149241795.avif"
              alt=""
            />
          </div>

          <button>ABOUT US</button>
        </div>
      </div>
    </div>
  );
};

export default dateSelector;
