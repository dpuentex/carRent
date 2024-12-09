import "../assets/WelcomePage.css";
import { useState } from "react";

const WelcomePage = function () {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  return (
    <div className="homeContainerMain">
      <div className="inputContainer">
        <input
          className="placeInput"
          type="text"
          placeholder="City, State or ZIP"
        />
        {/* Controlled select: use value */}
        <select
          name="dateDropdown"
          className="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        >
          <option value="" disabled>
            From Date
          </option>
          <option value="2024-12-08">December 8, 2024</option>
          <option value="2024-12-09">December 9, 2024</option>
          <option value="2024-12-10">December 10, 2024</option>
        </select>

        <select
          name="timeDropdown"
          className="fromTime"
          value={fromTime}
          onChange={(e) => setFromTime(e.target.value)}
        >
          <option value="" disabled>
            Pick Up Time
          </option>
          <option value="08:00">08:00 AM</option>
          <option value="09:00">09:00 AM</option>
          <option value="10:00">10:00 AM</option>
        </select>

        <select
          name="dateDropdown"
          className="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        >
          <option value="" disabled>
            To Date
          </option>
          <option value="2024-12-08">December 8, 2024</option>
          <option value="2024-12-09">December 9, 2024</option>
          <option value="2024-12-10">December 10, 2024</option>
        </select>

        <select
          name="timeDropdown"
          className="toTime"
          value={toTime}
          onChange={(e) => setToTime(e.target.value)}
        >
          <option value="" disabled>
            Drop Off Time
          </option>
          <option value="06:00">06:00 PM</option>
          <option value="07:00">07:00 PM</option>
          <option value="08:00">08:00 PM</option>
        </select>

        <div className="searchBtnContainer">
          <div className="searchBtnDiv">
            <img
              className="searchBtnImg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAiFJREFUaEPtmUtygzAMQPEu2cGJmpysyclKTwS7ZOdGjOkYI1uWLDfQgU0CwZ+nr6WYZueX2fn+mwPg3Ros0sBjGC7GmE8P4uK+9/Bprf2Gz3PX3WqBigCe4/jVNM282ay9WWvvNUBYAI9huAUSz9q8/5I2SDaAROoJuv7Utlc2PTKABPDsHDOZ2dbvztanexgzm1hKYy8fuZ67bhojvUiA5zhaZPLemULW4gnTK9ZEEiBiNuJFIyDi+UCwUQBsMQ0H1J43ChCajsbmZ1PENHtqW9KcMT9BB2FSki4Qc04EQmRKKEBN6c9ALrpBQvy9JEJaAfyF9GOmJAmrJICm7YfmpGFGK4Bw0poAiBmx/SAHoDhbxhy5FsAi80oci3MsCAMGdz1MA7sHWJz1JZEhVwMaofTdPhDWF/pO/DoWsydlaGABIIl4WB6AOtfPkNUANDJ+7lFCPZRqZfwYQFi0q2tBQ/rJegCpxNQgtKT/vwsaoMMKD0mkSBUy8Bs3+/pRjqyCYu0UDgjR2YAOnrjpRQJg2dKXACzu7vu5ReLaKo3XUiG7eFIIEoBSf27SCt6DdswKSgKRDQAb0GwtxubiQrAAvHpW0iNdNcM0IEQAPsgUi435cM8W7XV4RnXwSiGKAIT2vxpWArEJgJR/UT6xGQACInqY3BQABrErDYRRjtp88jCn5aDSeSCb5/z5sTkT4gIfAFyJab9/aEBbotz5dq+BHxUutEABmdRxAAAAAElFTkSuQmCC"
            />
          </div>
        </div>
      </div>

      <div className="homeHeaderDiv">
        <img
          className="headerImg"
          src="src/assets/images/imageArt/2156AC8E-B36B-4CF4-8CBA-3DB265F7F3E1_1_201_a.jpeg"
          alt=""
        />
        <div className="welcomePageLogoContainer">
          <div className="welcomePageLogoDiv">
            <h1 className="welcomePageLogo">SwiftPick</h1>
            <img
              className="companyLogo"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfdJREFUaEPtmAlOAzEMRdOTAScDTgacDOpqjNKMHf+fZRa1I6GRSib+z1uWSzr5czm5/vQE2DuCsyLwmlJ6TynJW57P5f0xGngkgIiVv5dMuKV3KMwIgNLbjJO7YVoBekR7gE0wDAAr+nvJfa0DqQn0gWEiADSvVZiKlrf1aBEPg/EAGG+L2J9r4crbEz4S5q6TWQC/YJwjb4PT3IYxkbnTzAKMFO0BRjA0wBaiGRgIoJbXTH0waaQ2vdVafw9rQAR6xfgVrLKMYG+s2H5DJ4raaD7PFuLzdgxBoAASNqZ3ow6sjZPFLNz8oQBla5XJ2b4fQVlOCvWFAxYvlN5HvosEW/8vHSVpVF0cESGlZ6DQtqi/bsXLOgsLGgGw0ifMzUYA6YACkT9VjRFAU142itfPqDRiAWamjwJQaRQBbJk+CkClUQ1gj/Sh06gGsOXKG5WN2408gCOJz7cXuoD+A1sAe2wbogi4eyT2QIMamjVulUooQN4+Z0YIsQMdaHIPWr1/BgRqhwbwCh09/KPphNp5PAA0tKinvXGoHToCYhAprl4A1E4IcMRFzN1eW4VzZIBVmp1tK7G6qaht5ka3yd4aMbW2AERniF6hnuMeD8Aq5vCWoNf9xs2ETEmfB+Sj8hJ3q1tqyu7sfB4QkPoUT4DpLg4MnD4Cfw4OhDEm/4zWAAAAAElFTkSuQmCC"
            />
          </div>

          <p className="welcomeTextAnimation">
            ANYTIME. ANYPLACE. ANY OCCASION.
          </p>
        </div>
      </div>

      <div className="homeIntroContainer">
        <div className="HomeIntroTextContainer">
          <div className="HomeIntroText">
            <h1>SwiftPick</h1>
            <p>ANYTIME. ANYPLACE. ANY OCCASION</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati suscipit mollitia quidem, est pariatur blanditiis
              asperiores delectus nam. Sint, commodi officiis illum error
              numquam velit quaerat cumque beatae labore nobis.
            </p>
          </div>
        </div>

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
  );
};

export default WelcomePage;
