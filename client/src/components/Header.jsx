import "../assets/Header.css";

function Header() {
  return (
    <div className="MainHeaderContainer">
      <div className="headerLogoUser">
        <div className="headerLogoDiv">
          <p className="headerName">SwiftPick</p>
          <img
            className="companyLogo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfdJREFUaEPtmAlOAzEMRdOTAScDTgacDOpqjNKMHf+fZRa1I6GRSib+z1uWSzr5czm5/vQE2DuCsyLwmlJ6TynJW57P5f0xGngkgIiVv5dMuKV3KMwIgNLbjJO7YVoBekR7gE0wDAAr+nvJfa0DqQn0gWEiADSvVZiKlrf1aBEPg/EAGG+L2J9r4crbEz4S5q6TWQC/YJwjb4PT3IYxkbnTzAKMFO0BRjA0wBaiGRgIoJbXTH0waaQ2vdVafw9rQAR6xfgVrLKMYG+s2H5DJ4raaD7PFuLzdgxBoAASNqZ3ow6sjZPFLNz8oQBla5XJ2b4fQVlOCvWFAxYvlN5HvosEW/8vHSVpVF0cESGlZ6DQtqi/bsXLOgsLGgGw0ifMzUYA6YACkT9VjRFAU142itfPqDRiAWamjwJQaRQBbJk+CkClUQ1gj/Sh06gGsOXKG5WN2408gCOJz7cXuoD+A1sAe2wbogi4eyT2QIMamjVulUooQN4+Z0YIsQMdaHIPWr1/BgRqhwbwCh09/KPphNp5PAA0tKinvXGoHToCYhAprl4A1E4IcMRFzN1eW4VzZIBVmp1tK7G6qaht5ka3yd4aMbW2AERniF6hnuMeD8Aq5vCWoNf9xs2ETEmfB+Sj8hJ3q1tqyu7sfB4QkPoUT4DpLg4MnD4Cfw4OhDEm/4zWAAAAAElFTkSuQmCC"
          />
        </div>
        <p className="headerQuoteAnimated">This is your ride.</p>

        <div className="logUserBtnDiv">
          <button className="logCreateBtn">
            <a href="/login">Login/Create Account</a>
          </button>
          <a href="/register" className="userTagDiv">
            <img
              className="userIcon"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAhtJREFUaEPtmVFOAzEMRNuTASeDngw4GWBpjdKsE4/H3q0itT9IbTaZZ48Tb7heFv9cF9d/eQI8OoOVGXjdYN4bKP3ua/vue/v7UQVeASAiRbSKRbUJlAClYDIAIvgTVeuMu7EgDAAbcYT17S+TajdkfHgXknS3HocWCQ4KZSOSgTPEKysMgQKcKT4EgQA8QjwM4QFU7jTBUvgfPi1sD+CHXbXwOdmVBML8zAAy1pFFpRB1S5RM6vbLsA2zMANgot8L78VmzhBT6wiAjT5yELF1Zc49ApAWIdrbwHv31oJE5zdrYQTA2AeJvlqqLAsWAGsfb0fr66EkSKsB7GxkATD+l+ieYaFDAaYHTucf1qYQAONN1YdkgS1gXePONZaFMgBHHmQwAFsDrUu0jWhbCea9ud+5IAtVADD9DvLM8gC7096qgWyRIZFkxxwKoPc8s1sF6/IrArMLeEUz5+08I4HRsyDUzKE2inSgWRBzrcwLTYV4hUKyEXqhkYm9LES7T8/rswN0GCxPxOxMiPQ+nnjv7Bnq9AC8LGRvmJF35NS1ikQO8We0HhDhsrY7r5eBSJHJ2P4saHshnQvtiVzxMiEKgGbC8zr6OyQ+CnAWBCyeAUC2VzTKVqvc3uZB80Qs1E+IFDckIvg+fTdnBqAt8BfiIoztocoB2gn1P44CpHbT3UnHiU3679BM7cZVZIBevOLBJ0BFFDNzLJ+BXwCgfzGic0ksAAAAAElFTkSuQmCC"
            />
          </a>
          <a className="sideMenuBtnDiv" href="/user">
            <img
              className="sideMenuImg"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAK1JREFUaEPtlkEKwCAQxPT/j64/kIEwLNL07Ky7iWL3evzbj/e/HGDaoAY0AAl4hCBAHNcARggL/MLAByHR+BVyYsABoAINQIDdeHIHuh3A6g4AAeK4BjBCWCAx4EPWhKwBSDeJ41+JZJOxNckRGmsu2dgBEkrNNRpo0k1qJwZ8iROSlzX4HdDAtAG4fzeeXOJuB7C6A0CAOK4BjBAW0AAEiOMawAhhAQ1AgDh+AJfZDDGRtEaJAAAAAElFTkSuQmCC"
            />
          </a>
        </div>
      </div>
      <div className="headerNav">
        <nav className="topNav">
          <ul>
            <a href="/">Home</a>
          </ul>
          <ul>
            <a href="/make.model">Make & Model</a>
          </ul>
          <ul>
            <a href="/list">List Your Car</a>
          </ul>
          <ul>
            <a href="about-us">About Us</a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
