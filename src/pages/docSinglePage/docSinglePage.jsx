import "./docSingle.scss"
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import React from "react"
import { singlePostData, userData } from "../../lib/dummydata";
import { useParams } from "react-router-dom";
import { doctorsData } from "../../lib/data";

function DoctorsSinglePage() {
    const {id}=useParams();
    // console.log(id);
    const getDoctor=doctorsData.find(doctor=>doctor.id===parseInt(id));
    console.log(getDoctor);

  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={getDoctor.images} />
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{getDoctor.name}</h1>
                <div className="address">
                  <img src={getDoctor.img} alt="" />
                  <span>{getDoctor.address}</span>
                </div>
                <div className="experience">{getDoctor.experience}</div>
              </div>
              <div className="user">
                <img src={getDoctor.img} alt="" />
                <span>{getDoctor.specialty}</span>
              </div>
            </div>
            <div className="bottom">{getDoctor.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
                <p>Renter is responsible</p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
                <p>Pets Allowed</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Followers</p>
          <div className="following">
          {getDoctor.following.map((avatar, index) => (
            <div className="avatar" key={index}>
              <img src={avatar} alt="Avatar" />
            </div>
          ))}
            
            </div>
           
         
          <p className="title">Nearby Places</p>
         
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
      </div>
    
  );
}

export default DoctorsSinglePage;
