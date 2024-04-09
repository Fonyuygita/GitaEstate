import { Link } from "react-router-dom";
import "./Card.scss";

const Doctor=({data}) =>{
  console.log(data);
  return (
    <div className="cardContainer">
    <div className="card">
      <Link to={`/${data.id}`} className="imageContainer">
        <img src={data.img} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${data.id}`}>{data.name}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{data.address}</span>
        </p>
        <p className="price">$ {data.price}</p>
        <div className="ratings">
        {data.ratings.map(rate=>(
          <h3 className="rate" key={rate}>{rate}</h3>
        ))}
        </div>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{data.bedroom} Wards</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{data.specialty} Experience</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon">
              <img src="/chat.png" alt="" />
              <sup className="msg">2</sup>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="latestInfo">
    <h3>Update from {data.name}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis doloribus aspernatur excepturi dolore maxime suscipit, odio voluptatibus eius .</p>
    </div>
    </div>
  );
}

export default Doctor;
