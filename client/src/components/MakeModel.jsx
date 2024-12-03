import "../assets/MakeModel.css";

function MakeModel() {
  return (
    <div className="MakeModelContainer">
      <a href="/make">Make</a>
      <a href="/model">Model</a>
      <div className="MakeModelBoxes">
        <div className="MakeBox">
          <h1>MAKE</h1>
          <div className="make1">
            <div className="imageContainer">
              <img
                className="makeImg"
                src="src/assets/images/makeLogoImg/iwl5gbudvga9vvwkjifw.avif"
                alt=""
              />
              <p className="carName">ASTON MARTIN</p>
            </div>
          </div>
          <div className="make2">
            <div className="imageContainer">
              <img
                className="makeImg"
                src="src/assets/images/makeLogoImg/b0e52fa4db4b15c189cea234f803fffd.jpg"
              />
              <p className="carName">FERRARI</p>
            </div>
          </div>
          <div className="make3">
            <div className="imageContainer">
              <img
                className="makeImg"
                src="src/assets/images/makeLogoImg/istockphoto-1028680422-612x612.jpg"
                alt=""
              />
              <p className="carName">MERCEDE-BENZ</p>
            </div>
          </div>
          <div className="make4">
            <div className="imageContainer">
              <img
                className="makeImg"
                src="src/assets/images/makeLogoImg/BMW-logo-meaning.webp"
                alt=""
              />
              <p className="carName">BMW</p>
            </div>
          </div>
          <div className="make5">
            <div className="imageContainer">
              <img
                className="makeImg"
                src="src/assets/images/makeLogoImg/depositphotos_97293396-stock-photo-close-up-view-of-the.jpg"
                alt=""
              />
              <p className="carName">MCLAREN</p>
            </div>
          </div>

          <a href="/make" className="viewMore">
            VIEW MORE
          </a>
        </div>
        <div className="ModleBox">
          <h1>MODEL</h1>
          <div className="make1">
            <div className="imageContainer">
              <img
                className="modelImg"
                src="src/assets/images/imgSilhouette/sedan-car-model-svgrepo-com.svg"
                alt=""
              />
              <p className="carName">SEDAN</p>
            </div>
          </div>
          <div className="make2">
            <div className="imageContainer">
              <img
                className="modelImg"
                src="src/assets/images/imgSilhouette/coupe-car-svgrepo-com.svg"
                alt=""
              />
              <p className="carName">COUPE</p>
            </div>
          </div>
          <div className="make3">
            <div className="imageContainer">
              <img
                className="modelImg"
                src="src/assets/images/imgSilhouette/car-suv-svgrepo-com.svg"
                alt=""
              />
              <p className="carName">SUV</p>
            </div>
          </div>
          <div className="make4">
            <div className="imageContainer">
              <img
                className="modelImg"
                src="src/assets/images/imgSilhouette/pick-up-svgrepo-com.svg"
                alt=""
              />
              <p className="carName">TRUCK</p>
            </div>
          </div>
          <div className="make5">
            <div className="imageContainer">
              <img
                className="modelImg"
                src="src/assets/images/imgSilhouette/jeep-svgrepo-com.svg"
                alt=""
              />
              <p className="carName">ADVENTURE</p>
            </div>
          </div>

          <a href="/model" className="viewMore">
            VIEW MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default MakeModel;
