import Chat from "../../components/chat/Chat";
import List from "../../components/list/List.jsx";

import "./profile.scss";

function ProfilePage() {
  return (
    <div className="profilePage">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>User Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            
       <div className="bigImage">
       <img
       src="/user.png"
       alt=""
     />
       </div>
              <div className="smallImage">
              <img
              src="/user.png"
              alt=""
            />
              </div>
            
            
            <span>
              Username: <b>John Doe</b>
            </span>
            <span>
              E-mail: <b>john@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My Favorite Doctors</h1>
            <button>Create New Post</button>
          </div>
        <List/>
          
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <Chat/>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
