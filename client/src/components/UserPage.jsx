import profilePicture from "../assets/images/21C3D419-30AE-42B0-9F5B-286A1E0B65DE_1_105_c.jpeg";

import "../assets/UserPage.css";

function UserPage() {
  return (
    <div className="UserPageContainer">
      <div className="ProfileContainer">
        <div className="ProfilePictureStatsContainer">
          <div className="profilePicContainer">
            <img id="profilePic" src={profilePicture} alt="Profile" />
            <div className="name-container">
              <span className="name">Diego Puente</span>
            </div>
          </div>
          <div className="introDiv">
            <h1 className="ownerTag">
              Hi my name is Diego, Feel free to check out my car collection!
            </h1>
            <div className="ownerStats">
              <div className="carsRented">
                <p className="statNO">38</p>
                <p>Cars Rented</p>
              </div>
              <div className="carsForRent">
                <p className="statNO">12</p>
                <p>Cars for Rent</p>
              </div>
              <div className="rating">
                <p className="statNO">45</p>
                <p>Total Cars</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="carPageContainer">
        <div className="carContainer">
          <img
            id="carImg"
            src="https://images5.alphacoders.com/941/thumb-1920-941921.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default UserPage;
