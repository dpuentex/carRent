import "../assets/Model.css";

function Model() {
  return (
    <div className="ModelContainerMain">
      <h1>MODEL</h1>
      <div className="ModelContainer">
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/sedan-car-model-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">SEDAN</p>
        </div>
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/coupe-car-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">COUPE</p>
        </div>
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/car-suv-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">SUV</p>
        </div>
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/pick-up-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">TRUCK</p>
        </div>
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/jeep-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">ADVENTURE</p>
        </div>
        <div className="modelImageContainer">
          <img
            className="modelImg1"
            src="src/assets/images/imgSilhouette/car-muscle-design-svgrepo-com.svg"
            alt=""
          />
          <p className="modelName">MUSCLE</p>
        </div>
      </div>
    </div>
  );
}

export default Model;
