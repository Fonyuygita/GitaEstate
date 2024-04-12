import { Link } from "react-router-dom";
import "./Card.scss";
import { FaHeart, FaCommentAlt, FaShare } from 'react-icons/fa';
import { useState } from "react";

const Doctor=({data}) =>{
  const [like, setLike]=useState(false)
  const [countLike, setCountLike]=useState(0)


  const handleLike=()=>{
    setLike(!like)
    setCountLike(count=>count+1)
    
  }
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
          <div className="specialist">{data.specialty}</div>
        </h2>
        <div className="location">
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{data.address}</span>
        </p>
        <p className="experience">{data.experience}</p>
        </div>
        <div className="ratings">
        <span>Ratings</span>
        {data.ratings.map(rate=>(
          <h3 className="rate" key={rate}>{rate}</h3>
        ))}
        </div>
      
      </div>
    </div>


    <div className="latestInfo">
    <h3>Update from {data.name}</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis doloribus aspernatur excepturi dolore maxime suscipit, odio voluptatibus eius .</p>
    <div className="icons">
    <span onClick={handleLike}>{countLike} {countLike>=10 ? "k" : ""} <FaHeart color={like ? "red" : "gray"}/></span>
    <span>24 <FaShare /></span>
    <span>234 <FaCommentAlt color="red"/></span>
    

    </div>
    </div>
    </div>
  );
}

export default Doctor;
