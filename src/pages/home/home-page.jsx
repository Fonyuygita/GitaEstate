import React from "react";
import "./home.scss";
import SearchBar from "../../components/search/search-bar";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Your Favorite Doctor & Get well soon</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            labore consequatur quas, necessitatibus autem reprehenderit
            praesentium nulla illo! Vitae repellendus cum labore sint aspernatur
            vero, facere illum et eveniet alias quae enim? Aspernatur, optio.
          </p>

<div className="btn">
<button>See Gita</button>
<button className="register">Register</button>

</div>         

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Gynacologist</h2>
            </div>

            <div className="box">
              <h1>23+</h1>
              <h2>Optomologist</h2>
            </div>

            <div className="box">
              <h1>16+</h1>
              <h2>Gynacologist</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/main.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
