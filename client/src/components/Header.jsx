import "../assets/Header.css";

function Header() {
  return (
    <div className="HeaderContainer">
      <nav className="headerNav">
        <p className="headerName">SwiftPick</p>
        <img
          className="companyLogo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAfdJREFUaEPtmAlOAzEMRdOTAScDTgacDOpqjNKMHf+fZRa1I6GRSib+z1uWSzr5czm5/vQE2DuCsyLwmlJ6TynJW57P5f0xGngkgIiVv5dMuKV3KMwIgNLbjJO7YVoBekR7gE0wDAAr+nvJfa0DqQn0gWEiADSvVZiKlrf1aBEPg/EAGG+L2J9r4crbEz4S5q6TWQC/YJwjb4PT3IYxkbnTzAKMFO0BRjA0wBaiGRgIoJbXTH0waaQ2vdVafw9rQAR6xfgVrLKMYG+s2H5DJ4raaD7PFuLzdgxBoAASNqZ3ow6sjZPFLNz8oQBla5XJ2b4fQVlOCvWFAxYvlN5HvosEW/8vHSVpVF0cESGlZ6DQtqi/bsXLOgsLGgGw0ifMzUYA6YACkT9VjRFAU142itfPqDRiAWamjwJQaRQBbJk+CkClUQ1gj/Sh06gGsOXKG5WN2408gCOJz7cXuoD+A1sAe2wbogi4eyT2QIMamjVulUooQN4+Z0YIsQMdaHIPWr1/BgRqhwbwCh09/KPphNp5PAA0tKinvXGoHToCYhAprl4A1E4IcMRFzN1eW4VzZIBVmp1tK7G6qaht5ka3yd4aMbW2AERniF6hnuMeD8Aq5vCWoNf9xs2ETEmfB+Sj8hJ3q1tqyu7sfB4QkPoUT4DpLg4MnD4Cfw4OhDEm/4zWAAAAAElFTkSuQmCC"
        />
        <nav className="topNav">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/make.model">Make/Model</a>
          </li>
          <li>
            <a href="/list">List Your Car</a>
          </li>
          <li>
            <a href="about-us">About Us</a>
          </li>
        </nav>
        <div className="userTagDiv">
          <img
            className="userIcon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAhtJREFUaEPtmVFOAzEMRNuTASeDngw4GWBpjdKsE4/H3q0itT9IbTaZZ48Tb7heFv9cF9d/eQI8OoOVGXjdYN4bKP3ua/vue/v7UQVeASAiRbSKRbUJlAClYDIAIvgTVeuMu7EgDAAbcYT17S+TajdkfHgXknS3HocWCQ4KZSOSgTPEKysMgQKcKT4EgQA8QjwM4QFU7jTBUvgfPi1sD+CHXbXwOdmVBML8zAAy1pFFpRB1S5RM6vbLsA2zMANgot8L78VmzhBT6wiAjT5yELF1Zc49ApAWIdrbwHv31oJE5zdrYQTA2AeJvlqqLAsWAGsfb0fr66EkSKsB7GxkATD+l+ieYaFDAaYHTucf1qYQAONN1YdkgS1gXePONZaFMgBHHmQwAFsDrUu0jWhbCea9ud+5IAtVADD9DvLM8gC7096qgWyRIZFkxxwKoPc8s1sF6/IrArMLeEUz5+08I4HRsyDUzKE2inSgWRBzrcwLTYV4hUKyEXqhkYm9LES7T8/rswN0GCxPxOxMiPQ+nnjv7Bnq9AC8LGRvmJF35NS1ikQO8We0HhDhsrY7r5eBSJHJ2P4saHshnQvtiVzxMiEKgGbC8zr6OyQ+CnAWBCyeAUC2VzTKVqvc3uZB80Qs1E+IFDckIvg+fTdnBqAt8BfiIoztocoB2gn1P44CpHbT3UnHiU3679BM7cZVZIBevOLBJ0BFFDNzLJ+BXwCgfzGic0ksAAAAAElFTkSuQmCC"
          />
          <a className="userTag" href="user">
            UserName
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
